import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/middleware/auth';
import { supabase } from '@/lib/supabase';
import { ApiError } from '@/middleware/errorHandler';
import crypto from 'crypto';

// Dekryptera API-nyckel
function decryptApiKey(encrypted: string, ivHex: string): string {
  const ENCRYPTION_KEY = process.env.API_KEY_ENCRYPTION_SECRET || 'default-secret-key-change-in-production';
  const ALGORITHM = 'aes-256-cbc';
  
  const key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

// Validera produktdata
function validateProductData(product: any): boolean {
  return (
    typeof product.name === 'string' &&
    product.name.length > 0 &&
    typeof product.price === 'number' &&
    product.price > 0 &&
    (product.description === undefined || typeof product.description === 'string') &&
    (product.image === undefined || typeof product.image === 'string') &&
    (product.stock === undefined || (typeof product.stock === 'number' && product.stock >= 0))
  );
}

// POST /api/admin/products/import - Importera produkter från extern API
export async function POST(request: NextRequest) {
  try {
    await requireAdmin(request);
    
    const body = await request.json();
    const { api_key_id, endpoint } = body;
    
    if (!api_key_id) {
      throw new ApiError(400, 'API key ID är obligatoriskt');
    }
    
    // Hämta API-nyckel från databasen
    const { data: apiKeyData, error: apiKeyError } = await supabase
      .from('api_keys')
      .select('encrypted_key, iv, provider')
      .eq('id', api_key_id)
      .single();
    
    if (apiKeyError || !apiKeyData) {
      throw new ApiError(404, 'API-nyckel hittades inte');
    }
    
    // Dekryptera API-nyckeln
    const apiKey = decryptApiKey(apiKeyData.encrypted_key, apiKeyData.iv);
    
    // Anropa extern API (exempel med generisk implementation)
    const externalEndpoint = endpoint || 'https://api.example.com/products';
    
    let externalProducts: any[];
    try {
      const response = await fetch(externalEndpoint, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new ApiError(502, `Extern API returnerade fel: ${response.status}`);
      }
      
      const data = await response.json();
      externalProducts = Array.isArray(data) ? data : data.products || [];
    } catch (error) {
      throw new ApiError(502, 'Kunde inte ansluta till extern API');
    }
    
    // Validera och importera produkter
    const importedProducts = [];
    const errors = [];
    
    for (const product of externalProducts) {
      if (!validateProductData(product)) {
        errors.push({
          product: product.name || 'Unknown',
          error: 'Ogiltig produktdata'
        });
        continue;
      }
      
      try {
        const { data, error } = await supabase
          .from('products')
          .insert({
            name: product.name,
            description: product.description || '',
            price: product.price,
            image: product.image || '',
            stock: product.stock || 0
          })
          .select()
          .single();
        
        if (error) {
          errors.push({
            product: product.name,
            error: 'Kunde inte spara i databas'
          });
        } else {
          importedProducts.push(data);
        }
      } catch (error) {
        errors.push({
          product: product.name,
          error: 'Oväntat fel vid import'
        });
      }
    }
    
    return NextResponse.json({
      success: true,
      imported: importedProducts.length,
      errors: errors.length,
      products: importedProducts,
      errorDetails: errors
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode });
    }
    return NextResponse.json({ error: 'Internt serverfel' }, { status: 500 });
  }
}

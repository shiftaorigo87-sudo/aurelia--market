import crypto from 'crypto';

/**
 * Krypteringsmodul för API-nycklar
 * Använder AES-256-CBC för säker kryptering
 */

export interface EncryptedData {
  encrypted: string;
  iv: string;
}

/**
 * Kryptera en sträng
 */
export function encrypt(text: string): EncryptedData {
  const ENCRYPTION_KEY = process.env.API_KEY_ENCRYPTION_SECRET || 'default-secret-key-change-in-production';
  const ALGORITHM = 'aes-256-cbc';
  
  const key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    encrypted,
    iv: iv.toString('hex')
  };
}

/**
 * Dekryptera en sträng
 */
export function decrypt(encrypted: string, ivHex: string): string {
  const ENCRYPTION_KEY = process.env.API_KEY_ENCRYPTION_SECRET || 'default-secret-key-change-in-production';
  const ALGORITHM = 'aes-256-cbc';
  
  const key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

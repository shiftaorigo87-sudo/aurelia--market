# Lokal Setup Guide för Aurelia Market

## Steg 1: Konfigurera Supabase

### 1.1 Hämta dina Supabase-nycklar

1. Gå till din Supabase dashboard: https://pymtloyqohxpvlzmvqfy.supabase.co
2. Gå till **Settings** → **API**
3. Kopiera följande:
   - **Project URL**: `https://pymtloyqohxpvlzmvqfy.supabase.co`
   - **anon/public key**: (börjar med `eyJ...`)
   - **service_role key**: (börjar med `eyJ...`) - **HEMLIG!**

### 1.2 Uppdatera .env.local

Öppna `.env.local` och ersätt placeholder-värdena:

```env
NEXT_PUBLIC_SUPABASE_URL=https://pymtloyqohxpvlzmvqfy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=din-riktiga-anon-key-här
SUPABASE_SERVICE_KEY=din-riktiga-service-key-här
```

### 1.3 Skapa databastabeller

1. Gå till **SQL Editor** i Supabase
2. Kopiera innehållet från `database/schema.sql`
3. Kör SQL-koden för att skapa alla tabeller

## Steg 2: Lägg till testprodukter

Kör denna SQL i Supabase SQL Editor:

```sql
-- Lägg till testprodukter
INSERT INTO products (name, description, price, image, stock, active) VALUES
('Lyxig Guldarmband', 'Handgjort guldarmband i 18K guld med elegant design', 12999, 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500', 5, true),
('Diamantring', 'Vacker diamantring med 0.5 karat diamant', 24999, 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500', 3, true),
('Pärla Halsband', 'Elegant pärla halsband med vita sötvattenpärlor', 8999, 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500', 8, true),
('Guldörhängen', 'Klassiska guldörhängen i 14K guld', 5999, 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500', 10, true);
```

## Steg 3: Skapa en admin-användare

Kör denna SQL för att skapa en admin-användare:

```sql
-- Skapa admin-användare (lösenord: admin123)
INSERT INTO users (email, password_hash, role) VALUES
('admin@aureliamarket.se', '$2a$10$YourHashedPasswordHere', 'admin');
```

**OBS:** Du måste hasha lösenordet först. Använd bcrypt online tool eller registrera en vanlig användare först och uppdatera sedan rollen till 'admin'.

## Steg 4: Starta utvecklingsservern

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

## Steg 5: Testa funktionaliteten

### Registrera ny användare
1. Gå till http://localhost:3000/register
2. Fyll i email och lösenord (minst 8 tecken)
3. Klicka "Registrera"

### Logga in
1. Gå till http://localhost:3000/login
2. Använd dina registrerade uppgifter

### Testa sökfunktion
1. Gå till http://localhost:3000/products
2. Använd sökfältet för att söka produkter

### Admin-funktioner
1. Logga in som admin
2. Gå till http://localhost:3000/admin
3. Hantera produkter och ordrar

## Felsökning

### Problem: "Failed to fetch products"
- Kontrollera att Supabase-nycklarna är korrekta i `.env.local`
- Kontrollera att tabellerna är skapade i Supabase

### Problem: "Registration failed"
- Kontrollera att `users` tabellen finns
- Kontrollera att JWT_SECRET är satt i `.env.local`
- Öppna browser console (F12) för mer detaljer

### Problem: Inga produkter visas
- Kontrollera att du har lagt till testprodukter i databasen
- Kontrollera att `active = true` för produkterna

## Nästa steg

När allt fungerar lokalt:
1. Konfigurera Stripe för betalningar
2. Deploya till Vercel
3. Konfigurera production environment variables

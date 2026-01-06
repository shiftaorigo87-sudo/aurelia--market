# Deployment Guide - Aurelia Market E-handelsplattform

## Förutsättningar

Innan du deployar plattformen behöver du:

1. **Supabase-projekt**
   - Skapa ett konto på [supabase.com](https://supabase.com)
   - Skapa ett nytt projekt
   - Kör SQL-schemat från `database/schema.sql` i SQL Editor

2. **Stripe-konto**
   - Skapa ett konto på [stripe.com](https://stripe.com)
   - Hämta dina API-nycklar (test eller production)
   - Konfigurera webhooks för betalningar

3. **Hosting-plattform**
   - Vercel (rekommenderat)
   - Netlify
   - Eller annan Next.js-kompatibel hosting

## Deployment till Vercel

### Steg 1: Installera Vercel CLI

\`\`\`bash
npm install -g vercel
\`\`\`

### Steg 2: Logga in på Vercel

\`\`\`bash
vercel login
\`\`\`

### Steg 3: Konfigurera miljövariabler

Skapa en `.env.production` fil eller konfigurera i Vercel Dashboard:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-production-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-supabase-anon-key
SUPABASE_SERVICE_KEY=your-production-supabase-service-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# JWT
JWT_SECRET=your-strong-jwt-secret-change-this

# API Key Encryption
API_KEY_ENCRYPTION_SECRET=your-strong-encryption-secret-change-this

# App
NEXT_PUBLIC_APP_URL=https://your-domain.com
\`\`\`

### Steg 4: Deploy

\`\`\`bash
vercel --prod
\`\`\`

## Deployment till Netlify

### Steg 1: Installera Netlify CLI

\`\`\`bash
npm install -g netlify-cli
\`\`\`

### Steg 2: Logga in

\`\`\`bash
netlify login
\`\`\`

### Steg 3: Initiera projekt

\`\`\`bash
netlify init
\`\`\`

### Steg 4: Konfigurera build settings

- Build command: `npm run build`
- Publish directory: `.next`

### Steg 5: Lägg till miljövariabler

Gå till Netlify Dashboard → Site settings → Environment variables och lägg till alla miljövariabler.

### Steg 6: Deploy

\`\`\`bash
netlify deploy --prod
\`\`\`

## Post-Deployment Checklist

### 1. Verifiera Databas

- [ ] Kör `database/schema.sql` i Supabase SQL Editor
- [ ] Verifiera att alla tabeller skapades korrekt
- [ ] Kontrollera Row Level Security (RLS) policies

### 2. Konfigurera Stripe Webhooks

1. Gå till Stripe Dashboard → Developers → Webhooks
2. Lägg till endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Välj events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Kopiera webhook secret till miljövariabler

### 3. Skapa Admin-användare

Kör följande SQL i Supabase för att skapa en admin-användare:

\`\`\`sql
-- Byt ut email och lösenord
INSERT INTO users (email, password_hash, role)
VALUES (
  'admin@example.com',
  -- Generera hash med bcrypt (10 rounds)
  '$2a$10$...',
  'admin'
);
\`\`\`

Eller registrera via `/register` och uppdatera sedan rollen:

\`\`\`sql
UPDATE users 
SET role = 'admin' 
WHERE email = 'admin@example.com';
\`\`\`

### 4. Testa Kritiska Flöden

- [ ] Registrering och inloggning
- [ ] Produktvisning
- [ ] Lägg till i varukorg
- [ ] Checkout-process
- [ ] Betalning (test mode)
- [ ] Admin-panel åtkomst
- [ ] Produkthantering
- [ ] Orderhantering

### 5. Säkerhet

- [ ] Verifiera att alla miljövariabler är satta
- [ ] Kontrollera att JWT_SECRET är stark och unik
- [ ] Verifiera att API_KEY_ENCRYPTION_SECRET är stark och unik
- [ ] Testa rate limiting
- [ ] Verifiera CORS-inställningar
- [ ] Kontrollera att känsliga endpoints kräver autentisering

### 6. Performance

- [ ] Kör Lighthouse audit
- [ ] Verifiera bildoptimering
- [ ] Kontrollera laddningstider
- [ ] Testa på olika enheter och webbläsare

## Continuous Deployment

### GitHub Actions

Projektet inkluderar GitHub Actions för CI/CD:

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Körs vid push till main/develop
   - Linting och type checking
   - Build verification

2. **Automatisk deployment**
   - Vercel: Koppla GitHub repository i Vercel Dashboard
   - Netlify: Koppla GitHub repository i Netlify Dashboard

### Miljövariabler i GitHub

Lägg till secrets i GitHub:
- Settings → Secrets and variables → Actions → New repository secret

Lägg till alla miljövariabler som secrets.

## Monitoring och Underhåll

### Loggar

- **Vercel**: Dashboard → Project → Logs
- **Netlify**: Dashboard → Site → Deploys → Deploy log
- **Supabase**: Dashboard → Logs

### Backup

- Säkerhetskopiera Supabase-databasen regelbundet
- Exportera data via Supabase Dashboard eller pg_dump

### Uppdateringar

\`\`\`bash
# Uppdatera dependencies
npm update

# Kontrollera säkerhetsbrister
npm audit

# Fixa säkerhetsbrister
npm audit fix
\`\`\`

## Felsökning

### Build-fel

1. Kontrollera att alla miljövariabler är satta
2. Verifiera Node.js version (20+)
3. Rensa cache: `rm -rf .next node_modules && npm install`

### Databas-fel

1. Verifiera Supabase URL och nycklar
2. Kontrollera RLS policies
3. Verifiera att tabeller existerar

### Betalnings-fel

1. Kontrollera Stripe nycklar (test vs production)
2. Verifiera webhook secret
3. Kontrollera webhook endpoint i Stripe Dashboard

## Support

För frågor och support:
- Öppna en issue på GitHub
- Kontakta utvecklingsteamet

---

**Lycka till med din deployment! 🚀**

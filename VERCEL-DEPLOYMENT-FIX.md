# Vercel Deployment Fix - Komplett Guide ✅

## Problem
Deployment till Vercel misslyckas, troligen på grund av saknade miljövariabler eller build-fel.

## Lösning: Konfigurera Miljövariabler i Vercel

### Steg 1: Logga in på Vercel
1. Gå till https://vercel.com
2. Logga in med ditt konto
3. Välj ditt projekt: `aurelia-market`

### Steg 2: Lägg till Miljövariabler

Gå till **Settings** → **Environment Variables** och lägg till följande:

#### ✅ OBLIGATORISKA Variabler (för Demo-läge)

```bash
# Demo Mode - VIKTIGT!
DEMO_MODE=true

# JWT Secret - Generera en säker nyckel
JWT_SECRET=aurelia-market-production-secret-2024-change-this-to-random-string

# API Key Encryption
API_KEY_ENCRYPTION_SECRET=aurelia-encryption-secret-2024-change-this-to-random-string

# App URL - Ändra till din Vercel-URL
NEXT_PUBLIC_APP_URL=https://din-app.vercel.app
```

#### 📦 Stripe Variabler (Test-läge)

```bash
# Stripe Test Keys (fungerar utan riktig Stripe-konto)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_placeholder
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
```

#### 🗄️ Supabase Variabler (INTE nödvändiga i demo-läge)

```bash
# Dessa behövs INTE om DEMO_MODE=true
# Men lägg till dem ändå för att undvika fel
NEXT_PUBLIC_SUPABASE_URL=https://demo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo
```

### Steg 3: Deployment-inställningar

I Vercel-projektet, kontrollera att:

1. **Build Command**: `npm run build` (standard)
2. **Install Command**: `npm install --legacy-peer-deps`
3. **Output Directory**: `.next` (standard)
4. **Framework Preset**: Next.js

### Steg 4: Redeploy

Efter att du lagt till miljövariablerna:

1. Gå till **Deployments**
2. Klicka på de tre prickarna (...) på senaste deployment
3. Välj **Redeploy**
4. Vänta på att bygget slutförs

---

## Vanliga Deployment-fel och Lösningar

### Fel 1: "Invalid supabaseUrl"
**Orsak**: Supabase-URL är ogiltig eller saknas  
**Lösning**: Lägg till `DEMO_MODE=true` i miljövariabler

### Fel 2: "JWT_SECRET is not defined"
**Orsak**: JWT_SECRET saknas  
**Lösning**: Lägg till `JWT_SECRET` med ett säkert värde

### Fel 3: Build timeout
**Orsak**: Bygget tar för lång tid  
**Lösning**: 
- Kontrollera att `npm install --legacy-peer-deps` används
- Vercel har 45 minuters timeout för gratis plan

### Fel 4: "Module not found"
**Orsak**: Dependencies saknas  
**Lösning**: Kör `npm install --legacy-peer-deps` lokalt och committa `package-lock.json`

### Fel 5: TypeScript-fel
**Orsak**: Type-fel i koden  
**Lösning**: Kör `npm run build` lokalt först för att hitta fel

---

## Snabb Checklista för Deployment

- [ ] `DEMO_MODE=true` är satt i Vercel
- [ ] `JWT_SECRET` är satt med ett säkert värde
- [ ] `API_KEY_ENCRYPTION_SECRET` är satt
- [ ] `NEXT_PUBLIC_APP_URL` är satt till din Vercel-URL
- [ ] Stripe test-keys är satta
- [ ] Supabase placeholder-värden är satta
- [ ] Install command är `npm install --legacy-peer-deps`
- [ ] Senaste koden är pushad till GitHub
- [ ] Redeploy är triggad i Vercel

---

## Testa Deployment

Efter lyckad deployment, testa följande:

1. **Hemsida**: `https://din-app.vercel.app/`
2. **Produkter**: `https://din-app.vercel.app/products`
3. **Registrering**: `https://din-app.vercel.app/register`
4. **Inloggning**: `https://din-app.vercel.app/login`

### Test Registrering
1. Gå till `/register`
2. Fyll i:
   - E-post: `test@example.com`
   - Lösenord: `testpass123`
3. Klicka "Registrera"
4. Du ska omdirigeras till `/products` och vara inloggad

---

## Alternativ: Deploy från Vercel Dashboard

Om GitHub-integration inte fungerar:

1. Gå till Vercel Dashboard
2. Klicka "Add New..." → "Project"
3. Välj "Import Git Repository"
4. Välj `paradoxapiko-maker/aurelia-market`
5. Lägg till alla miljövariabler (se ovan)
6. Klicka "Deploy"

---

## Felsökning: Visa Deployment-loggar

Om deployment misslyckas:

1. Gå till **Deployments** i Vercel
2. Klicka på den misslyckade deployment
3. Klicka på **Building** eller **Deployment**
4. Läs felloggarna noggrant
5. Sök efter:
   - "Error:" - Visar exakt fel
   - "Module not found" - Dependency-problem
   - "Type error" - TypeScript-fel
   - "Invalid" - Konfigurations-fel

---

## Support

Om problemet kvarstår efter dessa steg:

1. Kopiera hela felloggen från Vercel
2. Kontrollera att alla miljövariabler är korrekt satta
3. Testa `npm run build` lokalt först
4. Kontrollera att senaste koden är pushad till GitHub

---

**Uppdaterad:** 2025-01-06  
**Status:** Redo för deployment  
**Repository:** `paradoxapiko-maker/aurelia-market`

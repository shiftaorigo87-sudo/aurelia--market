# GitHub Upload Guide - Aurelia Market E-handelsplattform

## ✅ Alla filer som MÅSTE laddas upp till GitHub

### 📁 Root-filer
```
.env.example                    # Mall för miljövariabler (VIKTIGT!)
.eslintrc.json                  # ESLint-konfiguration
.gitignore                      # Git ignore-regler
.prettierrc                     # Prettier-konfiguration
next-env.d.ts                   # Next.js TypeScript-definitioner
next.config.js                  # Next.js-konfiguration
package.json                    # NPM dependencies och scripts
package-lock.json               # NPM låsta versioner
postcss.config.js               # PostCSS-konfiguration
tailwind.config.ts              # Tailwind CSS-konfiguration
tsconfig.json                   # TypeScript-konfiguration
README.md                       # Projektdokumentation
DEPLOYMENT.md                   # Deployment-guide
```

### 📁 .github/workflows/
```
.github/workflows/ci.yml        # CI/CD pipeline
.github/workflows/deploy.yml    # Deployment workflow
```

### 📁 database/
```
database/schema.sql             # Komplett databasschema för Supabase
```

### 📁 src/app/
```
src/app/layout.tsx              # Root layout med metadata
src/app/page.tsx                # Startsida
src/app/globals.css             # Globala CSS-stilar
src/app/not-found.tsx           # 404-sida
src/app/error.tsx               # Error boundary
src/app/sitemap.ts              # SEO sitemap
src/app/robots.ts               # SEO robots.txt
```

### 📁 src/app/api/ (Backend API)
```
src/app/api/auth/login/route.ts
src/app/api/auth/register/route.ts
src/app/api/products/route.ts
src/app/api/products/[id]/route.ts
src/app/api/cart/route.ts
src/app/api/cart/items/route.ts
src/app/api/cart/items/[id]/route.ts
src/app/api/checkout/create-payment-intent/route.ts
src/app/api/webhooks/stripe/route.ts
src/app/api/orders/route.ts
src/app/api/orders/[id]/route.ts
src/app/api/admin/products/route.ts
src/app/api/admin/products/[id]/route.ts
src/app/api/admin/products/import/route.ts
src/app/api/admin/orders/route.ts
src/app/api/admin/orders/[id]/route.ts
src/app/api/admin/api-keys/route.ts
```

### 📁 src/app/ (Frontend Pages)
```
src/app/login/page.tsx
src/app/register/page.tsx
src/app/products/page.tsx
src/app/products/[id]/page.tsx
src/app/cart/page.tsx
src/app/checkout/page.tsx
src/app/payment-success/page.tsx
src/app/orders/page.tsx
src/app/orders/[id]/page.tsx
src/app/admin/page.tsx
src/app/admin/products/page.tsx
src/app/admin/products/new/page.tsx
src/app/admin/products/[id]/page.tsx
src/app/admin/orders/page.tsx
src/app/admin/orders/[id]/page.tsx
src/app/admin/api-keys/page.tsx
```

### 📁 src/components/
```
src/components/Layout.tsx
src/components/Header.tsx
src/components/Footer.tsx
src/components/Logo.tsx
src/components/ProductCard.tsx
src/components/ProductList.tsx
src/components/ProductForm.tsx
src/components/CheckoutForm.tsx
src/components/AdminLayout.tsx
src/components/Toast.tsx
```

### 📁 src/contexts/
```
src/contexts/AuthContext.tsx    # Autentiserings-context
```

### 📁 src/lib/
```
src/lib/supabase.ts             # Supabase-klient
src/lib/stripe.ts               # Stripe-klient
src/lib/rateLimit.ts            # Rate limiting
```

### 📁 src/middleware/
```
src/middleware.ts               # Next.js middleware (CORS, security headers)
src/middleware/auth.ts          # JWT-autentisering
src/middleware/errorHandler.ts  # Felhantering
src/middleware/security.ts      # XSS-skydd och sanitering
```

### 📁 src/store/
```
src/store/cartStore.ts          # Zustand varukorg state
```

### 📁 src/types/
```
src/types/index.ts              # TypeScript-typer och interfaces
```

### 📁 .kiro/specs/ (Specifikationer - VALFRITT)
```
.kiro/specs/ecommerce-platform/requirements.md
.kiro/specs/ecommerce-platform/design.md
.kiro/specs/ecommerce-platform/tasks.md
```

---

## ❌ Filer som INTE ska laddas upp (redan i .gitignore)

```
node_modules/                   # NPM-paket (installeras med npm install)
.next/                          # Build-output
.env                            # Lokala miljövariabler (KÄNSLIG!)
.env.local                      # Lokala miljövariabler (KÄNSLIG!)
.env.production                 # Production miljövariabler (KÄNSLIG!)
*.log                           # Loggfiler
.DS_Store                       # macOS-filer
```

---

## 🚀 Steg-för-steg: Ladda upp till GitHub

### 1. Initiera Git (om inte redan gjort)
```bash
git init
```

### 2. Lägg till alla filer
```bash
git add .
```

### 3. Skapa första commit
```bash
git commit -m "Initial commit: Komplett e-handelsplattform

- Fullt fungerande backend API med alla endpoints
- Autentisering och auktorisering (JWT + bcrypt)
- Säkerhet (XSS-skydd, rate limiting, krypterade API-nycklar)
- Kundfunktioner (produkter, varukorg, checkout, ordrar)
- Admin-panel (dashboard, produkthantering, orderhantering)
- Stripe-integration för betalningar
- Responsiv design med Tailwind CSS
- SEO-optimering (sitemap, robots.txt, meta-taggar)
- CI/CD med GitHub Actions
- Komplett dokumentation"
```

### 4. Skapa GitHub repository
1. Gå till https://github.com/new
2. Skapa ett nytt repository (t.ex. "aurelia-market")
3. Välj "Private" eller "Public"
4. **VIKTIGT:** Skapa INTE README, .gitignore eller license (vi har redan dessa)

### 5. Koppla till GitHub
```bash
git remote add origin https://github.com/DITT-ANVÄNDARNAMN/aurelia-market.git
git branch -M main
git push -u origin main
```

---

## 🔐 Konfigurera GitHub Secrets (för CI/CD)

Gå till: Repository → Settings → Secrets and variables → Actions

Lägg till följande secrets:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_KEY
NEXT_PUBLIC_STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
JWT_SECRET
API_KEY_ENCRYPTION_SECRET
NEXT_PUBLIC_APP_URL
```

---

## ✅ Verifiering

Efter uppladdning, kontrollera att:

1. ✅ Alla filer är uppladdade
2. ✅ `.env` filer är INTE uppladdade (känslig data)
3. ✅ `node_modules/` är INTE uppladdad
4. ✅ `.next/` är INTE uppladdad
5. ✅ README.md visas korrekt på GitHub
6. ✅ GitHub Actions körs (om konfigurerad)

---

## 📊 Projektstatistik

**Total antal filer:** ~70+ filer
**Kodstorlek:** ~15,000+ rader kod
**Teknologier:** Next.js 14, TypeScript, Tailwind CSS, Supabase, Stripe

---

## 🎯 Nästa steg efter GitHub-uppladdning

1. **Konfigurera Supabase:**
   - Kör `database/schema.sql` i Supabase SQL Editor
   - Verifiera RLS policies

2. **Konfigurera Stripe:**
   - Sätt upp webhooks
   - Kopiera API-nycklar

3. **Deploy till Vercel/Netlify:**
   - Följ instruktioner i `DEPLOYMENT.md`
   - Konfigurera miljövariabler

4. **Skapa admin-användare:**
   - Registrera via `/register`
   - Uppdatera roll till 'admin' i Supabase

5. **Testa systemet:**
   - Registrering och inloggning
   - Produkthantering
   - Betalningsflöde
   - Admin-funktioner

---

## 📞 Support

Vid frågor eller problem:
- Kontrollera `README.md` för installation
- Läs `DEPLOYMENT.md` för deployment
- Öppna en issue på GitHub

**Lycka till med din e-handelsplattform! 🚀**

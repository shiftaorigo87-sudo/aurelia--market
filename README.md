# Aurelia Market - Professionell E-handelsplattform

En modern, professionell e-handelsplattform byggd med Next.js, TypeScript och Tailwind CSS.

## 🌟 Funktioner

### Kundfunktioner
- 🛍️ Produktkatalog med professionell design
- 🛒 Varukorgsfunktionalitet med realtidsuppdatering
- 💳 Säkra betalningar via Stripe (Visa, Mastercard, PayPal, Klarna)
- 👤 Kundregistrering och inloggning med JWT
- 📦 Orderhistorik och orderspårning
- 📱 Responsiv design för alla enheter

### Adminfunktioner
- 🔐 Säker admin-panel med rollbaserad åtkomst
- 📊 Produkthantering (CRUD)
- 📋 Orderhantering och statusuppdatering
- 🔑 API-nyckelhantering med kryptering
- 📥 Import av produkter från externa API:er

### Säkerhet
- 🔒 Krypterade API-nycklar (AES-256-CBC)
- 🛡️ XSS-skydd med DOMPurify
- 🚫 SQL-injection-skydd via parametriserade queries
- ⏱️ Rate limiting för alla endpoints
- 🔐 JWT-baserad autentisering
- 🔑 Bcrypt-hashade lösenord

## 🚀 Kom igång

### Förutsättningar

- Node.js 20+
- npm eller yarn
- Supabase-konto (för databas)
- Stripe-konto (för betalningar)

### Installation

1. **Klona projektet**
\`\`\`bash
git clone https://github.com/dittanvandarnamn/aurelia-market.git
cd aurelia-market
\`\`\`

2. **Installera beroenden**
\`\`\`bash
npm install
\`\`\`

3. **Konfigurera miljövariabler**

Kopiera \`.env.example\` till \`.env.local\` och fyll i dina värden:

\`\`\`bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_KEY=your-supabase-service-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# JWT
JWT_SECRET=your-jwt-secret-key-change-this

# API Key Encryption
API_KEY_ENCRYPTION_SECRET=your-encryption-secret-key-change-this

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

4. **Sätt upp databasen**

Kör SQL-schemat i din Supabase-databas:
\`\`\`bash
# Kopiera innehållet från database/schema.sql och kör i Supabase SQL Editor
\`\`\`

5. **Starta utvecklingsservern**
\`\`\`bash
npm run dev
\`\`\`

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## 📁 Projektstruktur

\`\`\`
aurelia-market/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # Backend API routes
│   │   │   ├── auth/          # Autentisering (login, register)
│   │   │   ├── products/      # Produkter (publika)
│   │   │   ├── cart/          # Varukorg
│   │   │   ├── checkout/      # Betalningar
│   │   │   ├── orders/        # Ordrar
│   │   │   ├── webhooks/      # Stripe webhooks
│   │   │   └── admin/         # Admin-endpoints
│   │   ├── page.tsx           # Startsida
│   │   ├── products/          # Produktsida
│   │   ├── login/             # Login-sida
│   │   ├── register/          # Registreringssida
│   │   └── cart/              # Varukorgssida
│   ├── components/            # React-komponenter
│   │   ├── Header.tsx         # Header med navigation
│   │   ├── Footer.tsx         # Footer med betalningsikoner
│   │   ├── Logo.tsx           # Guldfärgad logotyp
│   │   └── Layout.tsx         # Layout-wrapper
│   ├── lib/                   # Utilities
│   │   ├── supabase.ts        # Supabase-klient
│   │   ├── stripe.ts          # Stripe-klient
│   │   └── rateLimit.ts       # Rate limiting
│   ├── middleware/            # Middleware
│   │   ├── auth.ts            # JWT-autentisering
│   │   ├── errorHandler.ts   # Felhantering
│   │   └── security.ts        # XSS-skydd
│   ├── store/                 # State management
│   │   └── cartStore.ts       # Varukorg (Zustand)
│   └── types/                 # TypeScript-typer
├── database/                  # Databasschema
│   └── schema.sql            # PostgreSQL schema
└── .kiro/
    └── specs/                # Projektspecifikationer
\`\`\`

## 🔌 API Endpoints

### Publika Endpoints
- \`GET /api/products\` - Lista alla produkter
- \`POST /api/auth/register\` - Registrera ny användare
- \`POST /api/auth/login\` - Logga in

### Autentiserade Endpoints
- \`GET /api/cart\` - Hämta varukorg
- \`POST /api/cart/items\` - Lägg till i varukorg
- \`PUT /api/cart/items/:id\` - Uppdatera antal
- \`DELETE /api/cart/items/:id\` - Ta bort från varukorg
- \`POST /api/checkout/create-payment-intent\` - Skapa betalning
- \`GET /api/orders\` - Hämta ordrar
- \`GET /api/orders/:id\` - Hämta orderdetaljer

### Admin Endpoints
- \`POST /api/admin/products\` - Skapa produkt
- \`PUT /api/admin/products/:id\` - Uppdatera produkt
- \`DELETE /api/admin/products/:id\` - Ta bort produkt
- \`GET /api/admin/orders\` - Lista alla ordrar
- \`PUT /api/admin/orders/:id\` - Uppdatera orderstatus
- \`POST /api/admin/api-keys\` - Spara API-nyckel
- \`GET /api/admin/api-keys\` - Lista API-nycklar
- \`POST /api/admin/products/import\` - Importera produkter

## 🎨 Design

Plattformen använder en professionell design med:
- **Färgschema**: Guldfärg (#eab308) som primärfärg
- **Typografi**: Inter font
- **Responsiv**: Fungerar på alla skärmstorlekar (320px - 1920px)
- **Komponenter**: Header, Footer, Hero-sektion, Produktkort

## 🛠️ Teknisk Stack

- **Framework**: Next.js 14+ (App Router)
- **Språk**: TypeScript
- **Styling**: Tailwind CSS
- **Databas**: Supabase (PostgreSQL)
- **Betalningar**: Stripe
- **Autentisering**: JWT + bcrypt
- **State Management**: Zustand
- **Validering**: Zod
- **Säkerhet**: DOMPurify, Rate Limiting

## 🔒 Säkerhetsfunktioner

- **Kryptering**: API-nycklar krypteras med AES-256-CBC
- **XSS-skydd**: All input saniteras med DOMPurify
- **SQL-injection**: Parametriserade queries via Supabase
- **Rate Limiting**: 
  - Standard: 100 requests/15 min
  - Känsliga endpoints: 10 requests/15 min
- **CORS**: Konfigurerade headers
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection

## 📄 Licens

Proprietary - Alla rättigheter förbehållna

## 🤝 Bidra

Detta är ett privat projekt. Kontakta ägaren för mer information.

## 📞 Support

För frågor och support, öppna en issue på GitHub.

---

**Utvecklad med ❤️ för professionell e-handel**

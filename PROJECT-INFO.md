# Aurelia Market - Projektinformation

## 📋 Projektnamn och Branding

**Företagsnamn:** Aurelia Market  
**GitHub Repository:** `aurelia-market`  
**Betydelse:** Aurelia kommer från latin och betyder "gyllene" - passar perfekt med plattformens guldfärgade design

## 🎨 Branding

- **Primärfärg:** Guld (#eab308)
- **Logotyp:** Geometrisk design med gyllene färg
- **Typografi:** Inter font
- **Stil:** Modern, professionell, exklusiv

## 🔗 GitHub Information

**Repository URL:** `https://github.com/DITT-ANVÄNDARNAMN/aurelia-market`

### Rekommenderad Repository-beskrivning:
```
En modern, professionell e-handelsplattform byggd med Next.js, TypeScript och Tailwind CSS. 
Inkluderar säkra betalningar via Stripe, admin-panel, och fullständig produkthantering.
```

### Topics/Tags för GitHub:
```
nextjs, typescript, ecommerce, stripe, supabase, tailwindcss, 
react, e-commerce, webshop, online-store, jwt-authentication
```

## 📦 Paketinformation

**NPM Package Name:** `aurelia-market`  
**Version:** 1.0.0  
**License:** Proprietary

## 🌐 Deployment URLs

**Development:** `http://localhost:3000`  
**Production:** `https://aurelia-market.vercel.app` (eller din egen domän)  
**GitHub Pages:** `https://DITT-ANVÄNDARNAMN.github.io/aurelia-market`

## 📁 Projektstruktur

```
aurelia-market/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React-komponenter
│   ├── lib/             # Utilities (Supabase, Stripe)
│   ├── middleware/      # Auth, Security, Error handling
│   ├── store/           # Zustand state management
│   └── types/           # TypeScript-typer
├── database/            # SQL schema
├── .github/workflows/   # CI/CD
└── .kiro/specs/        # Projektspecifikationer
```

## 🚀 Snabbstart

```bash
# Klona projektet
git clone https://github.com/DITT-ANVÄNDARNAMN/aurelia-market.git
cd aurelia-market

# Installera dependencies
npm install

# Konfigurera miljövariabler
cp .env.example .env.local
# Redigera .env.local med dina nycklar

# Starta utvecklingsserver
npm run dev
```

## 📞 Kontakt och Support

**Projektägare:** [Ditt namn]  
**Email:** [Din email]  
**GitHub:** [Ditt GitHub-användarnamn]

## 📄 Dokumentation

- **README.md** - Huvuddokumentation och installation
- **DEPLOYMENT.md** - Deployment-guide för Vercel/Netlify
- **GITHUB-UPLOAD-GUIDE.md** - Guide för GitHub-uppladdning
- **GITHUB-DEPLOYMENT.md** - GitHub Pages deployment
- **PRE-DEPLOYMENT-CHECKLIST.md** - Checklista före deployment

## ✨ Funktioner

### Kundfunktioner
- Produktkatalog med professionell design
- Varukorgsfunktionalitet
- Säkra betalningar via Stripe
- Kundregistrering och inloggning
- Orderhistorik och spårning
- Responsiv design

### Adminfunktioner
- Säker admin-panel
- Produkthantering (CRUD)
- Orderhantering
- API-nyckelhantering
- Import från externa API:er

### Säkerhet
- Krypterade API-nycklar (AES-256-CBC)
- XSS-skydd
- SQL-injection-skydd
- Rate limiting
- JWT-autentisering
- Bcrypt-hashade lösenord

## 🛠️ Teknisk Stack

- **Framework:** Next.js 14+ (App Router)
- **Språk:** TypeScript
- **Styling:** Tailwind CSS
- **Databas:** Supabase (PostgreSQL)
- **Betalningar:** Stripe
- **Autentisering:** JWT + bcrypt
- **State Management:** Zustand
- **Validering:** Zod
- **Säkerhet:** DOMPurify, Rate Limiting

---

**Skapad:** 2024  
**Senast uppdaterad:** 2024  
**Status:** Production-ready ✅

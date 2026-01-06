# Pre-Deployment Checklist ✅

## Innan du deployar till produktion

### 🔐 Säkerhet

- [ ] Alla miljövariabler är satta i `.env.local` (lokalt)
- [ ] `.env` filer är INTE committade till Git
- [ ] `JWT_SECRET` är stark och unik (minst 32 tecken)
- [ ] `API_KEY_ENCRYPTION_SECRET` är stark och unik (minst 32 tecken)
- [ ] Stripe-nycklar är production-nycklar (inte test)
- [ ] Supabase RLS policies är aktiverade
- [ ] Admin-användare har stark lösenord

### 📦 Databas (Supabase)

- [ ] Supabase-projekt är skapat
- [ ] `database/schema.sql` är körda i SQL Editor
- [ ] Alla tabeller existerar:
  - [ ] users
  - [ ] products
  - [ ] orders
  - [ ] order_items
  - [ ] cart_items
  - [ ] api_keys
- [ ] RLS policies är aktiverade för alla tabeller
- [ ] Indexes är skapade
- [ ] Triggers är skapade

### 💳 Stripe

- [ ] Stripe-konto är skapat
- [ ] API-nycklar är kopierade (production)
- [ ] Webhook är konfigurerad:
  - [ ] URL: `https://your-domain.com/api/webhooks/stripe`
  - [ ] Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
  - [ ] Webhook secret är kopierad
- [ ] Betalningsmetoder är aktiverade (Visa, Mastercard, PayPal, Klarna)

### 🚀 Deployment

- [ ] GitHub repository är skapat
- [ ] Alla filer är committade
- [ ] `.gitignore` fungerar korrekt
- [ ] GitHub Secrets är konfigurerade (för CI/CD)
- [ ] Hosting-plattform är vald (Vercel/Netlify)
- [ ] Miljövariabler är satta i hosting-plattformen
- [ ] Custom domain är konfigurerad (valfritt)

### 🧪 Testning

- [ ] Lokal utvecklingsserver fungerar (`npm run dev`)
- [ ] Build fungerar utan fel (`npm run build`)
- [ ] Registrering fungerar
- [ ] Inloggning fungerar
- [ ] Produkter visas korrekt
- [ ] Varukorg fungerar
- [ ] Checkout-process fungerar
- [ ] Testbetalning genomförd (Stripe test mode)
- [ ] Admin-panel är åtkomlig
- [ ] Admin kan skapa produkter
- [ ] Admin kan hantera ordrar

### 📱 Responsiv Design

- [ ] Testad på desktop (1920px)
- [ ] Testad på laptop (1366px)
- [ ] Testad på tablet (768px)
- [ ] Testad på mobil (375px)
- [ ] Testad på liten mobil (320px)

### 🔍 SEO

- [ ] Meta-taggar är konfigurerade
- [ ] Sitemap.xml genereras
- [ ] Robots.txt är konfigurerad
- [ ] Open Graph-taggar är satta
- [ ] Favicon finns

### 📊 Performance

- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] Bilder är optimerade
- [ ] Lazy loading fungerar

### 📝 Dokumentation

- [ ] README.md är uppdaterad
- [ ] DEPLOYMENT.md är komplett
- [ ] API-endpoints är dokumenterade
- [ ] Miljövariabler är dokumenterade i `.env.example`

### 🎯 Admin Setup

- [ ] Admin-användare är skapad
- [ ] Admin kan logga in
- [ ] Admin-panel fungerar
- [ ] Produkter kan skapas
- [ ] Ordrar kan hanteras
- [ ] API-nycklar kan läggas till

### 🔄 Post-Deployment

- [ ] Produktionsdomän fungerar
- [ ] SSL-certifikat är aktiverat (HTTPS)
- [ ] Stripe webhook fungerar i produktion
- [ ] Betalningar fungerar i produktion
- [ ] E-postnotifikationer fungerar (om implementerat)
- [ ] Backup-strategi är på plats
- [ ] Monitoring är konfigurerat

---

## 🚨 Kritiska punkter innan go-live

### MÅSTE vara klart:

1. ✅ Databas är uppsatt och testad
2. ✅ Stripe är konfigurerad med production-nycklar
3. ✅ Alla miljövariabler är satta
4. ✅ Admin-användare är skapad
5. ✅ Testbetalning har genomförts
6. ✅ SSL/HTTPS är aktiverat
7. ✅ Backup-strategi finns

### BÖR vara klart:

1. ✅ Custom domain är konfigurerad
2. ✅ E-postnotifikationer fungerar
3. ✅ Monitoring är uppsatt
4. ✅ Error tracking är konfigurerat
5. ✅ Analytics är implementerat

---

## 📞 Support och resurser

- **Supabase Docs:** https://supabase.com/docs
- **Stripe Docs:** https://stripe.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs

---

**När alla checkboxar är ikryssade är du redo för produktion! 🎉**

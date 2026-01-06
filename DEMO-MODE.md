# 🎭 Demo Mode - Aurelia Market

## Vad är Demo Mode?

Demo Mode låter dig testa e-handeln med fiktiva produkter **utan** att behöva konfigurera Supabase eller databas. Perfekt för att:

- Se hur e-handeln ser ut och fungerar
- Testa UI/UX
- Demonstrera funktionalitet
- Utveckla frontend utan backend-beroenden

## ✅ Vad fungerar i Demo Mode:

### Fullt fungerande:
- ✅ **Produktvisning** - 1 demo-produkt (försvinner automatiskt när riktiga produkter läggs till)
- ✅ **Sökfunktion** - Professionellt placerad i header, sök bland produkter
- ✅ **Produktdetaljer** - Klicka på produkter för mer info
- ✅ **Registrering/Inloggning** - Fungerar med mock-användare (alla inloggningar accepteras)
- ✅ **Kundvagn** - Lägg till produkter, uppdatera antal, ta bort items
- ✅ **Checkout** - Skapa beställningar (utan riktig betalning)
- ✅ **Beställningar** - Visa alla dina beställningar
- ✅ **Orderspårning** - Visuell progress med status (Betald → Skickad → Levererad)
- ✅ **Responsiv design** - Fungerar på mobil, tablet, desktop
- ✅ **Navigation** - Alla sidor och menyer
- ✅ **UI-komponenter** - Header med sökfält, Footer, Layout

### Begränsat/Inte fungerande:
- ❌ **Admin-panel** - Kräver databas och autentisering
- ❌ **Riktiga betalningar** - Stripe integration kräver konfiguration
- ❌ **E-postnotiser** - Kräver e-posttjänst
- ❌ **Persistent data** - Data försvinner vid server-omstart (in-memory)

## 🚀 Starta Demo Mode

### 1. Kontrollera att Demo Mode är aktiverat

Öppna `.env.local` och se till att denna rad finns:
```env
DEMO_MODE=true
```

### 2. Starta servern

```bash
npm run dev
```

### 3. Öppna i webbläsaren

- **Startsida:** http://localhost:3000
- **Produkter:** http://localhost:3000/products

## 📦 Demo Produkt

Demo Mode innehåller 1 tillfällig demo-produkt:

1. **Demo Produkt** - 9,999 kr
   - Detta är en tillfällig produkt som automatiskt försvinner när riktiga produkter läggs till i databasen

Produkten har:
- Produktnamn
- Beskrivning
- Pris
- Bild (från Unsplash)
- Lagerstatus

## 🔐 Demo Inloggning

I demo mode kan du:
- **Registrera dig** med vilken e-postadress som helst
- **Logga in** med vilken e-postadress och lösenord som helst
- Alla inloggningar accepteras automatiskt
- En mock-användare skapas för dig

## 🛒 Demo E-handel

Du kan testa hela e-handelsflödet:

1. **Bläddra produkter** - Se demo-produkten
2. **Sök produkter** - Använd sökfältet i header
3. **Lägg till i kundvagn** - Klicka "Lägg till i kundvagn"
4. **Visa kundvagn** - Se dina produkter, uppdatera antal
5. **Gå till kassan** - Skapa en beställning
6. **Spåra order** - Se orderstatus med visuell progress

## 📍 Orderspårning

Demo mode inkluderar full orderspårning:

- **Betald** ✓ - Betalning bekräftad
- **Skickad** 🚚 - Order på väg
- **Levererad** 🏠 - Order levererad

Visuell progress bar visar var din order befinner sig i processen.

## 🔄 Byta till Production Mode

När du är redo att använda riktiga Supabase-uppgifter:

### 1. Uppdatera `.env.local`

```env
# Ändra till false eller ta bort raden
DEMO_MODE=false

# Lägg till dina riktiga Supabase-uppgifter
NEXT_PUBLIC_SUPABASE_URL=https://din-projekt-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=din-anon-key
SUPABASE_SERVICE_KEY=din-service-key
```

### 2. Skapa databas

Kör SQL-scripten i Supabase:
1. `database/schema.sql` - Skapar tabeller
2. `database/setup-testdata.sql` - Lägger till produkter

### 3. Starta om servern

```bash
# Stoppa servern (Ctrl+C)
npm run dev
```

Nu använder applikationen riktiga Supabase-data!

## 🎨 Anpassa Mock Data

Vill du ändra de fiktiva produkterna?

Öppna `src/lib/mockData.ts` och redigera `mockProducts` arrayen:

```typescript
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Din Produkt',
    description: 'Din beskrivning',
    price: 9999,
    image: 'https://din-bild-url.com/image.jpg',
    stock: 10,
    active: true,
    // ...
  },
  // Lägg till fler produkter här
];
```

## 📝 Teknisk Information

### Hur fungerar det?

1. **Environment Variable Check:** API routes kollar `process.env.DEMO_MODE`
2. **Mock Data:** Om `true`, returneras data från `src/lib/mockData.ts`
3. **Supabase Fallback:** Om `false`, används normal Supabase-anslutning

### Filer som stödjer Demo Mode:

- `src/lib/mockData.ts` - Mock data och helper functions för produkter, användare, kundvagn och ordrar
- `src/app/api/products/route.ts` - Produktlista API
- `src/app/api/products/[id]/route.ts` - Enskild produkt API
- `src/app/api/auth/register/route.ts` - Registrering API
- `src/app/api/auth/login/route.ts` - Inloggning API
- `src/app/api/cart/route.ts` - Kundvagn API
- `src/app/api/cart/items/route.ts` - Lägg till i kundvagn API
- `src/app/api/cart/items/[id]/route.ts` - Uppdatera/ta bort från kundvagn API
- `src/app/api/orders/route.ts` - Ordrar API
- `src/app/api/orders/[id]/route.ts` - Enskild order API
- `src/app/api/checkout/create-payment-intent/route.ts` - Checkout API
- `src/components/Header.tsx` - Header med sökfunktion

### Lägg till Demo Mode i fler API routes:

```typescript
import { isDemoMode } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  if (isDemoMode()) {
    // Returnera mock data
    return NextResponse.json({ data: mockData });
  }
  
  // Normal Supabase-logik
  const { data } = await supabase.from('table').select();
  return NextResponse.json({ data });
}
```

## 🎯 Nästa Steg

När du är nöjd med hur e-handeln ser ut i Demo Mode:

1. **Skaffa Supabase-konto** - https://supabase.com
2. **Skapa nytt projekt**
3. **Kopiera API-nycklar**
4. **Uppdatera `.env.local`**
5. **Kör SQL-scripts**
6. **Stäng av Demo Mode**

Se `NÄSTA-STEG.md` för detaljerade instruktioner!

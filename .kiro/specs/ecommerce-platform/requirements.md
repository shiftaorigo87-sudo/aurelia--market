# Kravdokument – Professionell E-handelsplattform

## Introduktion

Detta dokument specificerar kraven för en professionell, skalbar e-handelsplattform avsedd för kommersiell användning. Plattformen ska hantera produktkatalog, kundkonton, beställningar och säkra betalningar via Stripe. Systemet ska vara produktionsklart vid leverans med fokus på säkerhet, användarvänlighet och professionell design.

## Ordlista

- **Plattformen**: Det kompletta e-handelssystemet inklusive frontend, backend och databas
- **Kund**: En registrerad eller icke-registrerad användare som handlar produkter
- **Admin**: En användare med administratörsrättigheter som hanterar produkter och ordrar
- **Varukorg**: En tillfällig samling av produkter som kunden valt att köpa
- **Order**: En bekräftad beställning med betalningsinformation
- **Stripe**: Den externa betaltjänsten som hanterar betalningar
- **Supabase**: PostgreSQL-databasen som lagrar systemdata
- **API-nyckel**: En säker autentiseringsnyckel för extern produktimport

## Krav

### Krav 1: Produktvisning

**User Story:** Som kund vill jag kunna se tillgängliga produkter med bilder och information, så att jag kan fatta köpbeslut.

#### Acceptanskriterier

1. WHEN en kund besöker startsidan THEN Plattformen SHALL visa en hero-sektion med call-to-action
2. WHEN en kund navigerar till produktsidan THEN Plattformen SHALL visa produktnamn, beskrivning, pris, bild och lagerstatus
3. THE Plattformen SHALL rendera produktsidor responsivt för desktop, tablet och mobil
4. THE Plattformen SHALL ladda produktsidor inom 3 sekunder vid normal nätverksanslutning

### Krav 2: Varukorg

**User Story:** Som kund vill jag kunna lägga produkter i en varukorg och hantera den, så att jag kan samla mina köp innan betalning.

#### Acceptanskriterier

1. WHEN en kund klickar på "Lägg till i varukorg" THEN Plattformen SHALL lägga till produkten i kundens varukorg
2. WHEN en kund öppnar varukorgen THEN Plattformen SHALL visa alla tillagda produkter med namn, pris, antal och totalsumma
3. WHEN en kund ändrar antal för en produkt i varukorgen THEN Plattformen SHALL uppdatera totalsumman omedelbart
4. WHEN en kund tar bort en produkt från varukorgen THEN Plattformen SHALL ta bort produkten och uppdatera totalsumman
5. WHILE en produkt finns i varukorgen THEN Plattformen SHALL bevara varukorgen under kundens session

### Krav 3: Kundautentisering

**User Story:** Som kund vill jag kunna registrera ett konto och logga in, så att jag kan spara mina uppgifter och se min orderhistorik.

#### Acceptanskriterier

1. WHEN en kund fyller i registreringsformuläret med email och lösenord THEN Plattformen SHALL skapa ett nytt kundkonto
2. WHEN en kund anger ett lösenord vid registrering THEN Plattformen SHALL kräva minst 8 tecken
3. WHEN en kund loggar in med korrekta uppgifter THEN Plattformen SHALL autentisera kunden och skapa en säker session
4. WHEN en kund loggar in med felaktiga uppgifter THEN Plattformen SHALL neka åtkomst och visa ett felmeddelande
5. THE Plattformen SHALL lagra lösenord med bcrypt-hashning eller motsvarande säker metod

### Krav 4: Betalningsprocess

**User Story:** Som kund vill jag kunna betala för mina produkter säkert, så att jag kan slutföra mitt köp.

#### Acceptanskriterier

1. WHEN en kund når kassasidan THEN Plattformen SHALL visa betalningsalternativ för Visa, Mastercard, PayPal och Klarna
2. WHEN en kund väljer betalningsmetod THEN Plattformen SHALL inte exponera Stripe-branding för kunden
3. WHEN en kund slutför betalning THEN Plattformen SHALL skicka betalningsinformation till Stripe via säker API-anslutning
4. WHEN Stripe bekräftar betalning via webhook THEN Plattformen SHALL skapa en order med status "betald"
5. WHEN Stripe rapporterar misslyckad betalning THEN Plattformen SHALL informera kunden och behålla varukorgen
6. THE Plattformen SHALL använda HTTPS för all betalningskommunikation

### Krav 5: Orderhantering

**User Story:** Som kund vill jag kunna se mina tidigare ordrar, så att jag kan följa upp mina köp.

#### Acceptanskriterier

1. WHEN en inloggad kund besöker "Mina ordrar" THEN Plattformen SHALL visa alla kundens ordrar med ordernummer, datum, totalsumma och status
2. WHEN en kund klickar på en order THEN Plattformen SHALL visa orderdetaljer inklusive produkter, antal och priser
3. WHEN en order skapas THEN Plattformen SHALL tilldela ett unikt ordernummer
4. THE Plattformen SHALL lagra ordrar permanent i databasen

### Krav 6: Adminautentisering

**User Story:** Som admin vill jag kunna logga in till en säker adminpanel, så att jag kan hantera plattformen.

#### Acceptanskriterier

1. WHEN en admin loggar in med admin-uppgifter THEN Plattformen SHALL verifiera rollen som "admin" i databasen
2. WHEN en användare utan admin-roll försöker nå adminpanelen THEN Plattformen SHALL neka åtkomst och visa felmeddelande
3. THE Plattformen SHALL kräva autentisering för alla adminpanel-endpoints

### Krav 7: Produktadministration

**User Story:** Som admin vill jag kunna skapa, redigera och ta bort produkter, så att jag kan hålla produktkatalogen uppdaterad.

#### Acceptanskriterier

1. WHEN en admin skapar en ny produkt THEN Plattformen SHALL lagra produkten med namn, beskrivning, pris, bild och lagerstatus
2. WHEN en admin redigerar en produkt THEN Plattformen SHALL uppdatera produktinformationen i databasen
3. WHEN en admin tar bort en produkt THEN Plattformen SHALL markera produkten som inaktiv eller ta bort den från databasen
4. WHEN en admin listar produkter THEN Plattformen SHALL visa alla produkter med möjlighet att redigera eller ta bort
5. THE Plattformen SHALL validera att pris är ett positivt numeriskt värde

### Krav 8: Orderadministration

**User Story:** Som admin vill jag kunna se och hantera ordrar, så att jag kan följa upp försäljning och leveranser.

#### Acceptanskriterier

1. WHEN en admin öppnar orderlistan THEN Plattformen SHALL visa alla ordrar med ordernummer, kund, datum, totalsumma och status
2. WHEN en admin klickar på en order THEN Plattformen SHALL visa fullständiga orderdetaljer inklusive kunduppgifter och produkter
3. WHEN en admin uppdaterar orderstatus THEN Plattformen SHALL spara den nya statusen i databasen
4. THE Plattformen SHALL tillåta statusvärden: "pending", "paid", "shipped", "delivered", "cancelled"

### Krav 9: Extern produktimport

**User Story:** Som admin vill jag kunna importera produkter från ett externt API, så att jag kan automatisera produktuppdateringar.

#### Acceptanskriterier

1. WHEN en admin anger en API-nyckel THEN Plattformen SHALL lagra nyckeln krypterad i databasen
2. WHEN en admin initierar produktimport THEN Plattformen SHALL hämta produktdata från det externa API:et med den lagrade nyckeln
3. WHEN produktdata tas emot från externt API THEN Plattformen SHALL validera dataformatet innan import
4. WHEN produktimport lyckas THEN Plattformen SHALL skapa eller uppdatera produkter i databasen
5. IF produktimport misslyckas THEN Plattformen SHALL logga felet och informera admin

### Krav 10: Databasstruktur

**User Story:** Som systemarkitekt vill jag ha en väldefinierad databasstruktur, så att data lagras konsekvent och säkert.

#### Acceptanskriterier

1. THE Plattformen SHALL lagra användare i en Users-tabell med kolumner: id, email, role, created_at
2. THE Plattformen SHALL lagra produkter i en Products-tabell med kolumner: id, name, description, price, image, stock, created_at
3. THE Plattformen SHALL lagra ordrar i en Orders-tabell med kolumner: id, user_id, total_price, status, created_at
4. THE Plattformen SHALL använda foreign keys för att länka Orders till Users
5. THE Plattformen SHALL använda PostgreSQL via Supabase som databas

### Krav 11: Säkerhet

**User Story:** Som systemägare vill jag att plattformen ska vara säker mot vanliga attacker, så att kunddata skyddas.

#### Acceptanskriterier

1. THE Plattformen SHALL sanitera all användarinput för att förhindra XSS-attacker
2. THE Plattformen SHALL använda parametriserade queries för att förhindra SQL-injection
3. THE Plattformen SHALL lagra känsliga konfigurationsvärden i miljövariabler (.env)
4. THE Plattformen SHALL använda HTTPS för all kommunikation i produktion
5. THE Plattformen SHALL implementera CORS-policy för API-endpoints
6. THE Plattformen SHALL följa GDPR-krav för användardata

### Krav 12: Design och användargränssnitt

**User Story:** Som kund vill jag uppleva en professionell och visuellt tilltalande plattform, så att jag känner förtroende för företaget.

#### Acceptanskriterier

1. THE Plattformen SHALL visa en professionell logotyp i guldfärg som fungerar på ljus och mörk bakgrund
2. THE Plattformen SHALL inkludera en header med logotyp, navigation och varukorg-ikon
3. THE Plattformen SHALL inkludera en footer med kontaktinformation, policylänkar och betalningsikoner
4. THE Plattformen SHALL använda konsistent färgpalett, typografi och layout genom hela plattformen
5. THE Plattformen SHALL rendera korrekt på skärmstorlekar från 320px till 1920px bredd

### Krav 13: SEO och prestanda

**User Story:** Som företagsägare vill jag att plattformen ska vara lätt att hitta och snabb att använda, så att jag får fler kunder.

#### Acceptanskriterier

1. THE Plattformen SHALL generera semantisk HTML med korrekta heading-nivåer
2. THE Plattformen SHALL inkludera meta-taggar för titel och beskrivning på alla sidor
3. THE Plattformen SHALL optimera bilder för webben med lämpliga format och storlekar
4. THE Plattformen SHALL uppnå en Lighthouse-score på minst 80 för prestanda
5. THE Plattformen SHALL implementera lazy loading för produktbilder

### Krav 14: Versionshantering och dokumentation

**User Story:** Som utvecklare vill jag ha tydlig dokumentation och versionshantering, så att projektet är underhållbart.

#### Acceptanskriterier

1. THE Plattformen SHALL versionshanteras i Git med strukturerade commit-meddelanden
2. THE Plattformen SHALL inkludera en README.md med installationsinstruktioner
3. THE Plattformen SHALL inkludera dokumentation för deployment
4. THE Plattformen SHALL inkludera databasschema-dokumentation
5. THE Plattformen SHALL inkludera en .env.example-fil med nödvändiga miljövariabler

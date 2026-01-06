import Layout from '@/components/Layout';

export default function CookiesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Cookie-policy</h1>
        
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <p className="text-sm text-gray-600">Senast uppdaterad: 6 januari 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Vad är Cookies?</h2>
            <p className="leading-relaxed">
              Cookies är små textfiler som lagras på din enhet (dator, surfplatta eller mobiltelefon) 
              när du besöker en webbplats. Cookies hjälper webbplatsen att komma ihåg information om 
              ditt besök, vilket gör det enklare att besöka webbplatsen igen och gör den mer användbar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Hur Använder Vi Cookies?</h2>
            <p className="leading-relaxed mb-4">
              Aurelia Market använder cookies för att förbättra din upplevelse på vår webbplats. 
              Vi använder cookies för följande ändamål:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Nödvändiga cookies:</strong> Krävs för att webbplatsen ska fungera korrekt</li>
              <li><strong>Funktionella cookies:</strong> Kommer ihåg dina val och preferenser</li>
              <li><strong>Prestanda cookies:</strong> Hjälper oss förstå hur besökare använder webbplatsen</li>
              <li><strong>Marknadsföring cookies:</strong> Används för att visa relevanta annonser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Typer av Cookies Vi Använder</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Nödvändiga Cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av. 
                  De används för:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Inloggning och autentisering</li>
                  <li>Varukorgsfunktionalitet</li>
                  <li>Säkerhet och bedrägeriförebyggande</li>
                  <li>Sessionhantering</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Lagringstid:</strong> Session eller upp till 30 dagar
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Funktionella Cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör och 
                  tillhandahålla förbättrade funktioner:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Språkval</li>
                  <li>Regioninställningar</li>
                  <li>Användarpreferenser</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Lagringstid:</strong> Upp till 12 månader
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Prestanda Cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sidvisningar och navigering</li>
                  <li>Felrapportering</li>
                  <li>Laddningstider</li>
                  <li>Användarbeteende (anonymiserat)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Lagringstid:</strong> Upp till 24 månader
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Marknadsföring Cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies används för att visa relevanta annonser och mäta effektiviteten 
                  av marknadsföringskampanjer:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Riktade annonser</li>
                  <li>Remarketing</li>
                  <li>Kampanjmätning</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Lagringstid:</strong> Upp till 12 månader
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Tredjepartscookies</h2>
            <p className="leading-relaxed mb-4">
              Vi använder tjänster från tredje part som kan sätta cookies på din enhet:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Google Analytics:</strong> För webbplatsanalys och statistik</li>
              <li><strong>Stripe:</strong> För säker betalningshantering</li>
              <li><strong>Facebook Pixel:</strong> För marknadsföring och målgruppsanpassning</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Dessa tredje parter har sina egna integritetspolicyer och vi rekommenderar att du 
              läser dem för mer information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Hantera Cookies</h2>
            <p className="leading-relaxed mb-4">
              Du kan när som helst ändra dina cookie-inställningar. De flesta webbläsare tillåter 
              dig att:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Se vilka cookies som är lagrade</li>
              <li>Radera alla eller specifika cookies</li>
              <li>Blockera cookies från specifika webbplatser</li>
              <li>Blockera alla cookies</li>
              <li>Radera cookies när du stänger webbläsaren</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>OBS:</strong> Om du blockerar eller raderar cookies kan vissa funktioner på 
              webbplatsen sluta fungera korrekt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Så Här Hanterar Du Cookies i Din Webbläsare</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-1">Google Chrome</h3>
                <p className="text-sm">
                  Inställningar → Sekretess och säkerhet → Cookies och andra webbplatsdata
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-1">Mozilla Firefox</h3>
                <p className="text-sm">
                  Inställningar → Sekretess & säkerhet → Cookies och webbplatsdata
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-1">Safari</h3>
                <p className="text-sm">
                  Inställningar → Sekretess → Hantera webbplatsdata
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-1">Microsoft Edge</h3>
                <p className="text-sm">
                  Inställningar → Cookies och webbplatsbehörigheter → Hantera och ta bort cookies
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Ditt Samtycke</h2>
            <p className="leading-relaxed">
              Genom att fortsätta använda vår webbplats samtycker du till vår användning av cookies 
              enligt denna policy. Du kan när som helst återkalla ditt samtycke genom att ändra dina 
              cookie-inställningar i din webbläsare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Ändringar i Cookie-policyn</h2>
            <p className="leading-relaxed">
              Vi kan uppdatera denna cookie-policy från tid till annan för att återspegla ändringar 
              i vår användning av cookies eller av juridiska skäl. Vi rekommenderar att du regelbundet 
              granskar denna sida för att hålla dig informerad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Kontakta Oss</h2>
            <p className="leading-relaxed mb-4">
              Om du har frågor om vår användning av cookies, kontakta oss:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>E-post: info@aurelia-market.se</p>
              <p>Telefon: 08-123 45 678</p>
              <p>Adress: Storgatan 123, 111 22 Stockholm</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Mer Information</h2>
            <p className="leading-relaxed">
              För mer information om cookies och hur de används, besök:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><a href="https://www.pts.se/sv/bransch/regler/lagar/lag-om-elektronisk-kommunikation/cookies/" 
                     className="text-gold-600 hover:text-gold-700 underline" 
                     target="_blank" 
                     rel="noopener noreferrer">
                PTS - Post- och telestyrelsen
              </a></li>
              <li><a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/cookies/" 
                     className="text-gold-600 hover:text-gold-700 underline" 
                     target="_blank" 
                     rel="noopener noreferrer">
                IMY - Integritetsskyddsmyndigheten
              </a></li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}

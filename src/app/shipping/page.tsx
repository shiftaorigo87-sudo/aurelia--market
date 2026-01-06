import Layout from '@/components/Layout';

export default function ShippingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Frakt & Leverans</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fraktkostnader</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Beställningar över 500 kr</span>
                  <span className="font-semibold text-green-600">FRI FRAKT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Beställningar under 500 kr</span>
                  <span className="font-semibold">49 kr</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Leveranstider</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-2">Standardleverans (2-5 arbetsdagar)</h3>
                <p className="text-gray-700">
                  Vår standardleverans levereras normalt inom 2-5 arbetsdagar från det att din order har skickats. 
                  Du får en spårningslänk via e-post när paketet är på väg.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="font-semibold mb-2">Expressleverans (1-2 arbetsdagar)</h3>
                <p className="text-gray-700">
                  För snabbare leverans erbjuder vi expressleverans till en extra kostnad av 99 kr. 
                  Beställningar som läggs innan kl. 14:00 skickas samma dag.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Leveransområden</h2>
            <p className="text-gray-700 mb-4">
              Vi levererar för tillfället endast inom Sverige. Vi arbetar på att utöka våra leveransalternativ 
              till fler länder inom EU.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>OBS:</strong> Leveranstider kan variera under högsäsong och helgdagar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Spårning av Order</h2>
            <p className="text-gray-700 mb-4">
              När din order har skickats får du ett e-postmeddelande med:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Spårningsnummer</li>
              <li>Länk till fraktbolagets spårningssida</li>
              <li>Beräknad leveranstid</li>
            </ul>
            <p className="text-gray-700">
              Du kan också logga in på ditt konto och se orderstatus under &quot;Mina Ordrar&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Leveranspartners</h2>
            <p className="text-gray-700 mb-4">
              Vi samarbetar med pålitliga fraktbolag för att säkerställa att dina produkter levereras säkert:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold">PostNord</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold">DHL</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold">Bring</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Problem med Leverans?</h2>
            <p className="text-gray-700">
              Om du har problem med din leverans eller om paketet är försenat, kontakta vår kundservice 
              på <a href="mailto:info@aurelia-market.se" className="text-gold-600 hover:text-gold-700 underline">info@aurelia-market.se</a> eller 
              ring oss på <a href="tel:+46812345678" className="text-gold-600 hover:text-gold-700 underline">08-123 45 678</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

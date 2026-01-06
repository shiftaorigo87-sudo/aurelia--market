import Layout from '@/components/Layout';

export default function FAQPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Vanliga Frågor (FAQ)</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Hur lägger jag en beställning?</h2>
            <p className="text-gray-700">
              Bläddra bland våra produkter, lägg till önskade varor i varukorgen och följ kassan. 
              Du behöver skapa ett konto eller logga in för att slutföra köpet.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Vilka betalningsmetoder accepterar ni?</h2>
            <p className="text-gray-700">
              Vi accepterar alla större kreditkort (Visa, Mastercard), PayPal och Klarna. 
              Alla betalningar är säkra och krypterade.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Hur lång är leveranstiden?</h2>
            <p className="text-gray-700">
              Normalt levererar vi inom 2-5 arbetsdagar inom Sverige. Du får en spårningslänk 
              via e-post när din order har skickats.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Vad kostar frakten?</h2>
            <p className="text-gray-700">
              Vi erbjuder fri frakt på alla beställningar över 500 kr. För beställningar under 500 kr 
              tillkommer en fraktavgift på 49 kr.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Kan jag returnera en produkt?</h2>
            <p className="text-gray-700">
              Ja, vi har 30 dagars öppet köp. Produkten ska vara oanvänd och i originalförpackning. 
              Läs mer på vår <a href="/returns" className="text-gold-600 hover:text-gold-700 underline">retursida</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Hur spårar jag min beställning?</h2>
            <p className="text-gray-700">
              När din order har skickats får du ett e-postmeddelande med en spårningslänk. 
              Du kan också logga in på ditt konto och se orderstatus under "Mina Ordrar".
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Kan jag ändra eller avbryta min beställning?</h2>
            <p className="text-gray-700">
              Om din order ännu inte har skickats kan vi hjälpa dig att ändra eller avbryta den. 
              Kontakta vår kundservice så snart som möjligt på info@aurelia-market.se.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Är mina personuppgifter säkra?</h2>
            <p className="text-gray-700">
              Ja, vi tar datasäkerhet på största allvar. All information krypteras och vi följer GDPR. 
              Läs mer i vår <a href="/privacy" className="text-gold-600 hover:text-gold-700 underline">integritetspolicy</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Levererar ni utanför Sverige?</h2>
            <p className="text-gray-700">
              För tillfället levererar vi endast inom Sverige. Vi arbetar på att utöka våra leveransalternativ 
              till fler länder inom EU.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Hur kontaktar jag kundservice?</h2>
            <p className="text-gray-700">
              Du kan nå oss via e-post på info@aurelia-market.se eller telefon 08-123 45 678 
              (Mån-Fre 09:00-17:00). Besök även vår <a href="/contact" className="text-gold-600 hover:text-gold-700 underline">kontaktsida</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

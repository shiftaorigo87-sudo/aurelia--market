import Layout from '@/components/Layout';

export default function ReturnsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Returer & Byten</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">30 Dagars Öppet Köp</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi vill att du ska vara helt nöjd med ditt köp. Därför erbjuder vi 30 dagars öppet köp 
              från det att du mottagit din order. Om du inte är nöjd kan du returnera produkten för 
              full återbetalning.
            </p>
            <div className="bg-gold-50 border border-gold-200 p-4 rounded-lg">
              <p className="text-gold-800">
                <strong>Viktigt:</strong> Produkten måste vara oanvänd, i originalförpackning och med alla etiketter kvar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Så Här Returnerar Du</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Kontakta Oss</h3>
                  <p className="text-gray-700">
                    Skicka ett e-postmeddelande till info@aurelia-market.se med ditt ordernummer 
                    och vilka produkter du vill returnera.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Få Returetikett</h3>
                  <p className="text-gray-700">
                    Vi skickar dig en returetikett via e-post inom 24 timmar. Skriv ut etiketten 
                    och fäst den på paketet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Skicka Paketet</h3>
                  <p className="text-gray-700">
                    Lämna paketet på närmaste postombud eller serviceställe. Spara kvittot som bevis 
                    på att du skickat returen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Få Återbetalning</h3>
                  <p className="text-gray-700">
                    När vi mottagit och godkänt din retur får du återbetalning inom 5-10 arbetsdagar 
                    till samma betalningsmetod som du använde vid köpet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Returkostnader</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Felaktig eller skadad vara</span>
                  <span className="font-semibold text-green-600">GRATIS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ångerköp</span>
                  <span className="font-semibold">49 kr</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Byten</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du vill byta en produkt mot en annan storlek eller färg, kontakta vår kundservice. 
              Vi hjälper dig att hitta rätt produkt och ordnar bytet så smidigt som möjligt.
            </p>
            <p className="text-gray-700">
              <strong>Tips:</strong> För snabbast byte, returnera den ursprungliga produkten och lägg en ny order 
              för den produkt du önskar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Undantag från Returrätten</h2>
            <p className="text-gray-700 mb-4">
              Följande produkter kan inte returneras av hygieniska skäl:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Öppnade skönhetsprodukter och parfymer</li>
              <li>Öppnade underkläder och badkläder</li>
              <li>Öppnade örhängen</li>
              <li>Personligt anpassade produkter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Skadade eller Felaktiga Varor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du mottagit en skadad eller felaktig vara, kontakta oss omedelbart på 
              info@aurelia-market.se. Bifoga gärna bilder på skadan. Vi ordnar kostnadsfri retur 
              och skickar en ny produkt eller återbetalar beloppet.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Reklamation:</strong> Du har 3 års reklamationsrätt enligt konsumentköplagen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Frågor om Returer?</h2>
            <p className="text-gray-700">
              Kontakta vår kundservice på <a href="mailto:info@aurelia-market.se" className="text-gold-600 hover:text-gold-700 underline">info@aurelia-market.se</a> eller 
              ring oss på <a href="tel:+46812345678" className="text-gold-600 hover:text-gold-700 underline">08-123 45 678</a> (Mån-Fre 09:00-17:00).
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

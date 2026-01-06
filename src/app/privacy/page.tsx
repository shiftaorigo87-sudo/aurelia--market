import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Integritetspolicy</h1>
        
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <p className="text-sm text-gray-600">Senast uppdaterad: 6 januari 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Inledning</h2>
            <p className="leading-relaxed">
              Aurelia Market AB ("vi", "oss", "vår") värnar om din integritet och är engagerade i att skydda 
              dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar 
              din information när du besöker vår webbplats och använder våra tjänster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Personuppgiftsansvarig</h2>
            <p className="leading-relaxed mb-2">
              Aurelia Market AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Aurelia Market AB</p>
              <p>Storgatan 123</p>
              <p>111 22 Stockholm</p>
              <p>Org.nr: 556123-4567</p>
              <p>E-post: info@aurelia-market.se</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Vilka Personuppgifter Samlar Vi In?</h2>
            <p className="leading-relaxed mb-4">Vi samlar in följande typer av personuppgifter:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer, leveransadress</li>
              <li><strong>Beställningsinformation:</strong> Orderhistorik, produktpreferenser</li>
              <li><strong>Betalningsinformation:</strong> Betalningsmetod (hanteras av säkra tredjepartsleverantörer)</li>
              <li><strong>Teknisk information:</strong> IP-adress, webbläsartyp, enhetstyp</li>
              <li><strong>Kommunikation:</strong> Meddelanden och korrespondens med kundservice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Hur Använder Vi Dina Personuppgifter?</h2>
            <p className="leading-relaxed mb-4">Vi använder dina personuppgifter för att:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Behandla och leverera dina beställningar</li>
              <li>Kommunicera med dig om din order och våra tjänster</li>
              <li>Hantera returer och reklamationer</li>
              <li>Förbättra vår webbplats och kundupplevelse</li>
              <li>Skicka marknadsföring (endast med ditt samtycke)</li>
              <li>Uppfylla rättsliga förpliktelser</li>
              <li>Förebygga bedrägeri och missbruk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Rättslig Grund för Behandling</h2>
            <p className="leading-relaxed mb-4">Vi behandlar dina personuppgifter baserat på:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Fullgörande av avtal:</strong> För att kunna leverera produkter och tjänster</li>
              <li><strong>Rättslig förpliktelse:</strong> För att uppfylla bokföringskrav och andra lagar</li>
              <li><strong>Berättigat intresse:</strong> För att förbättra våra tjänster och förebygga bedrägeri</li>
              <li><strong>Samtycke:</strong> För marknadsföring och nyhetsbrev (kan återkallas när som helst)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Delning av Personuppgifter</h2>
            <p className="leading-relaxed mb-4">
              Vi delar aldrig dina personuppgifter med tredje part för deras marknadsföring. 
              Vi kan dela information med:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Leverantörer:</strong> Fraktbolag för att leverera dina beställningar</li>
              <li><strong>Betalningsleverantörer:</strong> För säker betalningshantering</li>
              <li><strong>IT-leverantörer:</strong> För drift och underhåll av vår webbplats</li>
              <li><strong>Myndigheter:</strong> När det krävs enligt lag</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Lagring av Personuppgifter</h2>
            <p className="leading-relaxed">
              Vi sparar dina personuppgifter endast så länge det är nödvändigt för de ändamål som anges 
              i denna policy eller enligt lag. Kontoinformation sparas så länge ditt konto är aktivt. 
              Orderinformation sparas i 7 år enligt bokföringslagen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Dina Rättigheter</h2>
            <p className="leading-relaxed mb-4">Enligt GDPR har du rätt att:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Få tillgång:</strong> Begära en kopia av dina personuppgifter</li>
              <li><strong>Rätta:</strong> Korrigera felaktiga eller ofullständiga uppgifter</li>
              <li><strong>Radera:</strong> Begära radering av dina personuppgifter</li>
              <li><strong>Begränsa:</strong> Begränsa behandlingen av dina uppgifter</li>
              <li><strong>Invända:</strong> Invända mot behandling baserad på berättigat intresse</li>
              <li><strong>Dataportabilitet:</strong> Få dina uppgifter i ett strukturerat format</li>
              <li><strong>Återkalla samtycke:</strong> När som helst för marknadsföring</li>
            </ul>
            <p className="leading-relaxed mt-4">
              För att utöva dina rättigheter, kontakta oss på info@aurelia-market.se.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Säkerhet</h2>
            <p className="leading-relaxed">
              Vi använder tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter 
              mot obehörig åtkomst, förlust eller missbruk. All kommunikation är krypterad med SSL/TLS och 
              betalningsinformation hanteras av PCI DSS-certifierade leverantörer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Cookies</h2>
            <p className="leading-relaxed">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Läs mer i vår 
              <a href="/cookies" className="text-gold-600 hover:text-gold-700 underline"> cookie-policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Ändringar i Policyn</h2>
            <p className="leading-relaxed">
              Vi kan uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar kommer 
              att meddelas via e-post eller på vår webbplats.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Kontakta Oss</h2>
            <p className="leading-relaxed mb-4">
              Om du har frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter, 
              kontakta oss:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>E-post: info@aurelia-market.se</p>
              <p>Telefon: 08-123 45 678</p>
              <p>Adress: Storgatan 123, 111 22 Stockholm</p>
            </div>
            <p className="leading-relaxed mt-4">
              Du har också rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY) om du 
              anser att vi behandlar dina personuppgifter felaktigt.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

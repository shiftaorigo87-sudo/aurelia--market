import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Om Aurelia Market</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Vår Historia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aurelia Market grundades med en vision om att erbjuda exklusiva mode- och livsstilsprodukter 
              av högsta kvalitet till våra kunder. Vi tror på att varje produkt ska berätta en historia och 
              tillföra värde till ditt liv.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sedan starten har vi vuxit till att bli en pålitlig destination för kvalitetsmedvetna kunder 
              som söker det bästa inom mode, skönhet och hemredskap.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Våra Värderingar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gold-600">Kvalitet</h3>
                <p className="text-gray-700">
                  Vi väljer noggrant ut varje produkt för att säkerställa högsta kvalitet och hållbarhet.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gold-600">Kundnöjdhet</h3>
                <p className="text-gray-700">
                  Din tillfredsställelse är vår högsta prioritet. Vi strävar efter att överträffa dina förväntningar.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gold-600">Hållbarhet</h3>
                <p className="text-gray-700">
                  Vi arbetar aktivt för att erbjuda produkter som är både miljövänliga och etiskt producerade.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gold-600">Innovation</h3>
                <p className="text-gray-700">
                  Vi följer trenderna och erbjuder de senaste produkterna inom mode och livsstil.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vårt Sortiment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aurelia Market erbjuder ett noggrant kurerat sortiment inom:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Kläder för dam och herr - Från vardagskläder till festliga plagg</li>
              <li>Skor - Eleganta och bekväma skor för alla tillfällen</li>
              <li>Parfym - Exklusiva dofter från ledande varumärken</li>
              <li>Skönhet - Hudvård och makeup av högsta kvalitet</li>
              <li>Hemredskap - Produkter som gör ditt hem vackrare</li>
              <li>Accessoarer - Väskor, solglasögon, klockor och mer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakta Oss</h2>
            <p className="text-gray-700 leading-relaxed">
              Har du frågor eller funderingar? Vi finns här för att hjälpa dig. 
              Besök vår <a href="/contact" className="text-gold-600 hover:text-gold-700 underline">kontaktsida</a> eller 
              läs våra <a href="/faq" className="text-gold-600 hover:text-gold-700 underline">vanliga frågor</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

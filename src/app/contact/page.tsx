import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Kontakta Oss</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Kundservice</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                  <a href="mailto:info@aurelia-market.se" className="text-gold-600 hover:text-gold-700">
                    info@aurelia-market.se
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <a href="tel:+46812345678" className="text-gold-600 hover:text-gold-700">
                    08-123 45 678
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Öppettider</h3>
                  <p className="text-gray-700">
                    Måndag - Fredag: 09:00 - 17:00<br />
                    Lördag - Söndag: Stängt
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Besöksadress</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700">
                    Aurelia Market AB<br />
                    Storgatan 123<br />
                    111 22 Stockholm<br />
                    Sverige
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Organisationsnummer</h3>
                  <p className="text-gray-700">556123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Skicka ett Meddelande</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-postadress
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Ämne
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Skicka Meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

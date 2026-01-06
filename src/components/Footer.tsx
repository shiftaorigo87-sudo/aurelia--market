import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">Aurelia Market</h3>
            <p className="text-gray-400 text-sm">
              Din destination för exklusiva produkter av högsta kvalitet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-gold-400 transition">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold-400 transition">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold-400 transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Kundservice</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-gold-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-gold-400 transition">
                  Frakt & Leverans
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-gold-400 transition">
                  Returer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Juridiskt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition">
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-gold-400 transition">
                  Cookie-policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Aurelia Market. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Vi accepterar:</span>
              <div className="flex space-x-2">
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">
                  VISA
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">
                  Mastercard
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">
                  PayPal
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">
                  Klarna
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

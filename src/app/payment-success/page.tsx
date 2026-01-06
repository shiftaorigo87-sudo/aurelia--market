'use client';

import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function PaymentSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold mb-4">Betalning Genomförd!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Tack för ditt köp. Din order har bekräftats och kommer att skickas inom kort.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vad händer nu?</h2>
            <div className="text-left space-y-4">
              <div className="flex items-start">
                <div className="bg-gold-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Orderbekräftelse</h3>
                  <p className="text-gray-600">
                    Du kommer att få en orderbekräftelse via e-post inom några minuter.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Bearbetning</h3>
                  <p className="text-gray-600">
                    Vi förbereder din order för leverans.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Leverans</h3>
                  <p className="text-gray-600">
                    Din order skickas och du får ett spårningsnummer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orders"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Se Mina Ordrar
            </Link>
            <Link
              href="/products"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition"
            >
              Fortsätt Handla
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

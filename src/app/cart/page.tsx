'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Din Varukorg</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Din varukorg är tom
            </h2>
            <p className="text-gray-500 mb-8">
              Lägg till produkter för att börja handla
            </p>
            <Link
              href="/products"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Fortsätt Handla
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0">
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Bild
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600">{item.product.price} kr</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gold-600">
                      {item.product.price * item.quantity} kr
                    </p>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-red-600 hover:text-red-700 text-sm mt-2"
                    >
                      Ta bort
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-2xl font-bold mb-4">Sammanfattning</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Delsumma:</span>
                  <span>{totalPrice} kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Frakt:</span>
                  <span>0 kr</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Totalt:</span>
                  <span className="text-gold-600">{totalPrice} kr</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold text-center transition"
              >
                Gå till Kassan
              </Link>
              <Link
                href="/products"
                className="block w-full text-center text-gray-600 hover:text-gray-800 mt-4"
              >
                Fortsätt handla
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'Ett fel uppstod');
      } else {
        setMessage('Ett oväntat fel uppstod.');
      }
    } else {
      // Payment succeeded
      clearCart();
      router.push('/payment-success');
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      
      {message && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {message}
        </div>
      )}

      <button
        disabled={isLoading || !stripe || !elements}
        className="w-full mt-6 bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Behandlar...' : 'Betala nu'}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Dina betalningsuppgifter är säkra och krypterade
      </p>
    </form>
  );
}

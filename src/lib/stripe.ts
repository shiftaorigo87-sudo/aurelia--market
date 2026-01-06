import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

// Safe environment variable access
const getEnvVar = (key: string, fallback: string = ''): string => {
  if (typeof process === 'undefined') return fallback;
  return process.env[key] || fallback;
};

// Server-side Stripe (lazy initialization with Proxy)
let _stripe: Stripe | null = null;

function getStripeServer() {
  if (!_stripe) {
    const secretKey = getEnvVar('STRIPE_SECRET_KEY', 'sk_test_placeholder');
    _stripe = new Stripe(secretKey, {
      apiVersion: '2023-10-16',
    });
  }
  return _stripe;
}

// Proxy-based lazy initialization to avoid build-time errors
export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    const stripeInstance = getStripeServer();
    return (stripeInstance as any)[prop];
  },
});

// Client-side Stripe
let stripePromise: Promise<any> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    const publicKey = getEnvVar('NEXT_PUBLIC_STRIPE_PUBLIC_KEY', 'pk_test_placeholder');
    stripePromise = loadStripe(publicKey);
  }
  return stripePromise;
};

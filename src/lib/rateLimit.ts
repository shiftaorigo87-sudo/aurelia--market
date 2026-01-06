import { NextRequest } from 'next/server';
import { ApiError } from '@/middleware/errorHandler';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Rensa gamla entries varje minut
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 60000);

export interface RateLimitOptions {
  windowMs: number;
  max: number;
  message?: string;
}

export function rateLimit(options: RateLimitOptions) {
  return (request: NextRequest) => {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const key = `${ip}:${request.nextUrl.pathname}`;
    const now = Date.now();
    
    if (!store[key] || store[key].resetTime < now) {
      store[key] = {
        count: 1,
        resetTime: now + options.windowMs
      };
      return;
    }
    
    store[key].count++;
    
    if (store[key].count > options.max) {
      throw new ApiError(
        429,
        options.message || 'För många förfrågningar, försök igen senare'
      );
    }
  };
}

// Standard rate limit: 100 requests per 15 minuter
export const standardRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// Strikt rate limit för känsliga endpoints: 10 requests per 15 minuter
export const strictRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'För många inloggningsförsök, försök igen senare'
});

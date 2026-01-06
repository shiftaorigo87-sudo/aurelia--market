import DOMPurify from 'isomorphic-dompurify';

// XSS-skydd - Sanitera input
export function sanitizeInput(input: any): any {
  if (typeof input === 'string') {
    // Sanitera strängen och trimma whitespace
    const sanitized = DOMPurify.sanitize(input, { 
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false
    });
    // DOMPurify.sanitize returnerar alltid en sträng, så vi behöver inte konvertera
    return typeof sanitized === 'string' ? sanitized.trim() : String(sanitized).trim();
  }
  
  if (Array.isArray(input)) {
    return input.map(item => sanitizeInput(item));
  }
  
  if (typeof input === 'object' && input !== null) {
    const sanitized: any = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        sanitized[key] = sanitizeInput(input[key]);
      }
    }
    return sanitized;
  }
  
  // Returnera primitiva värden som de är (number, boolean, null, undefined)
  return input;
}

// Validera och sanitera request body
export function sanitizeRequestBody(body: any): any {
  return sanitizeInput(body);
}

// Rate limiting konfiguration
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minuter
  max: 100, // Max 100 requests per windowMs
  message: 'För många förfrågningar från denna IP, försök igen senare'
};

export const strictRateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minuter
  max: 10, // Max 10 requests per windowMs för känsliga endpoints
  message: 'För många förfrågningar, försök igen senare'
};

import { createClient } from '@supabase/supabase-js';

// Safe environment variable access with fallbacks
const getEnvVar = (key: string, fallback: string = ''): string => {
  if (typeof process === 'undefined') return fallback;
  return process.env[key] || fallback;
};

const supabaseUrl = getEnvVar('NEXT_PUBLIC_SUPABASE_URL', 'https://placeholder.supabase.co');
const supabaseAnonKey = getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'placeholder-key');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service key (lazy initialization with Proxy)
let _supabaseAdmin: ReturnType<typeof createClient> | null = null;

function getSupabaseAdmin() {
  if (!_supabaseAdmin) {
    const serviceKey = getEnvVar('SUPABASE_SERVICE_KEY') || supabaseAnonKey;
    _supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return _supabaseAdmin;
}

// Proxy-based lazy initialization to avoid build-time errors
export const supabaseAdmin = new Proxy({} as ReturnType<typeof createClient>, {
  get(target, prop) {
    const admin = getSupabaseAdmin();
    return (admin as any)[prop];
  },
});

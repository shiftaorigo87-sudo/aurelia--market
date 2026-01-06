/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
  },
  // Disable static page generation for API routes
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Skip build-time page generation for dynamic routes
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig

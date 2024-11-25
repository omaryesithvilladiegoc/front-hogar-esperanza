/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/hogaresperanza-8f8ea.appspot.com/**',
          },
        ],
      },eslint: {
        ignoreDuringBuilds: true, // Ignorar ESLint durante la construcción
      },
  }

module.exports = nextConfig

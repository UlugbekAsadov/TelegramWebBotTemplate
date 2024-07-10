/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'humo.fra1.cdn.digitaloceanspaces.com',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

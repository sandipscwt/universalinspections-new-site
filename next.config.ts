/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.7',
        port: '8000',
        pathname: '/storage/uploads/photos/**',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.18',
        port: '8000',
        pathname: '/storage/uploads/photos/**',
      },
      {
        protocol: "https",
        hostname: "simpreative.in",
        port: "",
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;

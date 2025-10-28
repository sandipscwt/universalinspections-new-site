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
    dangerouslyAllowSVG: true, 
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", 
  },
};

export default nextConfig;

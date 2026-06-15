import type { NextConfig } from "next";

const apiDestination = process.env.API_PROXY_DESTINATION;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiDestination}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pet-project-backend-production.up.railway.app",
        pathname: "/assets/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/assets/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

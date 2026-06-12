import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pet-project-backend-production.up.railway.app",
        pathname: "/assets/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

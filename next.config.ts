import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pet-project-backend-production.up.railway.app",
        pathname: "/assets/**",
        // port: "3000",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;

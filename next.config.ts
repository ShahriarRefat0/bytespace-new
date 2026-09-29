import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-r2-public-domain.com",
      },
    ],
  },
};

export default nextConfig;
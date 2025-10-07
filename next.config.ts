import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"], // ✅ allow external image host
  },
};

export default nextConfig;

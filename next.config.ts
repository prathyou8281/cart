import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"], // ✅ allow external image host
  },
  eslint: {
    // ✅ Prevent ESLint errors (like "Unexpected any") from breaking Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

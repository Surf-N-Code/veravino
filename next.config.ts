import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable type checking during build */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true, // Only for Docker builds
  },
  eslint: {
    ignoreDuringBuilds: true, // Only for Docker builds
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    asyncWebAssembly: true,
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },
};

export default nextConfig;

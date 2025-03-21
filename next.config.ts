import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soulstream.s3.eu-north-1.amazonaws.com'
      }
    ]
  }
};

export default nextConfig;
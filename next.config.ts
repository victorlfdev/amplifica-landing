import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["100.120.169.33"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// Configure Next.js to generate a fully static export in `out/`.
// This allows us to deploy with a simple static file host.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;

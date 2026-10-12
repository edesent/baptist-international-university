import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/curricula/spanish-curriculum",
        destination: "/espanol",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

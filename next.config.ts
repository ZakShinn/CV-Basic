import type { NextConfig } from "next";
import { isSearchIndexingAllowed } from "./src/config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    if (isSearchIndexingAllowed()) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;

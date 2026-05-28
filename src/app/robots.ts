import type { MetadataRoute } from "next";
import { isSearchIndexingAllowed } from "@/config";

export default function robots(): MetadataRoute.Robots {
  if (!isSearchIndexingAllowed()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

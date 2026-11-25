import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/lib/seo";

/* No lastModified: stamping the build date on every page would claim
   changes that didn't happen, and search engines then ignore it. */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map((page) => ({
    url: new URL(page.path, siteUrl).href,
  }));
}

import type { MetadataRoute } from "next";

const baseUrl = "https://www.bhargovigems.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/diamond-information",
    "/sustainability",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

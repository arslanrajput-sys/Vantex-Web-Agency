import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}

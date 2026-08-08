import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date("2026-08-08T00:00:00.000Z");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services/`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/pricing/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/disclaimer/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}

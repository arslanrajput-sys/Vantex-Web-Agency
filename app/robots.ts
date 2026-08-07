import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = site.url;
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${base}/sitemap.xml` };
}

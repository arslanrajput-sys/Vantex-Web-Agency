import type { Metadata } from "next";
import { site } from "@/lib/site";

export const publicPageRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "VantexWeb custom web design and development studio",
};

export function createPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: publicPageRobots,
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export const siteWideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: `${site.url}/`,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.svg` },
      email: site.email,
      telephone: site.phoneHref,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${site.url}/contact/`,
        email: site.email,
        telephone: site.phoneHref,
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${site.url}${path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vantexweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VantexWeb | High-Converting Websites for Growing Businesses",
  description: "VantexWeb designs premium, high-converting websites for service businesses, startups, solar companies, roofers, and local brands.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VantexWeb | Websites Built to Win More Business",
    description: "Premium, conversion-focused websites for ambitious service businesses and growing brands.",
    url: "/",
    siteName: "VantexWeb",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "VantexWeb — Websites built to win more business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VantexWeb | High-Converting Websites",
    description: "Premium websites built around clear offers, stronger trust, and more qualified inquiries.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070B14" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}

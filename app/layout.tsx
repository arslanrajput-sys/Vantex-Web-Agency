import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionSystem } from "@/components/motion-system";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "VantexWeb | Custom Web Design & Development Studio",
  description: "VantexWeb designs and develops distinctive, conversion-focused websites for service businesses, growing brands, and digital products.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VantexWeb | Custom Websites Built to Win More Business",
    description: "Strategy, design, and development connected in one focused web studio.",
    url: "/",
    siteName: "VantexWeb",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "VantexWeb — Websites built to win more business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VantexWeb | Custom Web Design & Development",
    description: "Distinctive websites built around clear offers, stronger trust, and qualified inquiries.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070B14" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable}`}><MotionSystem/>{children}</body>
    </html>
  );
}

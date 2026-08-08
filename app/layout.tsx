import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionSystem } from "@/components/motion-system";
import { ScrollManager } from "@/components/scroll-manager";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "VantexWeb | High-Converting Websites for Businesses",
  description: "Custom websites for service businesses built to improve trust, generate more leads, and turn visitors into paying customers.",
  openGraph: {
    title: "VantexWeb | High-Converting Websites for Businesses",
    description: "Custom websites for service businesses built to improve trust, generate more leads, and turn visitors into paying customers.",
    url: "/",
    siteName: "VantexWeb",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "VantexWeb — Websites built to win more business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VantexWeb | High-Converting Websites for Businesses",
    description: "Custom websites for service businesses built to improve trust, generate more leads, and turn visitors into paying customers.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070B14" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}><ScrollManager/><MotionSystem/>{children}</body>
    </html>
  );
}

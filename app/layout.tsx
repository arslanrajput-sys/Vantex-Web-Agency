import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionSystem } from "@/components/motion-system";
import { ScrollManager } from "@/components/scroll-manager";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { siteWideSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  manifest: "/manifest.webmanifest",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070B14" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}><a className="skip-link" href="#top">Skip to main content</a><ScrollManager/><MotionSystem/><JsonLd data={siteWideSchema}/>{children}</body>
    </html>
  );
}

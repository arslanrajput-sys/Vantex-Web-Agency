import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import { MotionSystem } from "@/components/motion-system";
import { ScrollManager } from "@/components/scroll-manager";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { siteWideSchema } from "@/lib/seo";
import "./globals.css";
import "@/styles/components.css";
import "@/styles/pages.css";
import "@/styles/responsive.css";

const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  manifest: "/manifest.webmanifest",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07100f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${newsreader.variable}`}><a className="skip-link" href="#top">Skip to main content</a><ScrollManager/><MotionSystem/><JsonLd data={siteWideSchema}/>{children}<Script src="https://www.googletagmanager.com/gtag/js?id=G-GYGFRYE93M" strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GYGFRYE93M');`}</Script></body>
    </html>
  );
}

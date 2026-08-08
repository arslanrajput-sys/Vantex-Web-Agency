import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { FinalCta, Pricing } from "@/components/sections";

export const metadata: Metadata = {
  title: "Website Design Packages & Pricing | VantexWeb",
  description: "Compare VantexWeb landing page, business website, dashboard, and AI receptionist website packages with clear starting price ranges.",
  alternates: { canonical: "/pricing/" },
  openGraph: {
    title: "Website Packages & Pricing | VantexWeb",
    description: "Clear starting ranges for custom landing pages, business websites, dashboards, and AI receptionist experiences.",
    url: "/pricing/",
    type: "website",
  },
};

const scopeNotes = ["Final scope confirmed before work begins", "No hidden template or setup charges", "A clear proposal tailored to the project"];

export default function PricingPage() {
  return <><Navbar/><main><section id="top" className="pricing-page-hero"><div className="shell pricing-page-hero-layout"><div><h1>Clear starting ranges.<br/><span>A scope built around you.</span></h1><p>Choose the closest package to understand the likely investment. We will confirm the pages, functionality, integrations, and delivery plan before you commit.</p></div><div className="pricing-hero-note"><h2>What these ranges mean</h2><ul>{scopeNotes.map((note) => <li key={note}><Check size={16}/><span>{note}</span></li>)}</ul></div></div></section><Pricing showHeading={false}/><FAQ/><FinalCta/></main><Footer/></>;
}

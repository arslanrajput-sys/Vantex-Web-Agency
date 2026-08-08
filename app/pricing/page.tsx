import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { FinalCta, Pricing } from "@/components/sections";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing & Packages | VantexWeb",
  description: "View website design packages for landing pages, business websites, advanced builds, custom features, and AI integrations.",
  path: "/pricing/",
});

const scopeNotes = ["Final scope confirmed before work begins", "No hidden template or setup charges", "A clear proposal tailored to the project"];
const pricingFaqs = [
  ["Are the package prices fixed?", "The listed price covers the package scope shown. Optional pages, custom functionality, paid services, and third-party integrations are quoted separately before work begins."],
  ["Which package should I choose?", "Choose the closest match rather than forcing an exact decision. We will review your goals and recommend the leanest package that can deliver the result properly."],
  ["Can I start with a smaller package and expand later?", "Yes. We can plan the structure so a landing page or focused business website can grow into additional services, content, dashboards, or automation later."],
  ["How are project payments structured?", "The payment schedule is confirmed in your proposal before work begins. Larger projects are normally divided into clear milestones so cost and progress remain predictable."],
  ["What will my proposal include?", "Your proposal will clearly define the recommended scope, pages, functionality, project investment, payment milestones, and expected delivery plan before work begins."],
  ["Does the AI receptionist require ongoing services?", "Some chatbot, model, CRM, booking, or automation platforms charge ongoing usage fees. We identify those costs before implementation and keep third-party accounts under your control."],
] as const;

const pricingFaqSchema = [{"@context":"https://schema.org","@type":"FAQPage",mainEntity:pricingFaqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}, breadcrumbSchema("Pricing", "/pricing/")];

export default function PricingPage() {
  return <><Navbar/><main><section id="top" className="page-hero pricing-page-hero"><div className="shell page-hero-grid"><h1>Clear package prices.<br/><span>A scope built around you.</span></h1><div><p>Choose the closest package to understand the investment. We will confirm the pages, functionality, integrations, and delivery plan before you commit.</p><div className="pricing-hero-note"><h2>What these prices mean</h2><ul>{scopeNotes.map((note) => <li key={note}><Check size={16}/><span>{note}</span></li>)}</ul></div></div></div></section><Pricing showHeading={false}/><FAQ items={pricingFaqs} title="Straight answers about packages and pricing." copy="Understand what affects the final quote, how projects are structured, and what happens when your needs fall between packages."/><FinalCta/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(pricingFaqSchema).replace(/</g,"\\u003c")}}/></>;
}

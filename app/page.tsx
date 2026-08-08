import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSection, Services, Portfolio, WhyUs, Process, Results, AgencyStandards, FinalCta } from "@/components/sections";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { faqs } from "@/components/faq-data";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "VantexWeb | High-Converting Websites for Businesses",
  description: "Custom websites for service businesses built to improve trust, generate more leads, and turn visitors into paying customers.",
  path: "/",
});

const schema = [
  {"@context":"https://schema.org","@type":"ProfessionalService","@id":`${site.url}/#business`,name:site.name,url:site.url,email:site.email,telephone:site.phoneHref,description:"Custom web design and development studio serving growing service businesses and digital products.",areaServed:"Worldwide",serviceType:services.map((service) => service.name)},
  {"@context":"https://schema.org","@type":"WebPage","@id":`${site.url}/#webpage`,url:`${site.url}/`,name:"VantexWeb | High-Converting Websites for Businesses",description:"Custom websites for service businesses built to improve trust, generate more leads, and turn visitors into paying customers.",isPartOf:{"@id":`${site.url}/#website`},about:{"@id":`${site.url}/#organization`},inLanguage:"en-US"},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))},
];

export default function Home() {
  return <><Navbar/><main id="main-content"><Hero/><TrustBar/><ProblemSection/><Services/><Portfolio/><Comparison/><WhyUs/><Process/><Results/><AgencyStandards/><FAQ/><FinalCta/></main><Footer/><JsonLd data={schema}/></>;
}

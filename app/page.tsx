import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSection, Services, Portfolio, WhyUs, Process, Results, Pricing, Testimonials, FinalCta } from "@/components/sections";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { faqs } from "@/components/faq-data";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vantexweb.com";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@vantexweb.com";
const schema = [
  {"@context":"https://schema.org","@type":"Organization","@id":`${siteUrl}/#organization`,name:"VantexWeb",url:siteUrl,logo:`${siteUrl}/logo.svg`,email},
  {"@context":"https://schema.org","@type":"ProfessionalService","@id":`${siteUrl}/#business`,name:"VantexWeb",url:siteUrl,email,description:"Premium web design and development agency serving growing service businesses and startups.",areaServed:"Worldwide",serviceType:["Website design","Web development","Landing page design","Website redesign","Conversion optimization"]},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))},
];

export default function Home() {
  return <><Navbar/><main><Hero/><TrustBar/><ProblemSection/><Services/><Portfolio/><Comparison/><WhyUs/><Process/><Results/><Pricing/><Testimonials/><FAQ/><FinalCta/><ContactForm/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></>;
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSection, Services, Portfolio, WhyUs, Process, Results, Pricing, AgencyStandards, FinalCta } from "@/components/sections";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { faqs } from "@/components/faq-data";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const schema = [
  {"@context":"https://schema.org","@type":"Organization","@id":`${site.url}/#organization`,name:site.name,url:site.url,logo:`${site.url}/logo.svg`,email:site.email,telephone:site.phoneHref,contactPoint:{"@type":"ContactPoint",contactType:"sales",email:site.email,telephone:site.phoneHref,availableLanguage:"English"}},
  {"@context":"https://schema.org","@type":"ProfessionalService","@id":`${site.url}/#business`,name:site.name,url:site.url,email:site.email,telephone:site.phoneHref,description:"Custom web design and development studio serving growing service businesses and digital products.",areaServed:"Worldwide",serviceType:["Website design","Web development","Landing page design","Website redesign","Conversion optimization"]},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))},
];

export default function Home() {
  return <><Navbar/><main><Hero/><TrustBar/><ProblemSection/><Services/><Portfolio/><Comparison/><WhyUs/><Process/><Results/><Pricing/><AgencyStandards/><FAQ/><FinalCta/><ContactForm/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></>;
}

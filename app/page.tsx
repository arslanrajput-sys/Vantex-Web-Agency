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

const schema = [
  {"@context":"https://schema.org","@type":"Organization","@id":`${site.url}/#organization`,name:site.name,url:site.url,logo:`${site.url}/logo.svg`,email:site.email,telephone:site.phoneHref,contactPoint:{"@type":"ContactPoint",contactType:"sales",url:`${site.url}/contact/`,email:site.email,telephone:site.phoneHref,availableLanguage:"English"}},
  {"@context":"https://schema.org","@type":"ProfessionalService","@id":`${site.url}/#business`,name:site.name,url:site.url,email:site.email,telephone:site.phoneHref,description:"Custom web design and development studio serving growing service businesses and digital products.",areaServed:"Worldwide",serviceType:services.map((service) => service.name)},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))},
];

export default function Home() {
  return <><Navbar/><main><Hero/><TrustBar/><ProblemSection/><Services/><Portfolio/><Comparison/><WhyUs/><Process/><Results/><AgencyStandards/><FAQ/><FinalCta/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design, Development, Chatbot & SEO Services | VantexWeb",
  description: "Explore custom website design and development, landing pages, website redesigns, AI chatbot integration, SEO, and performance optimization from VantexWeb.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Web Design and Development Services | VantexWeb",
    description: "Five focused services for building, improving, and growing a stronger website.",
    url: "/services/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "VantexWeb Services",
  url: `${site.url}/services/`,
  itemListElement: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.shortDescription,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "Worldwide",
    },
  })),
};

const standards = [
  "Responsive across real screen sizes",
  "Accessible, semantic foundations",
  "Speed-conscious production build",
  "Technical SEO essentials",
  "Clear calls to action",
  "Transparent launch handoff",
];

export default function ServicesPage() {
  return <><Navbar/><main><section id="top" className="services-page-hero"><div className="services-hero-grid" aria-hidden="true"/><div className="shell services-hero-layout"><div className="services-hero-copy"><h1>Five focused services.<br/><span>One connected website system.</span></h1><p>Strategy, design, development, automation, and performance should work together. Choose the service that matches your immediate need—or let us shape the right combination around the business.</p><div className="services-hero-actions"><Link href="#service-details" className="button">Explore the services <ArrowRight size={18}/></Link><Link href="/#contact" className="button-secondary">Request a Website Quote</Link></div></div><div className="services-map" aria-label="VantexWeb service categories">{services.map((service) => <a href={`#${service.slug}`} key={service.slug}><span>{service.number}</span><ServiceIcon slug={service.slug} size={19}/><strong>{service.name}</strong><ArrowUpRight size={15}/></a>)}</div></div></section><section className="services-standards"><div className="shell"><div className="services-standard-heading"><div><h2>What every website engagement includes</h2><p>Responsive behavior, usability, and sound technical foundations are standards—not separate upgrades.</p></div><ShieldCheck size={32}/></div><div className="services-standard-grid">{standards.map((standard) => <span key={standard}><Check size={15}/>{standard}</span>)}</div></div></section><section id="service-details" className="services-detail-list"><div className="shell">{services.map((service) => <article id={service.slug} className="service-detail" key={service.slug}><div className="service-detail-lead"><div className="service-detail-identity"><span>{service.number}</span><i><ServiceIcon slug={service.slug} size={24}/></i></div><h2>{service.name}</h2><p>{service.detail}</p><div className="service-detail-actions"><Link href="/#contact" className="button">Discuss this service <ArrowRight size={17}/></Link><Link href="/portfolio" className="service-detail-link">See live work <ArrowUpRight size={16}/></Link></div></div><div className="service-detail-scope"><div><h3>What the engagement can include</h3><ul>{service.includes.map((item) => <li key={item}><Check size={16}/><span>{item}</span></li>)}</ul></div><div className="service-fit"><span>Best fit</span><p>{service.bestFor}</p></div><div className="service-outcome"><span>What this should improve</span><p>{service.outcome}</p></div></div></article>)}</div></section><section className="services-closing"><div className="shell"><div className="services-closing-card"><div><h2>Not sure which service fits?</h2><p>Tell us what the website needs to accomplish. We will recommend the leanest scope that can do the job well—without padding the project with work you do not need.</p></div><div><Link href="/#contact" className="button">Get My Free Website Quote <ArrowRight size={18}/></Link><a href={`tel:${site.phoneHref}`} className="button-secondary"><Phone size={17}/>{site.phoneDisplay}</a></div></div></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema).replace(/</g,"\\u003c")}}/></>;
}

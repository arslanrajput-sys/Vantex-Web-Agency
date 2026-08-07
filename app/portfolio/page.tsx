import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Layers3, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioProjects } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design Portfolio | VantexWeb",
  description: "Explore live websites, business platforms, AI-assisted tools, and conversion-focused digital products designed and developed by VantexWeb.",
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    title: "Selected Web Design and Development Work | VantexWeb",
    description: "Live work across service businesses, calculators, and interactive products.",
    url: "/portfolio/",
    type: "website",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "VantexWeb Portfolio",
  url: `${site.url}/portfolio/`,
  description: "Selected live web design and development projects by VantexWeb.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: portfolioProjects.length,
    itemListElement: portfolioProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "CreativeWork", name: project.name, url: project.url, description: project.summary },
    })),
  },
};

export default function PortfolioPage() {
  return <><Navbar/><main><section id="top" className="portfolio-page-hero"><div className="portfolio-page-orbit" aria-hidden="true"/><div className="shell relative z-10"><div className="portfolio-page-chip"><Layers3 size={16}/>Live project archive</div><div className="portfolio-page-intro"><div><h1>Built to look distinct.<br/><span>Designed to work hard.</span></h1><p>Live websites across local services, solar, automotive, beauty, food, and utility platforms. Different audiences. Different business models. No recycled visual formula.</p><div className="portfolio-page-actions"><Link href="/contact" className="button">Request a Website Quote <ArrowRight size={18}/></Link><Link href="/" className="portfolio-back-link">Back to the agency site <ArrowUpRight size={16}/></Link></div></div><div className="portfolio-page-proof"><div><strong>Live</strong><span>Production websites</span></div><div><strong>Range</strong><span>Multiple industries</span></div><div><strong>Useful</strong><span>Built around real goals</span></div></div></div><div className="portfolio-page-principles"><span><Check size={15}/>Real live links</span><span><Check size={15}/>Responsive builds</span><span><Check size={15}/>Clear conversion paths</span><span><Check size={15}/>Search-ready foundations</span></div></div></section><section className="portfolio-page-work"><div className="shell"><div className="portfolio-page-heading"><h2>Selected launches</h2><p>Open any project to explore the finished experience in its real production environment.</p></div><div className="portfolio-grid portfolio-grid-page">{portfolioProjects.map((project, index) => <PortfolioCard key={project.name} project={project} featured={index === 0}/>)}</div></div></section><section className="portfolio-page-cta"><div className="shell"><div className="portfolio-cta-card"><div><span>Have a project in mind?</span><h2>Let’s make your next website the one people remember.</h2><p>Tell us what you sell, who you need to reach, and what the current website is not doing well enough.</p></div><div className="portfolio-cta-actions"><Link href="/contact" className="button">Get My Free Website Quote <ArrowRight size={18}/></Link><a href={`tel:${site.phoneHref}`} className="button-secondary"><Phone size={17}/>{site.phoneDisplay}</a></div></div></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(portfolioSchema).replace(/</g,"\\u003c")}}/></>;
}

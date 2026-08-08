import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioProjects } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { publicPageRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Portfolio & Projects | VantexWeb",
  description: "Explore real websites and digital projects built for cleaning, roofing, solar, barber, service businesses, and online tools.",
  alternates: { canonical: "/portfolio/" },
  robots: publicPageRobots,
  openGraph: {
    title: "Our Portfolio & Projects | VantexWeb",
    description: "Explore real websites and digital projects built for cleaning, roofing, solar, barber, service businesses, and online tools.",
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
  return <><Navbar/><main><section id="top" className="portfolio-page-hero"><div className="shell relative z-10"><div className="portfolio-page-compact"><h1>Selected <span>website work.</span></h1><p>Explore live websites built for service businesses, campaigns, and useful digital products—each shaped around a different audience and goal.</p><a href="#projects" className="portfolio-work-jump">Browse the projects <ArrowDown size={17}/></a></div></div></section><section id="projects" className="portfolio-page-work"><div className="shell"><div className="portfolio-page-heading"><h2>Selected launches</h2><p>Open any project to explore the finished experience in its real production environment.</p></div><div className="portfolio-grid portfolio-grid-page">{portfolioProjects.map((project, index) => <PortfolioCard key={project.name} project={project} featured={index === 0}/>)}</div></div></section><section className="portfolio-page-cta"><div className="shell"><div className="portfolio-cta-card"><div><span>Have a project in mind?</span><h2>Let’s make your next website the one people remember.</h2><p>Tell us what you sell, who you need to reach, and what the current website is not doing well enough.</p></div><div className="portfolio-cta-actions"><Link href="/contact" className="button">Get My Free Website Quote <ArrowRight size={18}/></Link><a href={`tel:${site.phoneHref}`} className="button-secondary"><Phone size={17}/>{site.phoneDisplay}</a></div></div></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(portfolioSchema).replace(/</g,"\\u003c")}}/></>;
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";

export function PortfolioCard({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  return <article className={`portfolio-card ${featured?"portfolio-card-featured":""}`}><a className="portfolio-media" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website (opens in a new tab)`}><Image src={project.image} width={1200} height={750} loading={featured?"eager":"lazy"} fetchPriority={featured?"high":"auto"} decoding="async" sizes="(min-width: 1280px) 540px, (min-width: 768px) 44vw, 100vw" alt={project.alt}/></a><div className="portfolio-copy"><div className="portfolio-meta"><span>{project.type}</span><span>{project.domain}</span></div><h3>{project.name}</h3><p>{project.summary}</p><ul className="portfolio-highlights">{project.highlights.map((highlight)=><li key={highlight}>{highlight}</li>)}</ul><a className="portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website (opens in a new tab)`}>View live website <ArrowUpRight size={17}/></a></div></article>;
}

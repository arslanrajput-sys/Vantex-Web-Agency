import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";

export function PortfolioCard({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  return (
    <article className={`portfolio-card ${featured ? "portfolio-card-featured" : ""}`}>
      <a className="portfolio-media" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website (opens in a new tab)`}>
        <div className="portfolio-browser"><span/><span/><span/><b>{project.domain}</b><ExternalLink size={13}/></div>
        <div className="portfolio-screen"><Image src={project.image} width={1200} height={750} loading="lazy" decoding="async" sizes={featured ? "(min-width: 1024px) 65vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"} alt={project.alt}/></div>
      </a>
      <div className="portfolio-copy">
        <div className="portfolio-meta"><span>{project.type}</span>{featured && <strong>Featured launch</strong>}</div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <ul className="portfolio-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <a className="portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website (opens in a new tab)`}>View {project.name} <ExternalLink size={15}/></a>
      </div>
    </article>
  );
}

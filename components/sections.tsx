import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { PortfolioCard } from "./portfolio-card";

const problems = ["Dated visuals lower confidence", "Your offer takes too long to understand", "Mobile visitors struggle to take action", "Slow pages lose attention", "Important proof is buried", "There is no obvious next step"];

export function ProblemSection() {
  return <section className="editorial-section problem-section"><div className="shell editorial-split"><div className="editorial-intro" data-reveal><h2>Your website should be your best salesperson.</h2><p>People decide whether to trust your business in seconds. If the experience feels unclear, dated, or difficult to use, strong prospects leave before they ever speak to you.</p><Link href="/contact" className="text-link">Find out what your site is missing <ArrowRight size={17}/></Link></div><ol className="diagnostic-list">{problems.map((problem,index)=><li key={problem} data-reveal><span>{String(index+1).padStart(2,"0")}</span><p>{problem}</p></li>)}</ol></div></section>;
}

export function Services() {
  return <section id="services" className="editorial-section services-home"><div className="shell"><div className="section-lead-row"><div><h2>Five focused services.<br/>No artificial add-ons.</h2><p>Mobile responsiveness, accessibility, and technical quality belong in every professional website. Our service list is organized around the actual business problem you need solved.</p></div><Link href="/services" className="text-link">Explore every service <ArrowRight size={17}/></Link></div><div className="service-index">{services.map((service)=><Link href={`/services/#${service.slug}`} key={service.slug} className="service-row" data-reveal><span className="service-number">{service.number}</span><h3>{service.name}</h3><p>{service.shortDescription}</p><ArrowRight size={19}/></Link>)}</div></div></section>;
}

export function Portfolio() {
  const featuredProjects = portfolioProjects.filter((project)=>project.homeFeatured);
  return <section id="work" className="portfolio-editorial"><div className="shell"><div className="portfolio-intro"><div><p>Selected work</p><h2>Real websites, designed around the job they need to do.</h2></div><div><p>A focused selection of live builds across service businesses and interactive products. Every preview opens the real website.</p><span>Strategy, design, development, and launch—connected from the first idea to the finished experience.</span></div></div><div className="portfolio-list portfolio-list-home">{featuredProjects.map((project,index)=><PortfolioCard key={project.name} project={project} featured={index===0}/>)}</div><div className="portfolio-home-footer"><p>Want a closer look at the full body of work?</p><Link href="/portfolio" className="button-secondary">Explore the complete portfolio <ArrowRight size={17}/></Link></div></div></section>;
}

const values = [
  ["Strategy before design","We define the audience, offer, and conversion path before deciding how the site should look."],
  ["Copy structure that guides","Clear headlines and focused sections help visitors understand why you are the right fit."],
  ["Direct communication","You get a clear process, practical feedback, and fewer layers between your idea and the work."],
  ["Designed for your business","Every layout responds to your goals, market, and content—not a recycled template."],
] as const;

export function WhyUs() {
  return <section id="about" className="editorial-section why-section"><div className="shell editorial-split"><div className="editorial-intro"><h2>A focused partner for a website that has a real job to do.</h2><p>We combine sharp creative direction with the discipline of a sales page. The result feels premium, but never gets in the way of the message.</p><Link href="/about" className="text-link">Meet the studio <ArrowRight size={17}/></Link></div><ol className="value-list">{values.map(([title,copy],index)=><li key={title} data-reveal><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>;
}

const steps = [["01","Discovery","We learn your goals, audience, services, and what is getting in the way today."],["02","Strategy","We shape the sitemap, message hierarchy, user journey, and strongest calls to action."],["03","Design","You see a custom visual direction built around your business and customer expectations."],["04","Development","The approved experience becomes a fast, responsive, accessible production website."],["05","Launch","We test the details, connect essentials, and give you a clear path forward after launch."]];

export function Process() {
  return <section id="process" className="editorial-section process-section"><div className="shell editorial-split"><div className="process-intro"><h2>A clear path from first conversation to launch.</h2><p>You always know what is happening, what we need from you, and what comes next.</p></div><ol className="process-list">{steps.map(([number,title,copy])=><li key={number} data-reveal><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>;
}

const outcomes = ["Make a stronger first impression","Increase trust with potential customers","Make every service easier to understand","Generate more calls and inquiries","Give mobile visitors a smoother path","Support advertising and local SEO campaigns"];

export function Results() {
  return <section id="outcomes" className="editorial-section outcomes-section"><div className="shell"><div className="outcomes-header"><h2>Better design is valuable when it makes business easier.</h2><p>We do not promise a magic conversion number. We build the clarity, credibility, and momentum your marketing needs to perform at its best.</p></div><ul className="outcomes-list">{outcomes.map((outcome,index)=><li key={outcome} data-reveal><span>{String(index+1).padStart(2,"0")}</span>{outcome}</li>)}</ul></div></section>;
}

const packages = [
  {name:"Conversion Launch",scope:"1-Page Website",price:"$199",for:"For focused offers that need a clear, credible page built to turn interest into action.",features:["1 custom landing page","Business overview and contact details","Lead capture or contact form","Mobile-first responsive layout","Clear offer and call-to-action structure","Foundational on-page SEO","Performance-focused development"],cta:"Start My Conversion Launch"},
  {name:"Business Authority",scope:"Up to 7 Pages",price:"$599",for:"For service businesses ready to build trust with a complete, professional online presence.",recommended:true,features:["Up to 7 custom website pages","Home, about, service, and contact pages","Lead forms and inquiry routing","Mobile-first responsive development","Clear conversion paths across key pages","Foundational on-page SEO","Analytics setup"],cta:"Build My Business Website"},
  {name:"Growth Platform",scope:"Up to 12 Pages",price:"$899",for:"For growing businesses that need deeper content, smarter workflows, and room to scale.",features:["One-time website build — separate monthly maintenance fee applies","Up to 12 custom website pages","Scalable sitemap and content structure","Advanced forms and workflows","CMS-ready content setup","Third-party integrations","Analytics setup","Growth-ready technical foundation"],cta:"Plan My Growth Platform"},
  {name:"Intelligent Scale",scope:"Advanced Website + AI Receptionist",price:"Custom",for:"For custom websites that pair advanced functionality with a focused, informative AI receptionist.",features:["One-time custom build — separate monthly maintenance/support fee applies","Custom website scope and architecture","Professional AI receptionist","Answers approved business questions","Collects qualified lead details","Uses business-provided information only","Contact or booking handoff","Custom integrations quoted by scope"],cta:"Request My Custom Proposal"},
];

export function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  return <section id="pricing" className={`pricing-section ${showHeading?"":"pricing-page-packages"}`}><div className="shell">{showHeading&&<div className="pricing-heading"><h2>A practical package for every stage of growth.</h2><p>Choose the closest fit below. Your final quote will reflect the exact page count, content, dashboard functionality, integrations, and AI receptionist requirements.</p></div>}{!showHeading&&<h2 className="sr-only">Website design packages</h2>}<div className="pricing-grid">{packages.map((item)=><article key={item.name} className={`pricing-card ${item.recommended?"popular":""}`}><div className="pricing-badge-row">{item.recommended&&<span className="popular-label">Most Popular</span>}</div><h3 className="pricing-name">{item.name}</h3><p className="pricing-scope">{item.scope}</p><div className="pricing-price"><strong>{item.price}</strong></div><p className="pricing-for">{item.for}</p><div className="pricing-divider"/><ul className="pricing-features">{item.features.map((feature)=><li key={feature}><Check size={16}/><span>{feature}</span></li>)}</ul><Link href="/contact" className={`${item.recommended?"button":"button-secondary"} pricing-cta`}>{item.cta}<ArrowRight size={17}/></Link></article>)}</div><p className="pricing-disclaimer">The $899 Growth Platform price and the Intelligent Scale custom quote are one-time website build charges. Both packages also include a separate ongoing maintenance/support fee, which is typically much smaller than the build cost. The exact monthly amount is agreed after consultation based on support, integrations, hosting or usage needs, and final scope. Optional pages, specialized integrations, paid services, custom data systems, or substantial copywriting are quoted separately before work begins.</p></div></section>;
}

const deliveryStandards = [
  ["Direct collaboration","You work with the person shaping the strategy, design, and build—without an account-manager relay."],
  ["Decisions with a reason","Every page, interaction, and line of copy has a clear job tied to your audience and offer."],
  ["A website you control","Your domain, content, and production setup stay transparent, portable, and in your hands."],
] as const;

export function AgencyStandards() {
  return <section className="editorial-section relationship-section"><div className="shell relationship-layout"><div><h2>Sharp creative work without the agency theatre.</h2><p>Clear conversations, honest recommendations, and a build process that respects your time and your business.</p></div><ol>{deliveryStandards.map(([title,copy],index)=><li key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>;
}

export function FinalCta() {
  return <section className="final-cta-section"><div className="final-cta-mark" aria-hidden="true">V</div><div className="shell final-cta"><div className="final-cta-copy"><h2>Ready for a website that feels unmistakably yours?</h2><p>Tell us what you need the website to achieve. We will review the project and recommend the clearest path to design, build, and launch it well.</p></div><div className="final-cta-actions"><Link href="/contact" className="button">Get My Free Website Quote <ArrowRight size={18}/></Link><a href={`tel:${site.phoneHref}`} className="button-secondary"><Phone size={17}/>{site.phoneDisplay}</a></div></div></section>;
}

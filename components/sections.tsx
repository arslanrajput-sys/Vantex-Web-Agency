import { ArrowRight, BarChart3, Check, CheckCircle2, MessageSquareMore, PenLine, Phone, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { PortfolioCard } from "./portfolio-card";
import { ServiceIcon } from "./service-icon";
import { SectionHeading } from "./section-heading";

const problems = ["Dated visuals lower confidence", "Your offer takes too long to understand", "Mobile visitors struggle to take action", "Slow pages lose attention", "Important proof is buried", "There is no obvious next step"];

export function ProblemSection() {
  return <section className="section"><div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><SectionHeading label="The hidden cost" title="Your website should be your best salesperson." copy="People decide whether to trust your business in seconds. If the experience feels unclear, dated, or difficult to use, strong prospects leave before they ever speak to you."/><Link href="/contact" className="text-link mt-7">Find out what your site is missing <ArrowRight size={17}/></Link></div><div className="audit-card"><div className="flex items-center justify-between border-b border-line pb-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-muted">Website clarity audit</p><p className="mt-1 font-display text-xl font-bold text-copy">What is costing you leads?</p></div><span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">Needs attention</span></div><div className="mt-5 space-y-3">{problems.map((p, i) => <div key={p} className="group flex items-center gap-3 rounded-xl border border-transparent bg-ink/45 p-3.5 transition hover:border-line hover:bg-card"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-400/10 text-xs font-bold text-red-300">{String(i+1).padStart(2,"0")}</span><span className="text-sm text-soft">{p}</span></div>)}</div></div></div></section>;
}

export function Services() {
  return <section id="services" className="section bg-panel/45"><div className="shell"><div className="services-home-heading"><SectionHeading label="What we do" title="Five focused services. No artificial add-ons." copy="Mobile responsiveness, accessibility, and technical quality belong in every professional website. Our service list is organized around the actual business problem you need solved."/><Link href="/services" className="text-link">Explore every service <ArrowRight size={17}/></Link></div><div className="services-home-grid">{services.map((service) => <Link href="/services" key={service.slug} className="service-card"><div className="service-card-top"><span className="service-icon"><ServiceIcon slug={service.slug}/></span><span className="service-card-number">{service.number}</span></div><h3>{service.name}</h3><p>{service.shortDescription}</p><span className="service-card-link">View service details <ArrowRight size={15}/></span></Link>)}</div></div></section>;
}

export function Portfolio() {
  const featuredProjects = portfolioProjects.filter((project) => project.homeFeatured);
  return <section id="work" className="section"><div className="shell"><div className="portfolio-heading"><SectionHeading label="Selected work" title="Real websites, designed around the job they need to do." copy="A focused selection of live builds across service businesses and interactive products. Every preview opens the real website."/><div className="portfolio-proof"><strong><span/>Live work for real businesses</strong><p>Strategy, design, development, and launch—connected from the first idea to the finished experience.</p></div></div><div className="portfolio-grid portfolio-grid-home">{featuredProjects.map((project) => <PortfolioCard key={project.name} project={project}/>)}</div><div className="portfolio-home-footer"><p>Want a closer look at the range of work?</p><Link href="/portfolio" className="button-secondary">Explore the complete portfolio <ArrowRight size={17}/></Link></div></div></section>;
}

const values = [
  [Target,"Strategy before design","We define the audience, offer, and conversion path before deciding how the site should look."],
  [PenLine,"Copy structure that guides","Clear headlines and focused sections help visitors understand why you are the right fit."],
  [MessageSquareMore,"Direct communication","You get a clear process, practical feedback, and fewer layers between your idea and the work."],
  [ShieldCheck,"Designed for your business","Every layout responds to your goals, market, and content—not a recycled template."],
] as const;

export function WhyUs() {
  return <section id="about" className="section relative overflow-hidden bg-panel"><div className="why-lines absolute inset-0"/><div className="shell relative grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24"><div><SectionHeading label="Why VantexWeb" title="A focused partner for a website that has a real job to do." copy="We combine sharp creative direction with the discipline of a sales page. The result feels premium, but never gets in the way of the message."/><Link href="/about" className="text-link mt-7">Meet the studio <ArrowRight size={17}/></Link></div><div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">{values.map(([Icon,title,copy]) => <div key={title} className="bg-card p-7 md:p-8"><Icon className="text-cyan" size={24}/><h3 className="mt-5 font-display text-lg font-bold text-copy">{title}</h3><p className="mt-3 text-sm leading-6 text-soft">{copy}</p></div>)}</div></div></section>;
}

const steps = [["01","Discovery","We learn your goals, audience, services, and what is getting in the way today."],["02","Strategy","We shape the sitemap, message hierarchy, user journey, and strongest calls to action."],["03","Design","You see a custom visual direction built around your business and customer expectations."],["04","Development","The approved experience becomes a fast, responsive, accessible production website."],["05","Launch","We test the details, connect essentials, and give you a clear path forward after launch."]];

export function Process() {
  return <section id="process" className="section"><div className="shell"><SectionHeading align="center" label="How it works" title="A clear path from first conversation to launch." copy="You always know what is happening, what we need from you, and what comes next."/><div className="process-line mt-14 grid gap-4 md:grid-cols-5">{steps.map(([n,title,copy]) => <article className="process-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

const outcomes = ["Make a stronger first impression","Increase trust with potential customers","Make every service easier to understand","Generate more calls and inquiries","Give mobile visitors a smoother path","Support advertising and local SEO campaigns"];

export function Results() {
  return <section className="section bg-panel/45"><div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><SectionHeading label="Built for meaningful outcomes" title="Better design is valuable when it makes business easier." copy="We do not promise a magic conversion number. We build the clarity, credibility, and momentum your marketing needs to perform at its best."/><div className="mt-8 grid gap-3 sm:grid-cols-2">{outcomes.map(x => <div key={x} className="flex gap-2.5 text-sm leading-6 text-soft"><CheckCircle2 size={18} className="mt-1 shrink-0 text-success"/>{x}</div>)}</div></div><div className="analytics"><div className="flex items-center justify-between"><div><span>Visitor journey</span><strong>From attention to inquiry</strong></div><BarChart3 className="text-brand"/></div><div className="mt-8 flex h-44 items-end gap-3">{[38,51,44,68,61,82,73,92].map((h,i)=><div key={i} className="bar-track"><i style={{height:`${h}%`}}/></div>)}</div><div className="mt-6 grid grid-cols-3 gap-3"><div><span>01</span><b>Clear offer</b></div><div><span>02</span><b>Earn trust</b></div><div><span>03</span><b>Prompt action</b></div></div></div></div></section>;
}

const packages = [
  {name:"Conversion Launch",scope:"1-Page Landing Experience",price:"$150–$200",for:"For focused offers and campaigns that need a clear path from visitor interest to action.",features:["1 conversion-focused landing page","Custom visual design","Mobile-responsive development","Contact or lead form","Basic on-page SEO","Speed optimization","Conversion-focused content structure"],cta:"Start My Conversion Launch"},
  {name:"Business Authority",scope:"7–9 Page Business Website",price:"$400–$600",for:"For service businesses ready to establish a complete, credible online presence.",recommended:true,features:["7–9 custom website pages","Service and about pages","Contact and lead forms","Mobile-responsive development","Basic on-page SEO","Analytics setup","Clear conversion paths across key pages"],cta:"Build My Business Website"},
  {name:"Growth Platform",scope:"12–15 Page Website + Dashboard",price:"$800–$1,200",for:"For growing businesses that need deeper content and a connected digital platform.",features:["12–15 custom website pages","Custom dashboard interface","Advanced forms and workflows","CMS-ready content setup","Third-party integrations","Analytics and tracking","Scalable content and feature architecture"],cta:"Plan My Growth Platform"},
  {name:"Intelligent Scale",scope:"Advanced Website + AI Receptionist",price:"$1,500–$2,500",for:"For businesses that need advanced features, an AI receptionist, and smarter lead capture.",features:["Custom multi-page website scope","AI receptionist for customer questions","Lead and inquiry collection","Dashboard or client portal","Booking, CRM, and team handoff","Conversion tracking","Priority project support"],cta:"Request My Advanced Proposal"},
];

export function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  return <section id="pricing" className={`section ${showHeading ? "" : "pricing-page-packages"}`}><div className="shell">{showHeading && <SectionHeading align="center" label="Clear project ranges" title="A practical package for every stage of growth." copy="Choose the closest fit below. Your final quote will reflect the exact page count, content, dashboard functionality, integrations, and AI receptionist requirements."/>}<div className={`pricing-grid ${showHeading ? "mt-12" : ""}`}>{packages.map(p => <article key={p.name} className={`pricing-card ${p.recommended ? "popular" : ""}`}><div className="pricing-badge-row">{p.recommended && <span className="popular-label">Most Popular</span>}</div><h3 className="pricing-name">{p.name}</h3><p className="pricing-scope">{p.scope}</p><div className="pricing-price"><strong>{p.price}</strong></div><p className="pricing-for">{p.for}</p><div className="pricing-divider"/><ul className="pricing-features">{p.features.map(f => <li key={f}><Check size={17}/><span>{f}</span></li>)}</ul><Link href="/contact" className={`${p.recommended ? "button" : "button-secondary"} pricing-cta`}>{p.cta}<ArrowRight size={17}/></Link></article>)}</div><p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-muted">These ranges cover the listed package scope. Specialized integrations, paid services, custom data systems, or substantial copywriting are quoted separately before work begins.</p></div></section>;
}

const deliveryStandards = [
  [MessageSquareMore,"Direct collaboration","You work with the person shaping the strategy, design, and build—without an account-manager relay."],
  [Target,"Decisions with a reason","Every page, interaction, and line of copy has a clear job tied to your audience and offer."],
  [ShieldCheck,"A website you control","Your domain, content, and production setup stay transparent, portable, and in your hands."],
] as const;

export function AgencyStandards() {
  return <section className="section bg-panel/45"><div className="shell"><SectionHeading align="center" label="A better working relationship" title="Sharp creative work without the agency theatre." copy="Clear conversations, honest recommendations, and a build process that respects your time and your business."/><div className="standards-grid">{deliveryStandards.map(([Icon,title,copy]) => <article className="standard-card" key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function FinalCta() {
  return <section className="pb-24 pt-8 md:pb-32"><div className="shell"><div className="final-cta"><div className="final-cta-copy"><p className="section-label">Your next step</p><h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-[-.045em] text-copy md:text-5xl">Ready for a website that feels unmistakably yours?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-soft md:text-lg">Tell us what you need the website to achieve. We will review the project and recommend the clearest path to design, build, and launch it well.</p></div><div className="final-cta-actions"><Link href="/contact" className="button">Get My Free Website Quote <ArrowRight size={18}/></Link><a href={`tel:${site.phoneHref}`} className="button-secondary"><Phone size={17}/>{site.phoneDisplay}</a></div></div></div></section>;
}

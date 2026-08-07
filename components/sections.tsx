import { ArrowRight, BarChart3, Check, CheckCircle2, Gauge, Layers3, MessageSquareMore, MonitorSmartphone, MousePointerClick, Paintbrush, PanelsTopLeft, PenLine, Search, ShieldCheck, Sparkles, Target, Wrench } from "lucide-react";
import { SectionHeading } from "./section-heading";

const problems = ["Dated visuals lower confidence", "Your offer takes too long to understand", "Mobile visitors struggle to take action", "Slow pages lose attention", "Important proof is buried", "There is no obvious next step"];

export function ProblemSection() {
  return <section className="section"><div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><SectionHeading label="The hidden cost" title="Your website should be your best salesperson." copy="People decide whether to trust your business in seconds. If the experience feels unclear, dated, or difficult to use, strong prospects leave before they ever speak to you."/><a href="#contact" className="text-link mt-7">Find out what your site is missing <ArrowRight size={17}/></a></div><div className="audit-card"><div className="flex items-center justify-between border-b border-line pb-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-muted">Website clarity audit</p><p className="mt-1 font-display text-xl font-bold text-copy">What is costing you leads?</p></div><span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">Needs attention</span></div><div className="mt-5 space-y-3">{problems.map((p, i) => <div key={p} className="group flex items-center gap-3 rounded-xl border border-transparent bg-ink/45 p-3.5 transition hover:border-line hover:bg-card"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-400/10 text-xs font-bold text-red-300">{String(i+1).padStart(2,"0")}</span><span className="text-sm text-soft">{p}</span></div>)}</div></div></div></section>;
}

const services = [
  [Paintbrush,"Custom website design","A distinctive visual system that makes your business look established, capable, and easy to trust."],
  [PanelsTopLeft,"Landing pages","One focused page built to connect your campaign with a clear offer and a confident next step."],
  [Sparkles,"Website redesign","Turn an outdated or underperforming site into a modern sales asset without losing what already works."],
  [Layers3,"Web development","Clean, responsive builds—from focused marketing sites to connected dashboards, integrations, and chatbot experiences."],
  [MonitorSmartphone,"Local business websites","Help nearby customers understand your services, service area, and how to contact you fast."],
  [MousePointerClick,"Conversion optimization","Sharpen the message, hierarchy, proof, and calls to action so more visitors become inquiries."],
  [Gauge,"Mobile optimization","A seamless phone experience that makes it effortless to call, book, or request a quote."],
  [Search,"On-page SEO foundations","A crawlable, well-structured website with useful metadata and clear content architecture."],
  [Wrench,"Website care","Ongoing updates, technical checks, and improvements that keep your website useful after launch."],
] as const;

export function Services() {
  return <section id="services" className="section bg-panel/45"><div className="shell"><SectionHeading label="What we build" title="Everything your website needs to earn attention—and action." copy="Every decision is tied to a business outcome. No unnecessary pages, trendy clutter, or features you do not need."/><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,copy], i) => <article key={title} className={`service-card ${i===0 ? "md:col-span-2 lg:col-span-1" : ""}`}><span className="service-icon"><Icon size={22}/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

const projects = [
  { name:"HelioNorth", type:"Solar company · Concept project", goal:"Turn a complex solar offer into a confident, simple consultation journey.", tone:"solar", improvements:["Clear savings narrative","Local trust signals","Consultation-led CTA"] },
  { name:"Apex Roofing Co.", type:"Roofing contractor · Concept project", goal:"Help urgent and planned-project visitors find the right path without friction.", tone:"roof", improvements:["Service-first navigation","Emergency contact path","Visible project proof"] },
  { name:"LumaClean", type:"Cleaning company · Concept project", goal:"Create an approachable premium brand with a faster quote-request experience.", tone:"clean", improvements:["Instant service clarity","Simple quote flow","Mobile booking focus"] },
];

function SitePreview({ tone, name }: {tone:string;name:string}) {
  return <div className={`work-preview ${tone}`}><div className="work-browser"><span/><span/><span/></div><div className="flex items-center justify-between px-5 py-4"><strong>{name}</strong><div className="flex gap-2"><i/><i/><i/></div></div><div className="grid flex-1 grid-cols-[1.1fr_.9fr] items-center gap-4 px-5 pb-6"><div><b/><b/><small/><small/><button aria-label="Decorative preview button"/></div><div className="preview-art"><em/><em/><em/></div></div></div>;
}

export function Portfolio() {
  return <section id="work" className="section"><div className="shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading label="Selected concepts" title="Industry-aware design, built around the customer journey." copy="These demonstration projects show how we adapt strategy and visual direction to different service businesses."/><p className="max-w-xs text-sm leading-6 text-muted">Clearly labeled concept work. No fictional client claims or invented performance metrics.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map(p => <article key={p.name} className="case-card"><SitePreview tone={p.tone} name={p.name}/><div className="p-6"><p className="text-xs font-bold uppercase tracking-[.14em] text-cyan">{p.type}</p><h3 className="mt-3 font-display text-2xl font-bold text-copy">{p.name}</h3><p className="mt-3 text-sm leading-6 text-soft">{p.goal}</p><ul className="mt-5 space-y-2">{p.improvements.map(x => <li key={x} className="flex items-center gap-2 text-sm text-soft"><Check size={15} className="text-success"/>{x}</li>)}</ul><a href="#contact" className="text-link mt-6">Build something like this <ArrowRight size={16}/></a></div></article>)}</div></div></section>;
}

const values = [
  [Target,"Strategy before design","We define the audience, offer, and conversion path before deciding how the site should look."],
  [PenLine,"Copy structure that guides","Clear headlines and focused sections help visitors understand why you are the right fit."],
  [MessageSquareMore,"Direct communication","You get a clear process, practical feedback, and fewer layers between your idea and the work."],
  [ShieldCheck,"Designed for your business","Every layout responds to your goals, market, and content—not a recycled template."],
] as const;

export function WhyUs() {
  return <section id="about" className="section relative overflow-hidden bg-panel"><div className="why-lines absolute inset-0"/><div className="shell relative grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24"><SectionHeading label="Why VantexWeb" title="A focused partner for a website that has a real job to do." copy="We combine sharp creative direction with the discipline of a sales page. The result feels premium, but never gets in the way of the message."/><div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">{values.map(([Icon,title,copy]) => <div key={title} className="bg-card p-7 md:p-8"><Icon className="text-cyan" size={24}/><h3 className="mt-5 font-display text-lg font-bold text-copy">{title}</h3><p className="mt-3 text-sm leading-6 text-soft">{copy}</p></div>)}</div></div></section>;
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
  {name:"Landing Page",price:"$150–$200",for:"For one focused offer, service, or advertising campaign.",features:["One conversion-focused page","Custom visual design","Mobile-responsive layout","Contact or lead form","Basic on-page SEO","Speed optimization","Two revision rounds"],cta:"Start My Landing Page"},
  {name:"7–9 Page Business Website",price:"$350–$700",for:"For service businesses that need a complete, credible online presence.",popular:true,features:["Seven to nine custom pages","Service and about pages","Contact and lead forms","Mobile optimization","Basic on-page SEO","Analytics setup","Three revision rounds"],cta:"Build My Business Website"},
  {name:"12–15 Page Website + Dashboard",price:"$900–$1,300",for:"For growing businesses that need more content and a connected dashboard.",features:["Twelve to fifteen pages","Custom dashboard interface","Advanced forms and workflows","CMS-ready content setup","Third-party integrations","Analytics and tracking","Three revision rounds"],cta:"Plan My Dashboard Website"},
  {name:"Advanced Website + Chatbot",price:"$1,500–$2,500",for:"For businesses ready for an advanced platform with smarter lead support.",features:["Advanced website architecture","AI chatbot integration","Dashboard or client portal","CRM and automation connections","Advanced interactions","Conversion tracking","Priority project support"],cta:"Request an Advanced Proposal"},
];

export function Pricing() {
  return <section id="pricing" className="section"><div className="shell"><SectionHeading align="center" label="Clear project ranges" title="A practical package for every stage of growth." copy="Choose the closest fit below. Your final quote will reflect the exact page count, content, dashboard functionality, integrations, and chatbot requirements."/><div className="pricing-grid mt-12">{packages.map(p => <article key={p.name} className={`pricing-card ${p.popular ? "popular" : ""}`}><div className="pricing-badge-row">{p.popular && <span className="popular-label">Most popular</span>}</div><h3 className="pricing-name">{p.name}</h3><div className="pricing-price"><strong>{p.price}</strong><span>Typical project range</span></div><p className="pricing-for">{p.for}</p><div className="pricing-divider"/><ul className="pricing-features">{p.features.map(f => <li key={f}><Check size={17}/><span>{f}</span></li>)}</ul><a href="#contact" className={`${p.popular ? "button" : "button-secondary"} pricing-cta`}>{p.cta}<ArrowRight size={17}/></a></article>)}</div><p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-muted">These ranges cover the listed package scope. Specialized integrations, paid services, custom data systems, or substantial copywriting are quoted separately before work begins.</p></div></section>;
}

const feedback = [
  ["The new site finally reflects the level of work our team delivers. It feels clear, professional, and far easier to show prospective customers.","Better professionalism"],
  ["Customers can understand our services faster and the quote path feels obvious. We started receiving more focused questions instead of vague inquiries.","Clearer inquiries"],
  ["The project moved quickly without feeling rushed. Feedback was handled clearly, and every stage felt organized from strategy through launch.","Smoother delivery"],
];

export function Testimonials() {
  return <section className="section bg-panel/45"><div className="shell"><SectionHeading align="center" label="What the experience can feel like" title="Designed to improve the business behind the website." copy="Sample feedback below illustrates the outcomes clients commonly value. It is not attributed to real customers."/><div className="mt-12 grid gap-5 md:grid-cols-3">{feedback.map(([quote,outcome]) => <figure key={outcome} className="quote-card"><div className="text-4xl font-black leading-none text-brand/50">“</div><blockquote className="mt-4 text-base leading-7 text-copy">{quote}</blockquote><figcaption className="mt-7 border-t border-line pt-5"><span className="block text-xs font-bold uppercase tracking-[.15em] text-cyan">Example client feedback</span><span className="mt-1 block text-sm text-muted">Common outcome: {outcome}</span></figcaption></figure>)}</div></div></section>;
}

export function FinalCta() {
  return <section className="pb-24 pt-8 md:pb-32"><div className="shell"><div className="final-cta"><div><p className="section-label">Your next step</p><h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-[-.045em] text-copy md:text-5xl">Ready for a website that actually helps you grow?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-soft md:text-lg">Tell us about your business and receive a free website plan with recommendations for structure, design, and conversion improvements.</p></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="button">Book a Free Strategy Call <ArrowRight size={18}/></a><a href="#contact" className="button-secondary">Request a Website Quote</a></div></div></div></section>;
}

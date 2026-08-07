import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, Eye, Layers3, MessageSquareMore, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About VantexWeb | Independent Web Design & Development Studio",
  description: "Meet the thinking behind VantexWeb: a focused web design and development studio built around clarity, direct collaboration, and useful digital experiences.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "A Focused Web Studio Without the Agency Theatre | VantexWeb",
    description: "Strategy, design, and development handled as one connected process.",
    url: "/about/",
    type: "website",
  },
};

const principles = [
  [Compass, "Start with the business problem", "Before choosing layouts or effects, we define who the website is for, what they need to understand, and what action matters."],
  [Eye, "Make the value easy to see", "Strong design earns attention. Clear structure and language turn that attention into understanding and trust."],
  [Layers3, "Connect design and development", "The person shaping the experience stays close to the build, so good ideas survive contact with the browser."],
  [ShieldCheck, "Leave clients in control", "Domains, production access, content, and technical decisions stay transparent. Your website remains a business asset you control."],
] as const;

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About VantexWeb",
  url: `${site.url}/about/`,
  description: "About VantexWeb, an independent web design and development studio.",
  mainEntity: { "@id": `${site.url}/#organization` },
};

export default function AboutPage() {
  return <><Navbar/><main><section id="top" className="about-page-hero"><div className="about-hero-lines" aria-hidden="true"/><div className="shell about-hero-layout"><div className="about-hero-copy"><h1>Small by design.<br/><span>Serious about every detail.</span></h1><p>VantexWeb is an independent web studio for businesses that need more than a prettier homepage. We connect strategy, design, development, and launch thinking so the finished website feels distinct and does a real job.</p><div className="about-hero-actions"><Link href="/portfolio" className="button">See the work <ArrowRight size={18}/></Link><Link href="/contact" className="button-secondary">Start a conversation</Link></div></div><div className="about-operating-card"><div className="about-card-head"><span>How the studio operates</span><MessageSquareMore size={20}/></div><ol><li><span>01</span><div><strong>Listen closely</strong><p>Understand the offer, audience, and friction before prescribing a solution.</p></div></li><li><span>02</span><div><strong>Think in systems</strong><p>Connect message, navigation, visual hierarchy, technology, and conversion.</p></div></li><li><span>03</span><div><strong>Design with intent</strong><p>Create something memorable without making visitors work to understand it.</p></div></li><li><span>04</span><div><strong>Finish the details</strong><p>Test the responsive behavior, interactions, content, and launch environment.</p></div></li></ol></div></div></section><section className="about-belief"><div className="shell about-belief-layout"><div><h2>The website is not the product.<br/>Trust is.</h2></div><div><p>A visitor cannot see the care behind your service, the quality of your process, or the experience you bring to the work. The website has to make those invisible strengths easier to recognize.</p><p>That is why VantexWeb treats design as communication—not decoration. Every section should clarify, reassure, differentiate, or move the right person forward.</p><Link href="/services" className="text-link">Explore how we help <ArrowRight size={17}/></Link></div></div></section><section className="about-principles"><div className="shell"><div className="about-section-heading"><h2>A clear standard for the work.</h2><p>No bloated process, recycled visual formula, or technology added simply because it is fashionable.</p></div><div className="about-principles-grid">{principles.map(([Icon,title,copy], index) => <article key={title}><div><span>{String(index + 1).padStart(2,"0")}</span><i><Icon size={21}/></i></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><section className="about-fit"><div className="shell"><div className="about-fit-heading"><h2>The best work starts with the right fit.</h2><p>Good collaboration is direct, honest, and focused on the outcome—not simply completing a checklist.</p></div><div className="about-fit-grid"><article><span>We are likely a strong fit if you…</span><ul>{["Want a custom website with a clear business purpose","Value thoughtful recommendations, not passive order-taking","Can share honest context about the offer and audience","Care about quality across both design and implementation"].map((item)=><li key={item}><Check size={16}/>{item}</li>)}</ul></article><article><span>We may not be the right fit if you…</span><ul>{["Need an overnight copy of another brand’s website","Want visual effects without a clear reason for them","Prefer the cheapest possible template assembly","Do not want to participate in feedback or approvals"].map((item)=><li key={item}><ArrowUpRight size={16}/>{item}</li>)}</ul></article></div></div></section><section className="about-closing"><div className="shell"><div className="about-closing-card"><div><h2>Bring the business context.<br/>We will bring the web thinking.</h2><p>Tell us what needs to change and what a successful website should make easier.</p></div><Link href="/contact" className="button">Request a Website Quote <ArrowRight size={18}/></Link></div></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(aboutSchema).replace(/</g,"\\u003c")}}/></>;
}

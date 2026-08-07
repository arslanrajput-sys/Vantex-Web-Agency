import type { Metadata } from "next";
import { ArrowDown, Check, Mail, MessageSquareText, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact VantexWeb | Request a Website Quote",
  description: "Tell VantexWeb about your website, landing page, redesign, chatbot, dashboard, SEO, or performance project and request a clear project recommendation.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Start a Website Project with VantexWeb",
    description: "Share the business problem, project goals, and scope. Get a practical recommendation for the next step.",
    url: "/contact/",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact VantexWeb",
  url: `${site.url}/contact/`,
  description: "Contact VantexWeb about a web design and development project.",
  mainEntity: { "@id": `${site.url}/#organization` },
};

const nextSteps = [
  ["01", "We read the context", "Your message is reviewed as a real project brief—not dropped into an automated sales sequence."],
  ["02", "We identify the useful questions", "If something important is unclear, we ask before recommending features, scope, or technology."],
  ["03", "You get a practical next step", "If the project is a fit, we outline the recommended direction and what is needed to move toward a proposal."],
] as const;

export default function ContactPage() {
  return <><Navbar/><main><section id="top" className="contact-page-hero"><div className="contact-hero-glow" aria-hidden="true"/><div className="shell contact-hero-layout"><div className="contact-hero-copy"><h1>Start with the problem.<br/><span>Not a sales pitch.</span></h1><p>Tell us what the website needs to improve, who it needs to reach, and what is getting in the way today. We will use that context to recommend a sensible next step.</p><a href="#contact" className="contact-hero-jump"><span><ArrowDown size={18}/></span><div><strong>Share the project brief</strong><small>The useful details are below</small></div></a></div><div className="contact-direct-card"><div className="contact-direct-head"><span>Contact VantexWeb directly</span><MessageSquareText size={20}/></div><a href={`mailto:${site.email}`}><i><Mail size={19}/></i><div><span>Email</span><strong>{site.email}</strong></div></a><a href={`tel:${site.phoneHref}`}><i><Phone size={19}/></i><div><span>Phone</span><strong>{site.phoneDisplay}</strong></div></a><div className="contact-direct-note"><Check size={16}/><p>No generic audit. No pressure script. Just a focused conversation about whether and how we can help.</p></div></div></div></section><section className="contact-next-steps"><div className="shell"><div className="contact-next-heading"><h2>What happens after you reach out?</h2><p>A simple process designed to produce clarity before either side commits to a project.</p></div><div className="contact-next-grid">{nextSteps.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><ContactForm standalone/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(contactSchema).replace(/</g,"\\u003c")}}/></>;
}

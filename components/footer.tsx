import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-main"><div className="footer-brand"><Logo footer/><p>Premium web design and development for service businesses that want clearer positioning, stronger credibility, and more qualified inquiries.</p></div><FooterLinks title="Services" links={[["Custom websites","/services/#custom-website-design-development"],["Landing pages","/services/#landing-page-design"],["Website redesign","/services/#website-redesign-optimization"],["AI receptionist chatbots","/services/#ai-chatbot-integration"],["SEO & performance","/services/#seo-performance-optimization"]]}/><FooterLinks title="Company" links={[["About","/about"],["Portfolio","/portfolio"],["Process","/#process"],["Pricing","/pricing"],["Contact","/contact"]]}/><div className="footer-column footer-connect"><h3>Connect</h3><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} VantexWeb. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link><a href="#top">Back to top <ArrowUpRight size={13}/></a></div></div></div></footer>;
}

function FooterLinks({title,links}:{title:string;links:readonly (readonly [string,string])[]}) {
  return <div className="footer-column"><h3>{title}</h3>{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</div>;
}

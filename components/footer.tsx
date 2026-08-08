import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-12">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Logo footer/><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Premium web design and development for service businesses that want clearer positioning, stronger credibility, and more qualified inquiries.</p></div>
          <FooterLinks title="Services" links={[["Custom websites","/services"],["Landing pages","/services"],["Website redesign","/services"],["AI chatbots","/services"],["SEO & performance","/services"]]}/>
          <FooterLinks title="Company" links={[["About","/about"],["Portfolio","/portfolio"],["Process","/#process"],["Pricing","/#pricing"],["Contact","/contact"]]}/>
          <div><h3 className="footer-title">Connect</h3><a className="footer-link" href={`mailto:${site.email}`}>{site.email}</a><a className="footer-link" href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><div className="mt-4 flex gap-2"><a className="social-link" href={`mailto:${site.email}`} aria-label={`Email VantexWeb at ${site.email}`}><Mail size={17}/></a><a className="social-link" href={`tel:${site.phoneHref}`} aria-label={`Call VantexWeb at ${site.phoneDisplay}`}><Phone size={17}/></a></div></div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VantexWeb. All rights reserved.</p>
          <div className="flex flex-wrap gap-5"><Link href="/privacy" className="hover:text-copy">Privacy Policy</Link><Link href="/terms" className="hover:text-copy">Terms</Link><Link href="/disclaimer" className="hover:text-copy">Disclaimer</Link><a href="#top" className="flex items-center gap-1 hover:text-copy">Back to top <ArrowUpRight size={13}/></a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[][] }) {
  return <div><h3 className="footer-title">{title}</h3>{links.map(([label,href]) => <Link key={label} href={href} className="footer-link">{label}</Link>)}</div>;
}

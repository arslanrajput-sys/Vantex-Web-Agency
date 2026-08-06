import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@vantexweb.com";
  return (
    <footer className="border-t border-line bg-ink py-12">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Logo footer/><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Premium web design and development for service businesses that want clearer positioning, stronger credibility, and more qualified inquiries.</p></div>
          <FooterLinks title="Services" links={[["Website design","#services"],["Landing pages","#services"],["Website redesign","#services"],["Website care","#services"]]}/>
          <FooterLinks title="Company" links={[["Our work","#work"],["Process","#process"],["Pricing","#pricing"],["Contact","#contact"]]}/>
          <div><h3 className="footer-title">Connect</h3><a className="footer-link" href={`mailto:${email}`}>{email}</a><div className="mt-4 flex gap-2"><a className="social-link" href="#contact" aria-label="Ask for our LinkedIn profile"><Linkedin size={17}/></a><a className="social-link" href="#contact" aria-label="Ask for our Instagram profile"><Instagram size={17}/></a></div></div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VantexWeb. All rights reserved.</p>
          <div className="flex flex-wrap gap-5"><a href="/privacy" className="hover:text-copy">Privacy Policy</a><a href="/terms" className="hover:text-copy">Terms</a><a href="#top" className="flex items-center gap-1 hover:text-copy">Back to top <ArrowUpRight size={13}/></a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[][] }) {
  return <div><h3 className="footer-title">{title}</h3>{links.map(([label,href]) => <a key={label} href={href} className="footer-link">{label}</a>)}</div>;
}

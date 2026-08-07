"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  { label:"Services", href:"/services", section:"services" },
  { label:"Portfolio", href:"/portfolio", section:"portfolio" },
  { label:"Process", href:"/#process", section:"process" },
  { label:"Pricing", href:"/#pricing", section:"pricing" },
  { label:"About", href:"/#about", section:"about" },
  { label:"Contact", href:"/#contact", section:"contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const isLinkActive = (link: (typeof links)[number]) => active === link.section || (!link.href.startsWith("/#") && pathname === link.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = links.filter((link) => link.section !== "portfolio").map((link) => document.getElementById(link.section)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, .15, .35] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line/70 bg-ink/90 shadow-xl shadow-black/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="shell flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <Link key={link.label} href={isHome && link.href.startsWith("/#") ? link.href.slice(1) : link.href} aria-current={isLinkActive(link) ? "page" : undefined} className={`nav-link ${isLinkActive(link) ? "active" : ""}`}>{link.label}</Link>)}
        </div>
        <Link className="button button-sm hidden lg:inline-flex" href={isHome ? "#contact" : "/#contact"}>Request a Free Quote</Link>
        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-menu" className={`overflow-hidden border-line bg-ink/98 transition-[max-height,border] duration-300 lg:hidden ${open ? "max-h-[520px] border-t" : "max-h-0 border-t-0"}`}>
        <div className="shell flex flex-col gap-1 py-5">
          {links.map((link) => <Link key={link.label} href={isHome && link.href.startsWith("/#") ? link.href.slice(1) : link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-soft hover:bg-card hover:text-copy">{link.label}</Link>)}
          <Link className="button mt-3" href={isHome ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>Request a Free Quote</Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = ["Services", "Work", "Process", "Pricing", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line/70 bg-ink/90 shadow-xl shadow-black/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="shell flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>)}
        </div>
        <a className="button button-sm hidden lg:inline-flex" href="#contact">Book a Free Strategy Call</a>
        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-menu" className={`overflow-hidden border-line bg-ink/98 transition-[max-height,border] duration-300 lg:hidden ${open ? "max-h-[520px] border-t" : "max-h-0 border-t-0"}`}>
        <div className="shell flex flex-col gap-1 py-5">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-soft hover:bg-card hover:text-copy">{link}</a>)}
          <a className="button mt-3" href="#contact" onClick={() => setOpen(false)}>Book a Free Strategy Call</a>
        </div>
      </div>
    </header>
  );
}

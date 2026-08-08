"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  {label:"Services",href:"/services",section:"services"},
  {label:"Portfolio",href:"/portfolio",section:"portfolio"},
  {label:"Process",href:"/#process",section:"process"},
  {label:"Pricing",href:"/pricing",section:"pricing"},
  {label:"About",href:"/about",section:"about"},
  {label:"Contact",href:"/contact",section:"contact"},
] as const;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [active,setActive] = useState("");
  const isLinkActive = (link:(typeof links)[number]) => (isHome&&active===link.section)||(!link.href.startsWith("/#")&&pathname===link.href);

  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll);},[]);
  useEffect(()=>{if(!isHome)return;const sections=links.filter((link)=>link.section!=="portfolio").map((link)=>document.getElementById(link.section)).filter(Boolean) as HTMLElement[];const observer=new IntersectionObserver((entries)=>{const visible=entries.filter((entry)=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id);},{rootMargin:"-20% 0px -65%",threshold:[0,.15,.35]});sections.forEach((section)=>observer.observe(section));return()=>observer.disconnect();},[isHome]);
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow="";};},[open]);

  return <header className={`site-header ${scrolled||open?"site-header-scrolled":""}`}><nav className="shell site-nav" aria-label="Primary navigation"><Logo/><div className="desktop-nav">{links.map((link)=><Link key={link.label} href={isHome&&link.href.startsWith("/#")?link.href.slice(1):link.href} aria-current={isLinkActive(link)?"page":undefined} className={`nav-link ${isLinkActive(link)?"active":""}`}>{link.label}</Link>)}</div><Link className="button button-sm nav-quote-button" href="/contact/#contact">Request a Free Quote</Link><button className="icon-button mobile-menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close navigation":"Open navigation"}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button></nav><div id="mobile-menu" aria-hidden={!open} inert={!open} className={`mobile-menu ${open?"mobile-menu-open":""}`}><div className="shell mobile-menu-inner">{links.map((link)=><Link key={link.label} href={isHome&&link.href.startsWith("/#")?link.href.slice(1):link.href} aria-current={isLinkActive(link)?"page":undefined} onClick={()=>setOpen(false)} className={isLinkActive(link)?"active":""}>{link.label}</Link>)}<Link className="button mobile-quote" href="/contact/#contact" onClick={()=>setOpen(false)}>Request a Free Quote</Link></div></div></header>;
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { faqs } from "./faq-data";

export function FAQ() {
  const [open,setOpen] = useState<number|null>(0);
  return <section className="section"><div className="shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24"><div><SectionHeading label="Questions, answered" title="Everything you need to know before we begin." copy="Still deciding whether a custom website is the right move? Start with a free conversation—no pressure, no hard sell."/><a href="#contact" className="button-secondary mt-7">Ask a question</a></div><div className="divide-y divide-line border-y border-line">{faqs.map(([q,a],i)=><div key={q}><h3><button className="faq-button" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} aria-controls={`faq-${i}`}><span>{q}</span><Plus className={`shrink-0 transition-transform ${open===i?"rotate-45 text-cyan":"text-muted"}`} size={20}/></button></h3><div id={`faq-${i}`} role="region" className={`faq-answer ${open===i?"open":""}`}><p>{a}</p></div></div>)}</div></div></section>;
}

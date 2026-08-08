"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { faqs } from "./faq-data";

type FAQProps = {
  items?: readonly (readonly [string, string])[];
  title?: string;
  copy?: string;
};

export function FAQ({ items = faqs, title = "Everything you need to know before we begin.", copy = "Still deciding whether a custom website is the right move? Start with a free conversation—no pressure, no hard sell." }: FAQProps = {}) {
  const [open,setOpen] = useState<number|null>(0);
  return <section className="editorial-section faq-section"><div className="shell faq-layout"><div className="faq-intro"><h2>{title}</h2><p>{copy}</p><Link href="/contact" className="button-secondary">Ask a question</Link></div><div className="faq-list">{items.map(([question,answer],index)=><div key={question} className={open===index?"is-open":""}><h3><button className="faq-button" onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index} aria-controls={`faq-${index}`}><span>{question}</span><Plus className="faq-icon" size={20}/></button></h3><div id={`faq-${index}`} role="region" className={`faq-answer ${open===index?"open":""}`}><p>{answer}</p></div></div>)}</div></div></section>;
}

"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { SectionHeading } from "./section-heading";

const before = ["Generic visual direction","Weak, inward-focused headline","No clear next step","Awkward mobile layout","Little reason to trust the business"];
const after = ["Distinctive, credible identity","Clear offer built around the customer","Focused calls to action","Mobile-first experience","Proof and reassurance in the right places"];

export function Comparison() {
  const [mode,setMode] = useState<"before"|"after">("after");
  const active = mode === "after";
  return <section className="section bg-panel/45"><div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20"><div><SectionHeading label="The transformation" title="From online brochure to focused sales experience." copy="A redesign is more than a fresh color palette. It changes how quickly customers understand the offer, trust the business, and decide to act."/><div className="mt-7 inline-flex rounded-xl border border-line bg-ink p-1" role="group" aria-label="Choose website comparison view"><button onClick={()=>setMode("before")} aria-pressed={!active} className={!active ? "toggle-active" : "toggle-button"}>Before</button><button onClick={()=>setMode("after")} aria-pressed={active} className={active ? "toggle-active" : "toggle-button"}>After VantexWeb</button></div></div><div className={`comparison-panel ${active ? "after" : "before"}`}><div className="flex items-center justify-between border-b border-line px-5 py-4"><div className="flex gap-1.5"><i/><i/><i/></div><span>{active ? "Clear. Credible. Action-focused." : "Difficult to understand."}</span></div><div className="grid gap-6 p-6 sm:grid-cols-[1fr_.85fr] md:p-9"><div className="comparison-site"><small>{active ? "THE SERVICE CUSTOMERS NEED" : "WELCOME TO OUR WEBSITE"}</small><b/><b/><p/><p/><button aria-label="Decorative website preview"/></div><ul className="space-y-3">{(active ? after : before).map(x=><li key={x} className="flex gap-2.5 text-sm leading-6 text-soft">{active ? <Check className="mt-1 shrink-0 text-success" size={17}/> : <X className="mt-1 shrink-0 text-red-300" size={17}/>} {x}</li>)}</ul></div></div></div></section>;
}

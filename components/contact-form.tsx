"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, Mail, MessageSquareText } from "lucide-react";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status,setStatus] = useState<Status>("idle");
  const [message,setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("loading"); setMessage("");
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(values) });
      const data = await response.json() as {message?:string};
      if (!response.ok) throw new Error(data.message || "We could not send your request.");
      setStatus("success"); setMessage(data.message || "Thanks—your request has been received."); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please email us directly.");
    }
  }

  return <section id="contact" className="section border-t border-line bg-panel"><div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><SectionHeading label="Start a conversation" title="Tell us what your next website needs to accomplish." copy="Share the basics below. We will review your goals and follow up with useful next steps—not a generic sales pitch."/><div className="mt-8 space-y-4"><div className="contact-note"><MessageSquareText/><div><strong>A thoughtful first response</strong><span>Expect practical questions about your business, audience, and goals.</span></div></div><div className="contact-note"><Mail/><div><strong>Prefer email?</strong><span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@vantexweb.com"}</span></div></div></div></div><form onSubmit={submit} className="contact-card" noValidate><div className="grid gap-5 sm:grid-cols-2"><Field name="name" label="Name" required autoComplete="name"/><Field name="businessName" label="Business name" required autoComplete="organization"/><Field name="email" label="Email" type="email" required autoComplete="email"/><Field name="phone" label="Phone" type="tel" autoComplete="tel"/><Field name="website" label="Current website" type="url" placeholder="https://"/><Select name="businessType" label="Business type" required options={["Local service business","Solar company","Roofing contractor","Cleaning company","Startup / SaaS","Professional services","Other"]}/><Select name="budget" label="Estimated budget" required options={["$2,500–$5,000","$5,000–$10,000","$10,000–$20,000","$20,000+","Not sure yet"]}/><div className="hidden sm:block"/></div><label className="field mt-5"><span>Project details <b>*</b></span><textarea name="details" required minLength={20} rows={5} placeholder="What do you need, what is not working today, and what would a successful website help you achieve?"/></label><input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button className="button mt-6 w-full sm:w-auto" disabled={status==="loading"} type="submit">{status==="loading"?<><LoaderCircle className="animate-spin" size={18}/>Sending…</>:<>Request My Free Website Plan <ArrowRight size={18}/></>}</button>{message&&<div role="status" className={`form-status ${status}`}><CheckCircle2 size={18}/>{message}</div>}<p className="mt-5 text-xs leading-5 text-muted">By submitting, you agree that VantexWeb may contact you about your project. We never sell your information.</p></form></div></section>;
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & {label:string}) { const {label,...input}=props; return <label className="field"><span>{label} {input.required&&<b>*</b>}</span><input {...input}/></label>; }
function Select({name,label,required,options}:{name:string;label:string;required?:boolean;options:string[]}) { return <label className="field"><span>{label} {required&&<b>*</b>}</span><select name={name} required={required} defaultValue=""><option value="" disabled>Select one</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>; }

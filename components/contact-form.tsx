"use client";

import { FormEvent, useRef, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle, Mail, MessageSquareText, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "loading" | "success" | "error";

const formSubmitEndpoint = `https://formsubmit.co/ajax/${site.email}`;

const budgetOptions = [
  "< $500",
  "$500–$1,000",
  "$1,000–$1,500",
  "$1,500–$2,500",
  "$2,500+",
];

export function ContactForm({ standalone = false }: { standalone?: boolean }) {
  const [status,setStatus] = useState<Status>("idle");
  const [message,setMessage] = useState("");
  const submissionInFlight = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || submissionInFlight.current) return;
    const formData = new FormData(form);
    if (String(formData.get("companyWebsite") || "").trim()) return;
    submissionInFlight.current = true;
    setStatus("loading"); setMessage("");
    try {
      const response = await fetch(formSubmitEndpoint, { method:"POST", headers:{Accept:"application/json"}, body:formData });
      const data = await response.json().catch(() => null) as {success?:boolean|string;message?:string} | null;
      const delivered = data?.success === true || data?.success === "true";
      if (!response.ok || !delivered) throw new Error(data?.message || "We could not send your request.");
      const confirmationResponse = await fetch("/api/autoresponse", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: String(formData.get("email") || ""), name: String(formData.get("name") || "") }),
      });
      if (!confirmationResponse.ok) throw new Error("Your request was received, but the confirmation email could not be sent. Please email us directly.");
      setStatus("success"); setMessage("Thanks—your project brief has been sent. We will be in touch shortly."); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please email us directly.");
    } finally {
      submissionInFlight.current = false;
    }
  }

  return (
    <section id="contact" className={`section border-t border-line bg-panel ${standalone ? "contact-page-form-section" : ""}`}>
      <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading label={standalone ? "Your project brief" : "Start a conversation"} title={standalone ? "Give us enough context to make the first reply useful." : "Tell us what you are building—and where the current website falls short."} copy={standalone ? "You do not need a finished specification. Share the business, the goal, the important features, and what is not working today." : "Share the essentials below. We will review the project ourselves, ask the useful questions, and come back with a clear recommendation for scope and next steps."}/>
          <div className="mt-8 space-y-4"><div className="contact-note"><MessageSquareText/><div><strong>A real project review</strong><span>No automated audit and no generic sales script. Your message is read by the person who would help shape the work.</span></div></div><div className="contact-note"><Mail/><div><strong>Email us directly</strong><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-note"><Phone/><div><strong>Prefer to talk?</strong><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></div></div></div>
        </div>
        <form action={formSubmitEndpoint} method="POST" onSubmit={submit} className="contact-card" noValidate>
          <input type="hidden" name="_subject" value="New Website Lead - VantexWeb"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="name" label="Name" required autoComplete="name"/>
            <Field name="phone" label="Phone" type="tel" required autoComplete="tel"/>
            <Field name="email" label="Email" type="email" required autoComplete="email"/>
            <Field name="businessName" label="Business name (optional)" autoComplete="organization"/>
            <Select name="inquiryType" label="Inquiry type" options={["Website Redesign","Landing Page","Complete Business Website","Advanced Website with Dashboard","Website with AI Receptionist Chatbot","Other"]}/>
            <Select name="budget" label="Estimated budget" required options={budgetOptions}/>
          </div>
          <label className="field mt-5"><span>Project details <b>*</b></span><textarea name="message" required minLength={20} rows={5} placeholder="Which pages or features do you need? Tell us about any dashboard, AI receptionist chatbot, booking, or integration requirements."/></label>
          <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
          <button className="button mt-6 w-full sm:w-auto" disabled={status==="loading"} type="submit">{status==="loading"?<><LoaderCircle className="animate-spin" size={18}/>Sending…</>:<>Get My Free Website Quote <ArrowRight size={18}/></>}</button>
          {message&&<div role={status==="error" ? "alert" : "status"} aria-live="polite" className={`form-status ${status}`}>{status==="error" ? <AlertCircle size={18}/> : <CheckCircle2 size={18}/>}<span>{message}</span></div>}
          <p className="mt-5 text-xs leading-5 text-muted">By submitting, you agree that VantexWeb may contact you about your project. We never sell your information.</p>
        </form>
      </div>
    </section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & {label:string}) { const {label,...input}=props; return <label className="field"><span>{label} {input.required&&<b>*</b>}</span><input {...input}/></label>; }
function Select({name,label,required,options}:{name:string;label:string;required?:boolean;options:readonly string[]}) { return <label className="field"><span>{label} {required&&<b>*</b>}</span><select name={name} required={required} defaultValue=""><option value="" disabled>Select one</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>; }

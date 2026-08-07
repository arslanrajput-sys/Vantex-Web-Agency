import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Terms of Use | VantexWeb",
  description: "Terms governing use of the VantexWeb website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="border-b border-line"><div className="shell flex h-[76px] items-center justify-between"><Logo/><Link className="text-link" href="/">Back to home</Link></div></header>
      <article className="legal-copy shell py-16 md:py-24">
        <p className="section-label">Legal</p><h1>Terms of Use</h1><p className="legal-date">Last updated: August 7, 2026</p>
        <h2>Website information</h2><p>This website provides general information about VantexWeb services. Content is not a binding offer, guarantee, or substitute for a signed project agreement.</p>
        <h2>Project inquiries</h2><p>Submitting an inquiry does not create a client relationship. Scope, schedule, fees, ownership, and deliverables are established only in a written agreement accepted by both parties.</p>
        <h2>Intellectual property</h2><p>The VantexWeb name, visual identity, original site content, and design are protected by applicable intellectual-property laws. Portfolio examples link to live work; business names, trademarks, and client-supplied materials remain the property of their respective owners.</p>
        <h2>Availability and liability</h2><p>We work to keep this site accurate and available, but cannot guarantee uninterrupted access. To the extent permitted by law, VantexWeb is not liable for loss arising solely from use of this informational website.</p>
        <h2>Changes</h2><p>We may update these terms when the website or our practices change. Continued use after an update means you accept the revised terms.</p>
      </article>
    </main>
  );
}

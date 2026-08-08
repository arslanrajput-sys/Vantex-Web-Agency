import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { publicPageRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | VantexWeb",
  description: "Read how VantexWeb collects, uses, protects, and manages information submitted through our website and contact forms.",
  alternates: { canonical: "/privacy/" },
  robots: publicPageRobots,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="border-b border-line"><div className="shell flex h-[76px] items-center justify-between"><Logo/><Link className="text-link" href="/">Back to home</Link></div></header>
      <article className="legal-copy shell py-16 md:py-24">
        <p className="section-label">Legal</p><h1>Privacy Policy</h1><p className="legal-date">Last updated: August 7, 2026</p>
        <h2>Information we collect</h2><p>When you submit the contact form, we receive the information you provide, such as your name, business details, contact information, budget range, and project description.</p>
        <h2>How we use information</h2><p>We use submitted information to respond to your inquiry, evaluate project fit, prepare recommendations or proposals, and communicate about requested services. We do not sell your personal information.</p>
        <h2>Service providers</h2><p>Form submissions may be processed by our hosting and form-delivery providers. These providers process information only as needed to deliver their services.</p>
        <h2>Retention and choices</h2><p>We retain inquiry details only as long as reasonably needed for business and legal purposes. You can request access, correction, or deletion by emailing <a href={`mailto:${site.email}`}>{site.email}</a> or calling <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.</p>
        <h2>Updates</h2><p>We may update this policy as our services change. The date above shows the latest revision.</p>
      </article>
    </main>
  );
}

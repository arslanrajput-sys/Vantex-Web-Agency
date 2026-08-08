import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer | VantexWeb",
  description: "Important information about using the VantexWeb website and its services.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="border-b border-line"><div className="shell flex h-[76px] items-center justify-between"><Logo/><Link className="text-link" href="/">Back to home</Link></div></header>
      <article className="legal-copy shell py-16 md:py-24">
        <h1>Disclaimer</h1><p className="legal-date">Last updated: August 7, 2026</p>
        <h2>General information</h2><p>The information on this website is provided for general informational purposes. It is intended to explain VantexWeb&apos;s services, approach, and examples of work, not to create a binding offer or professional advice for a particular business.</p>
        <h2>Estimates and results</h2><p>Project ranges, timelines, recommendations, and examples are illustrative. Final scope, fees, deliverables, and timing depend on the specific project and are confirmed only in a written proposal or agreement. We do not guarantee search rankings, conversion rates, revenue, or other business outcomes.</p>
        <h2>Third-party websites</h2><p>Portfolio and other external links are provided for convenience. VantexWeb does not control those websites and is not responsible for their content, availability, policies, or updates.</p>
        <h2>Contact and decisions</h2><p>Submitting an inquiry does not create a client relationship. Before making a business, legal, financial, or technical decision, consider advice that is appropriate to your circumstances. For questions about this website, contact <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Updates</h2><p>We may update this disclaimer as the website or our services change. The date above reflects the most recent revision.</p>
      </article>
    </main>
  );
}

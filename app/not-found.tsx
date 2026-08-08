import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page Not Found | VantexWeb",
  description: "The requested VantexWeb page could not be found.",
};

export default function NotFound() {
  return <><Navbar/><main id="top" className="min-h-[72vh] bg-ink"><section className="legal-copy shell flex min-h-[72vh] flex-col items-start justify-center py-32"><p className="section-label">404 error</p><h1>That page is not here.</h1><p>The address may have changed, or the page may no longer exist. Return to the homepage to continue exploring VantexWeb.</p><Link href="/" className="button mt-7"><ArrowLeft size={17}/>Back to homepage</Link></section></main><Footer/></>;
}

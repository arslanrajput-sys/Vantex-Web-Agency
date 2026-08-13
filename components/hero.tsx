import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="next-hero">
      <div className="hero-ambient" aria-hidden="true" />

      <div className="shell hero-centered">
        <div className="hero-copy">
          <h1 className="hero-mega-title">
            Your business deserves a website that looks this good.
          </h1>
          <p className="hero-lede">
            We design custom websites that make your business look professional,
            build trust fast, and turn more visitors into inquiries.
          </p>
          <div className="hero-actions">
            <Link href="/contact/#project-brief" className="button hero-primary">
              Get My Free Website Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/portfolio" className="hero-secondary">
              View Our Work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">
            <span aria-hidden="true" />
            No templates. No handoffs. Built around your business.
          </p>
        </div>
      </div>
    </section>
  );
}

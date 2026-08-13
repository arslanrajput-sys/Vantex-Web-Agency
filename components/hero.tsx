import Image from "next/image";
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
        </div>

        <Link
          href="/portfolio"
          className="hero-browser"
          aria-label="View the VantexWeb portfolio"
        >
          <span className="hero-browser-bar" aria-hidden="true">
            <span className="hero-browser-controls"><i /><i /><i /></span>
            <span className="hero-browser-address">thefaderoom.com</span>
            <span className="hero-browser-open"><ArrowUpRight size={15} /></span>
          </span>
          <span className="hero-browser-canvas">
            <Image
              src="/portfolio/the-fade-room.webp"
              alt="The Fade Room barber studio website designed by VantexWeb"
              width={1200}
              height={750}
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 80px), 1120px"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

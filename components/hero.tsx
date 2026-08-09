import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="next-hero">
      <div className="hero-vw" aria-hidden="true">
        <svg viewBox="0 0 104 96"><path d="M8 25h20.5L47 57.5 59.2 35H75L51.8 79.2c-2 3.9-7.5 4.1-9.8.3L8 25Z"/><path d="m44 72 15.8-29.1L68.2 60 83.8 23H96L69.1 79 59.8 61.6l-8 16.2c-2.1 4.2-7.2 4.1-9.5.2l-1.2-2.1L44 72Z"/></svg>
      </div>
      <div className="shell hero-editorial">
        <div className="hero-copy">
          <div className="hero-title-wrap">
            <h1 className="hero-mega-title">
              <span>Make your website</span>
              <span>impossible to ignore.</span>
            </h1>
          </div>
          <aside className="hero-support" data-reveal>
            <p className="hero-lede">We design and build custom websites that explain your value quickly, earn trust, and turn serious visitors into qualified inquiries.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button hero-primary">Get My Free Website Quote <ArrowRight size={18}/></Link>
              <Link href="/portfolio" className="hero-work-link">View live portfolio <ArrowDownRight size={18}/></Link>
            </div>
            <div className="hero-proof" aria-label="VantexWeb project principles">
              <span><Check size={14}/>Direct collaboration</span>
              <span><Check size={14}/>Built for real buyers</span>
              <span><Check size={14}/>No recycled templates</span>
            </div>
          </aside>
        </div>
        <div className="hero-showcase" aria-hidden="true">
          <div className="hero-showcase-grid"/>
          <div className="hero-showcase-mark"><svg viewBox="0 0 104 96"><path d="M8 25h20.5L47 57.5 59.2 35H75L51.8 79.2c-2 3.9-7.5 4.1-9.8.3L8 25Z"/><path d="m44 72 15.8-29.1L68.2 60 83.8 23H96L69.1 79 59.8 61.6l-8 16.2c-2.1 4.2-7.2 4.1-9.5.2l-1.2-2.1L44 72Z"/></svg></div>
          <div className="hero-showcase-orbit"><span/><i/><b/></div>
          <div className="hero-showcase-message"><span>Built around your business</span><strong>Clarity that creates action.</strong><small>Strategy · Design · Development</small></div>
          <div className="hero-showcase-outcomes"><span>Clear</span><span>Credible</span><span>Ready to act</span></div>
        </div>
      </div>
    </section>
  );
}

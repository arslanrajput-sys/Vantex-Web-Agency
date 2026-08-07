"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, MousePointer2, Sparkles, TrendingUp, Zap } from "lucide-react";

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  function tilt(event: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty("--hero-rx", `${-y * 7}deg`);
    stage.style.setProperty("--hero-ry", `${x * 9}deg`);
    stage.style.setProperty("--hero-x", `${(x + 0.5) * 100}%`);
    stage.style.setProperty("--hero-y", `${(y + 0.5) * 100}%`);
  }

  function resetTilt() {
    stageRef.current?.style.setProperty("--hero-rx", "0deg");
    stageRef.current?.style.setProperty("--hero-ry", "0deg");
  }

  return (
    <section id="top" className="next-hero">
      <div className="hero-mesh" aria-hidden="true"/><div className="hero-scanline" aria-hidden="true"/>
      <div className="hero-rail hero-rail-left" aria-hidden="true"><span>DESIGN</span><i/><span>DEVELOP</span><i/><span>CONVERT</span></div>
      <div className="shell relative z-10 grid min-h-[900px] items-center gap-16 pb-24 pt-32 lg:min-h-[860px] lg:grid-cols-[.95fr_1.05fr] lg:gap-10 lg:pb-20 lg:pt-28">
        <div className="hero-copy-block">
          <div className="hero-kicker"><Sparkles size={14}/><span>Web design + development</span><i>Independent studio</i></div>
          <h1 className="hero-mega-title">
            <span className="hero-line"><span>Make your website</span></span>
            <span className="hero-line"><span className="hero-stroke">impossible to ignore.</span></span>
          </h1>
          <p className="hero-lede">We design and build custom websites that explain your value quickly, earn trust, and turn serious visitors into qualified inquiries.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button hero-primary">Get My Free Website Quote <ArrowRight size={18}/><span className="button-pulse"/></Link>
            <Link href="/portfolio" className="hero-work-link"><span className="work-link-icon"><ArrowDown size={17}/></span><span><b>View live portfolio</b><small>Explore selected client work</small></span></Link>
          </div>
          <div className="hero-proof"><span><Check size={14}/> Direct collaboration</span><span><Check size={14}/> Built for real buyers</span><span><Check size={14}/> No recycled templates</span></div>
        </div>

        <div ref={stageRef} onPointerMove={tilt} onPointerLeave={resetTilt} className="creative-stage" aria-label="Interactive VantexWeb conversion design system preview">
          <div className="stage-spotlight"/><div className="orbit orbit-one"><i/><i/><i/></div><div className="orbit orbit-two"><i/><i/></div>
          <div className="stage-label stage-label-top"><span>LIVE EXPERIENCE</span><i/></div>
          <div className="stage-window">
            <div className="window-top"><div><i/><i/><i/></div><span>vantexweb / growth-system</span><Zap size={13}/></div>
            <div className="window-body">
              <aside><div className="mini-mark">V</div>{[0,1,2,3].map(n=><i key={n}/>)}</aside>
              <div className="window-canvas">
                <div className="canvas-nav"><b>BRAND / 001</b><span/><span/><button aria-label="Decorative navigation button">START</button></div>
                <div className="canvas-main">
                  <div><small>THE BUSINESS ADVANTAGE</small><strong>Clarity that<br/><em>creates action.</em></strong><p/><p/><button aria-label="Decorative call to action"/></div>
                  <div className="conversion-orb"><span>+ SIGNAL</span><div className="orb-core"><i/><i/></div></div>
                </div>
                <div className="canvas-metrics"><div><small>MESSAGE</small><b>Crystal clear</b></div><div><small>EXPERIENCE</small><b>Frictionless</b></div><div><small>OUTCOME</small><b>More action</b></div></div>
              </div>
            </div>
          </div>
          <div className="signal-card signal-card-left"><div><TrendingUp size={18}/></div><span><small>CONVERSION PATH</small><strong>Friction removed</strong></span><b>↗</b></div>
          <div className="signal-card signal-card-right"><div><MousePointer2 size={18}/></div><span><small>NEW INQUIRY</small><strong>Qualified lead</strong></span><i/></div>
          <div className="stage-coordinate coordinate-x">X / 48.208</div><div className="stage-coordinate coordinate-y">Y / 17.618</div>
        </div>
      </div>
      <div className="hero-marquee" aria-label="VantexWeb capabilities"><div>{["Strategy before pixels","Conversion-led copy","Unmistakably custom","Built to perform","Strategy before pixels","Conversion-led copy","Unmistakably custom","Built to perform"].map((item,index)=><span key={`${item}-${index}`}>{item}<i/></span>)}</div></div>
    </section>
  );
}

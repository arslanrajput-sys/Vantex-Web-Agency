import { ArrowRight, Check, MousePointer2, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-glow absolute -right-48 top-16 -z-10 h-[600px] w-[600px] rounded-full" aria-hidden="true" />
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div className="animate-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3.5 py-2 text-xs font-semibold text-soft shadow-lg shadow-black/10">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_14px_rgba(34,197,139,.7)]" />
            Now booking select projects
          </div>
          <h1 className="max-w-[720px] font-display text-[clamp(2.7rem,6vw,5.7rem)] font-extrabold leading-[.96] tracking-[-.065em] text-copy">
            Websites built to turn visitors into <span className="text-gradient">customers.</span>
          </h1>
          <p className="mt-7 max-w-[630px] text-lg leading-8 text-soft md:text-xl">
            VantexWeb designs sharp, conversion-focused websites for businesses ready to look more credible, explain their value clearly, and win more qualified leads.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="button">Get Your Free Website Plan <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#work" className="button-secondary">View Our Work</a>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted"><Check className="mt-0.5 shrink-0 text-success" size={17} aria-hidden="true" /> Fast turnaround. Conversion-focused design. Built for real business growth.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[610px] animate-in [animation-delay:140ms]" aria-label="VantexWeb website design preview">
          <div className="browser-frame float-panel">
            <div className="flex h-11 items-center gap-2 border-b border-line px-4"><i/><i/><i/><span className="ml-3 h-5 flex-1 rounded-md bg-ink/70" /></div>
            <div className="grid min-h-[380px] grid-cols-[76px_1fr] md:min-h-[440px] md:grid-cols-[112px_1fr]">
              <div className="border-r border-line bg-ink/60 p-3 md:p-4">
                <div className="mb-7 h-5 rounded bg-brand/50"/><div className="space-y-3">{[1,2,3,4].map(i => <div key={i} className="h-2 rounded bg-line"/>)}</div>
              </div>
              <div className="relative overflow-hidden p-5 md:p-8">
                <div className="absolute right-[-12%] top-[-16%] h-48 w-48 rounded-full bg-brand/10 blur-3xl"/>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-cyan">Built for growth</p>
                <div className="h-7 w-5/6 rounded-md bg-copy/90 md:h-10"/><div className="mt-3 h-7 w-3/5 rounded-md bg-copy/90 md:h-10"/>
                <div className="mt-5 h-2 w-11/12 rounded bg-soft/30"/><div className="mt-2 h-2 w-8/12 rounded bg-soft/20"/>
                <div className="mt-7 flex gap-3"><div className="h-10 w-32 rounded-lg bg-gradient-to-r from-brand to-cyan"/><div className="h-10 w-24 rounded-lg border border-line"/></div>
                <div className="mt-10 grid grid-cols-3 gap-3">{["01","02","03"].map((n) => <div key={n} className="rounded-xl border border-line bg-panel p-3 md:p-4"><span className="text-xs font-bold text-brand">{n}</span><div className="mt-3 h-2 rounded bg-soft/25"/><div className="mt-2 h-2 w-2/3 rounded bg-soft/15"/></div>)}</div>
              </div>
            </div>
          </div>
          <div className="floating-card left-[-12px] top-[42%] md:left-[-50px]"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success"><TrendingUp size={18}/></div><div><strong>Clear path to action</strong><span>Designed to convert</span></div></div>
          <div className="floating-card bottom-[-25px] right-[-8px] [animation-delay:-2s] md:right-[-30px]"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand"><MousePointer2 size={18}/></div><div><strong>Lead captured</strong><span>Quote request received</span></div></div>
        </div>
      </div>
    </section>
  );
}

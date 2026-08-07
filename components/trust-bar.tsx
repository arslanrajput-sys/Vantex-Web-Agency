import { Gauge, LayoutTemplate, Search, Smartphone, Target } from "lucide-react";

const items = [[Target,"Conversion-focused"],[Smartphone,"Mobile-first"],[Search,"SEO-ready"],[Gauge,"Fast loading"],[LayoutTemplate,"Built for service businesses"]] as const;

export function TrustBar() {
  return <div className="trust-deck border-y border-line/80 bg-panel/55"><div className="shell grid grid-cols-2 gap-y-5 py-6 md:grid-cols-5">{items.map(([Icon,label], i) => <div key={label} className={`trust-item flex items-center gap-2.5 px-3 text-sm font-semibold text-soft md:justify-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`} style={{"--trust-delay":`${i*90}ms`} as React.CSSProperties}><span><Icon size={17} aria-hidden="true"/></span>{label}</div>)}</div></div>;
}

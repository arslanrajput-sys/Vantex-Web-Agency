const items = ["Conversion-focused", "Mobile-first", "SEO-ready", "Fast loading", "Built for service businesses"] as const;

export function TrustBar() {
  return <div className="trust-deck"><div className="shell trust-list">{items.map((label, index) => <div key={label} className="trust-item"><span>{String(index + 1).padStart(2,"0")}</span>{label}</div>)}</div></div>;
}

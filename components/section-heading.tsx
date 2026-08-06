export function SectionHeading({ label, title, copy, align = "left" }: { label: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}><p className="section-label">{label}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

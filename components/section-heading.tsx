export function SectionHeading({ label, title, copy, align = "left" }: { label: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`} data-section={label}><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

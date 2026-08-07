import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="brand-logo group inline-flex items-center gap-2.5" aria-label="VantexWeb home">
      <Image className="brand-mark" src="/logo.svg" alt="" width={footer ? 45 : 48} height={footer ? 42 : 45} priority={!footer} />
      <span className="font-display text-[19px] font-extrabold tracking-[-0.045em] text-copy">
        Vantex<span className="text-gradient">Web</span>
      </span>
    </a>
  );
}

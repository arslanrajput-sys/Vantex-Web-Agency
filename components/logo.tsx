import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="VantexWeb home">
      <Image src="/logo.svg" alt="" width={footer ? 38 : 42} height={footer ? 38 : 42} priority={!footer} />
      <span className="font-display text-lg font-extrabold tracking-[-0.035em] text-copy">
        Vantex<span className="text-gradient">Web</span>
      </span>
    </a>
  );
}

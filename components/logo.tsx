import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="brand-logo group inline-flex items-center gap-[5px]" aria-label="VantexWeb home">
      <Image className={footer ? "brand-mark h-[30px] w-[32px]" : "brand-mark h-[32px] w-[34px]"} src="/logo.svg" alt="" width={footer ? 32 : 34} height={footer ? 30 : 32} priority={!footer} />
      <span className="font-display text-[19px] font-extrabold tracking-[-0.045em] text-copy">
        Vantex<span className="text-gradient">Web</span>
      </span>
    </a>
  );
}

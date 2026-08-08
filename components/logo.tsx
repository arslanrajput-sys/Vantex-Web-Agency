import Image from "next/image";
import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`brand-logo group inline-flex items-center ${footer ? "gap-[7px]" : "gap-[5px]"}`} aria-label="VantexWeb home">
      <Image className={footer ? "brand-mark h-[90px] w-[96px]" : "brand-mark h-[76px] w-[81px]"} src="/logo.svg" alt="" width={footer ? 96 : 81} height={footer ? 90 : 76} priority={!footer} />
      <span className={`font-display font-extrabold tracking-[-0.045em] text-copy ${footer ? "text-[25px]" : "text-[21px]"}`}>
        Vantex<span className="text-gradient">Web</span>
      </span>
    </Link>
  );
}

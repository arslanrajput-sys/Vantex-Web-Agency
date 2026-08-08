import Image from "next/image";
import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand-logo ${footer?"brand-logo-footer":""}`} aria-label="VantexWeb home"><Image className="brand-mark" src="/logo.svg" alt="" width={footer?82:64} height={footer?76:59} priority={!footer}/><span>Vantex<span className="text-gradient">Web</span></span></Link>;
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const hash = window.location.hash;
    const timer = window.setTimeout(() => {
      if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      else document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "auto", block: "start" });
    }, 40);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

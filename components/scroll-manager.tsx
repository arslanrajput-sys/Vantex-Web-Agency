"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 92;

export function ScrollManager() {
  const pathname = usePathname();
  const animationFrame = useRef(0);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cancelScroll = () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      animationFrame.current = 0;
    };
    const animateTo = (destination: number) => {
      cancelScroll();
      const start = window.scrollY;
      const distance = destination - start;
      if (reducedMotion || Math.abs(distance) < 2) {
        window.scrollTo({ top: destination, left: 0, behavior: "auto" });
        return;
      }

      const startedAt = performance.now();
      const duration = Math.min(900, Math.max(460, Math.abs(distance) * 0.32));
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) animationFrame.current = requestAnimationFrame(tick);
        else animationFrame.current = 0;
      };
      animationFrame.current = requestAnimationFrame(tick);
    };
    const documentTop = (element: HTMLElement) => {
      let top = 0;
      let current: HTMLElement | null = element;
      while (current) {
        top += current.offsetTop;
        current = current.offsetParent as HTMLElement | null;
      }
      return top;
    };
    const scrollToHash = (hash: string) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const target = id ? document.getElementById(id) : null;
      if (!target) return false;
      const destination = Math.max(0, documentTop(target) - (id === "top" ? 0 : HEADER_OFFSET));
      animateTo(destination);
      return true;
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const origin = event.target as Element | null;
      const anchor = origin?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search) return;

      if (destination.hash) {
        if (!scrollToHash(destination.hash)) return;
        event.preventDefault();
        window.history.pushState(window.history.state, "", destination.hash);
      } else {
        event.preventDefault();
        window.history.pushState(window.history.state, "", destination.pathname + destination.search);
        animateTo(0);
      }
    };
    const onHistoryChange = () => {
      requestAnimationFrame(() => {
        if (!window.location.hash || !scrollToHash(window.location.hash)) animateTo(0);
      });
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("pointerdown", cancelScroll, { passive: true });
    window.addEventListener("keydown", cancelScroll);
    window.addEventListener("popstate", onHistoryChange);
    return () => {
      cancelScroll();
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("pointerdown", cancelScroll);
      window.removeEventListener("keydown", cancelScroll);
      window.removeEventListener("popstate", onHistoryChange);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const forceTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (!hash) {
      forceTop();
      const frame = requestAnimationFrame(forceTop);
      const timer = window.setTimeout(forceTop, 80);
      return () => {
        cancelAnimationFrame(frame);
        window.clearTimeout(timer);
      };
    }

    const timer = window.setTimeout(() => {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);
      if (!target) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

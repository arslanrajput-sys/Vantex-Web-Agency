"use client";

import { useEffect, useRef } from "react";

export function MotionSystem() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll<HTMLElement>(
      "main section .section-label, main section .section-title, main section .section-copy, main section article, .audit-card, .comparison-panel, .analytics, .contact-card, .final-cta, [data-reveal]"
    );

    revealTargets.forEach((element, index) => {
      element.dataset.reveal = element.dataset.reveal || "up";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    });

    if (reduced) {
      revealTargets.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7%" }
    );
    revealTargets.forEach((element) => observer.observe(element));

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", `${max > 0 ? window.scrollY / max : 0}`);
        root.style.setProperty("--scroll-y", `${window.scrollY}px`);
        frame = 0;
      });
    };
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      if (glowRef.current) glowRef.current.dataset.visible = "true";
    };
    const hidePointer = () => { if (glowRef.current) glowRef.current.dataset.visible = "false"; };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", hidePointer);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("mouseleave", hidePointer);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <><div className="scroll-progress" aria-hidden="true"/><div ref={glowRef} className="cursor-aura" aria-hidden="true"/></>;
}

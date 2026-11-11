"use client";

import { useEffect } from "react";

export function RevealFallback() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (!CSS.supports("animation-timeline: scroll()")) {
      const fill = document.querySelector<HTMLElement>(
        ".scroll-progress__fill",
      );

      if (fill) {
        let frame = 0;

        const update = () => {
          frame = 0;
          const scrollable =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress =
            scrollable > 0 ? window.scrollY / scrollable : 0;
          fill.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
        };

        const onScroll = () => {
          if (!frame) {
            frame = window.requestAnimationFrame(update);
          }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
          if (frame) {
            window.cancelAnimationFrame(frame);
          }
        });
      }
    }

    if (CSS.supports("animation-timeline: view()")) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const root = document.documentElement;
    root.classList.add("reveal-fallback");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    document
      .querySelectorAll<HTMLElement>(".reveal, .section-heading")
      .forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-fallback");
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
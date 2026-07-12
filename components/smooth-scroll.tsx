"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SmoothScroll() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    sections.forEach(section => gsap.fromTo(section, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: section, scrub: .8, start: "top bottom", end: "bottom top" } }));
    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach(element => gsap.fromTo(element,
      { autoAlpha: 0, y: 42 },
      { autoAlpha: 1, y: 0, duration: .85, delay: Number(element.dataset.delay || 0), ease: "power4.out", scrollTrigger: { trigger: element, start: "top 92%", once: true } }
    ));
    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  });
  return null;
}

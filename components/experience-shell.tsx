"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ExperienceShell() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [finePointer, setFinePointer] = useState(false);
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 550, damping: 38, mass: .25 });
  const y = useSpring(my, { stiffness: 550, damping: 38, mass: .25 });

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFinePointer(matchMedia("(pointer: fine)").matches && !reduced);
  }, []);

  useEffect(() => {
    if (!finePointer) return;
    const move = (e: PointerEvent) => { mx.set(e.clientX - 4); my.set(e.clientY - 4); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [finePointer, mx, my]);

  return <>
    <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "0 50%" }} className="pointer-events-none fixed inset-x-0 top-0 z-[195] h-[2px] bg-signal" aria-hidden="true"/>
    <AnimatePresence mode="wait"><motion.div key={pathname} className="pointer-events-none fixed left-0 top-0 z-[190] h-1 bg-signal" initial={{ width: "0%" }} animate={{ width: "0%" }} exit={{ width: "100%" }}/></AnimatePresence>
    {finePointer && <motion.span style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[180] h-2 w-2 rounded-full bg-signal mix-blend-difference"/>}
  </>;
}

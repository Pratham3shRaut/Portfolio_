"use client";

import { useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

export function Hero() {
  const [hasPortrait, setHasPortrait] = useState(true);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 70, damping: 18 }), y = useSpring(my, { stiffness: 70, damping: 18 });
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 700], [0, 105]);
  const titleOpacity = useTransform(scrollY, [0, 620], [1, .22]);
  return <section onPointerMove={e => { mx.set((e.clientX / innerWidth - .5) * 36); my.set((e.clientY / innerHeight - .5) * 24); }} className="relative flex min-h-[94svh] items-end overflow-hidden pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-36">
    <div className="noise pointer-events-none absolute inset-0 opacity-[.025]"/>
    <motion.div style={{ x, y }} className="pointer-events-none absolute right-[-11rem] top-[62%] hidden h-[15rem] w-[15rem] -translate-y-1/2 rounded-full border border-signal/40 opacity-70 sm:block sm:h-[18rem] sm:w-[18rem] lg:right-[6%] lg:top-[18%] lg:h-[26rem] lg:w-[26rem] lg:translate-y-0 xl:right-[4%] xl:h-[34rem] xl:w-[34rem]">
      {hasPortrait ? (
        <div className="absolute left-1/2 top-1/2 h-[73%] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-canvas p-3 shadow-2xl ring-1 ring-ink/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.jpg" alt="Prathamesh Raut" width={416} height={416} onError={() => setHasPortrait(false)} className="h-full w-full rounded-full object-cover" />
        </div>
      ) : (
        <>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, ease: "linear", repeat: Infinity }} className="absolute inset-[18%] rounded-full border border-dashed border-ink/20"/>
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_30px_rgba(255,90,54,.65)]"/>
          <div className="absolute left-1/2 top-0 h-1/2 border-l border-ink/15"/>
        </>
      )}
    </motion.div>
    <div className="frame relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }} className="mb-8 flex items-center justify-between gap-3">
        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em]"><span className="relative h-2 w-2 rounded-full bg-[#21a179] before:absolute before:inset-[-4px] before:animate-ping before:rounded-full before:border before:border-[#21a179]"/>Full Stack Developer · Pune</span>
        {hasPortrait && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src="/hero.jpg" alt="Prathamesh Raut" width={44} height={44} onError={() => setHasPortrait(false)} className="h-11 w-11 shrink-0 rounded-full border hairline object-cover shadow-md sm:hidden" />
        )}
      </motion.div>
      <motion.h1 style={{ y: titleY, opacity: titleOpacity }} className="balance max-w-[1280px] font-display text-[clamp(4rem,10vw,9.6rem)] font-semibold leading-[.84] tracking-[-.072em]">
        <span className="hero-mask inline-block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .08, duration: .9, ease: [.16,1,.3,1] }} className="hero-line inline-block">I build scalable</motion.span></span><br className="hidden sm:block"/>
        <span className="hero-mask inline-block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .16, duration: .9, ease: [.16,1,.3,1] }} className="hero-line inline-block"> products, <em className="font-medium not-italic text-signal">end to end.</em></motion.span></span>
      </motion.h1>
      <div className="mt-10">
        <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">Full Stack Developer working across React, TypeScript, Node.js, Java, FastAPI, SQL, Docker, and modern CI/CD workflows.</p>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 hidden h-12 w-px overflow-hidden bg-ink/15 md:block"><motion.span className="block h-1/2 w-full bg-ink" animate={{ y: ["-100%", "220%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}/></div>
  </section>;
}

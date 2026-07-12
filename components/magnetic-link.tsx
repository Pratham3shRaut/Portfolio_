"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Arrow } from "./icons";

export function MagneticLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 15 }), y = useSpring(my, { stiffness: 180, damping: 15 });
  return <motion.a style={{ x, y }} href={href} onPointerMove={e => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX-r.left-r.width/2)*.18); my.set((e.clientY-r.top-r.height/2)*.18); }} onPointerLeave={() => { mx.set(0); my.set(0); }} className={`premium-link group inline-flex items-center gap-4 rounded-full border px-6 py-3 text-sm ${dark ? "border-canvas/30" : "hairline"}`}><span>{children}</span><Arrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"/></motion.a>;
}

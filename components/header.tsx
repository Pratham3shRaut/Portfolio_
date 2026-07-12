"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Mark } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const links = [{ label: "Work", href: "/#work" }, { label: "Skills", href: "/#skills" }, { label: "Experience", href: "/#experience" }];

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", latest => { const previous = scrollY.getPrevious() ?? 0; setCompact(latest > 40); setVisible(latest < previous || latest < 120); });
  return <motion.header animate={{ y: visible ? 0 : -90 }} transition={{ duration: .45, ease: [.22,1,.36,1] }} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${compact ? "border-b hairline bg-canvas/80 backdrop-blur-xl" : "bg-transparent"}`}>
    <div className={`frame flex items-center justify-between transition-[height] duration-500 ${compact ? "h-[64px]" : "h-[82px]"}`}>
      <Link href="/" aria-label="Home" className="relative z-50 transition-transform duration-500 hover:rotate-[-8deg] hover:scale-110"><Mark /></Link>
      <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
        {links.map(link => <Link className="relative py-2 transition hover:text-signal after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-signal after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100" key={link.href} href={link.href}>{link.label}</Link>)}
        <a href={`mailto:${site.email}`} className="premium-link z-0 rounded-full bg-ink px-5 py-2.5 text-canvas">Let’s talk</a>
        <ThemeToggle />
      </nav>
      <button className="relative z-50 grid h-10 w-10 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .75, ease: [.76,0,.24,1] }} className="fixed inset-0 z-40 flex min-h-screen flex-col justify-center bg-canvas px-6 md:hidden" aria-label="Mobile navigation">
      {links.map((link, i) => <motion.div key={link.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 + i * .08 }}><Link onClick={() => setOpen(false)} href={link.href} className="flex items-center justify-between border-b hairline py-5 font-display text-5xl tracking-[-.05em]"><span>{link.label}</span><span className="font-mono text-xs text-muted">0{i+1}</span></Link></motion.div>)}
      <div className="mt-8 flex items-center justify-between"><a href={`mailto:${site.email}`} className="font-mono text-xs uppercase tracking-wider">{site.email}</a><ThemeToggle/></div>
    </motion.nav>}</AnimatePresence>
  </motion.header>;
}

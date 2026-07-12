"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="h-10 w-10" />;
  const dark = resolvedTheme === "dark";
  return <button onClick={() => setTheme(dark ? "light" : "dark")} className="group grid h-10 w-10 place-items-center rounded-full border hairline transition duration-500 hover:rotate-12 hover:bg-ink hover:text-canvas" aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
    <AnimatePresence mode="wait" initial={false}>{dark ? <motion.span key="sun" initial={{ opacity: 0, rotate: -60, scale: .5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 60, scale: .5 }} transition={{ duration: .25 }}><Sun size={17}/></motion.span> : <motion.span key="moon" initial={{ opacity: 0, rotate: -60, scale: .5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 60, scale: .5 }} transition={{ duration: .25 }}><Moon size={17}/></motion.span>}</AnimatePresence>
  </button>;
}

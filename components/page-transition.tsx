"use client";
import { motion } from "framer-motion";
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}>{children}</motion.main>;
}

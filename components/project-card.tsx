"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";
import { Arrow } from "./icons";
import { ProjectVisual } from "./project-visual";
import type { CSSProperties } from "react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const px = useMotionValue(.5), py = useMotionValue(.5);
  const sx = useSpring(px, { stiffness: 90, damping: 20 }), sy = useSpring(py, { stiffness: 90, damping: 20 });
  const rotateX = useTransform(sy, [0, 1], [2.5, -2.5]);
  const rotateY = useTransform(sx, [0, 1], [-2.5, 2.5]);
  return <Link href={`/work/${project.slug}`} style={{ "--project-accent": project.accent } as CSSProperties} className="project-group group block" onPointerMove={e => { const r=e.currentTarget.getBoundingClientRect(); px.set((e.clientX-r.left)/r.width); py.set((e.clientY-r.top)/r.height); }} onPointerLeave={() => { px.set(.5); py.set(.5); }}>
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
      <motion.div style={{ rotateX, rotateY, transformPerspective: 1200 }} className={`lg:col-span-8 ${index % 2 ? "lg:order-2" : ""}`}><ProjectVisual project={project}/></motion.div>
      <div className="lg:col-span-4">
        <div className="mb-12 flex justify-between font-mono text-[10px] uppercase tracking-[.15em] text-muted"><span>{project.number} / 03</span><span>{project.year}</span></div>
        <p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">{project.eyebrow}</p>
        <h3 className="project-title mt-4 font-display text-5xl tracking-[-.055em] md:text-6xl">{project.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-8 border-t hairline pt-5 text-sm"><span className="text-muted">Outcome · </span>{project.outcome}</p>
        <span className="premium-link mt-7 inline-flex items-center gap-3 rounded-full border hairline px-5 py-2.5 text-sm">View case study <Arrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"/></span>
      </div>
    </div>
  </Link>;
}

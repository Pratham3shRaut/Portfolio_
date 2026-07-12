"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";

function MockArt({ project }: { project: Project }) {
  const type = project.number;
  return <>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
    {type === "01" && <><div className="absolute left-[8%] top-[11%] h-[78%] w-[84%] rotate-[-2deg] rounded-xl bg-[#191a19] p-[5%] shadow-2xl"><div className="flex h-full gap-[4%]"><div className="w-[21%] rounded-md bg-white/5"/><div className="flex-1"><div className="h-[8%] w-[42%] rounded-full bg-white/20"/><div className="mt-[7%] flex h-[36%] items-end gap-[3%]">{[35,58,45,76,62,88,70].map((h,i)=><span key={i} className="flex-1 rounded-t-sm bg-[#ff5a36]" style={{height:`${h}%`}}/>)}</div><div className="mt-[8%] grid grid-cols-3 gap-[3%]">{[1,2,3].map(i=><div key={i} className="aspect-[1.7] rounded-md bg-white/10"/>)}</div></div></div></div></>}
    {type === "02" && <><div className="absolute left-[11%] top-[9%] h-[82%] w-[78%] rounded-[2rem] bg-[#f8f6f0] p-[6%] shadow-2xl"><div className="flex items-center justify-between"><div className="h-3 w-24 rounded-full bg-[#4967ff]"/><div className="h-8 w-8 rounded-full bg-[#ffd9c9]"/></div><div className="mt-[12%] h-5 w-[62%] rounded-full bg-[#202220]"/><div className="mt-[5%] h-3 w-[80%] rounded-full bg-black/10"/><div className="mt-[12%] grid grid-cols-2 gap-4"><div className="aspect-square rounded-2xl bg-[#dce2ff]"/><div className="space-y-3">{[1,2,3,4].map(i=><div key={i} className="h-9 rounded-lg bg-black/5"/>)}</div></div></div></>}
    {type === "03" && <><div className="absolute left-[10%] top-[12%] w-[80%] rounded-xl bg-[#121312] p-[6%] font-mono text-[clamp(8px,1.2vw,16px)] text-white shadow-2xl"><p className="text-[#77d9b4]">form.create&#40;&#123;</p><p className="pl-[8%] text-white/60">schema: checkoutSchema,</p><p className="pl-[8%] text-white/60">mode: <span className="text-[#f8c36a]">&quot;accessible&quot;</span>,</p><p className="text-[#77d9b4]">&#125;&#41;</p><div className="mt-[8%] border-t border-white/15 pt-[7%]"><div className="h-8 rounded border border-white/20"/><div className="mt-4 h-8 rounded border border-white/20"/><div className="mt-4 h-9 w-1/3 rounded bg-[#21a179]"/></div></div></>}
  </>;
}

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const aspect = compact ? "aspect-[4/3]" : "aspect-[16/10]";
  const src = project.image || (project.live ? `https://api.microlink.io/?url=${encodeURIComponent(project.live)}&screenshot=true&meta=false&embed=screenshot.url&waitFor=1200&viewport.width=1600&viewport.height=1000` : null);
  const [failed, setFailed] = useState(false);

  return <div style={{ backgroundColor: project.accent }} className={`project-art relative overflow-hidden rounded-[1.25rem] ${aspect}`} aria-hidden="true">
    {src && !failed ? (
      <div className="group/visual absolute inset-[6%] overflow-hidden rounded-lg bg-[#17181a] shadow-2xl">
        <div className="flex h-[7%] items-center gap-1.5 bg-[#232426] px-[3%]"><span className="h-2 w-2 rounded-full bg-[#ff5f57]"/><span className="h-2 w-2 rounded-full bg-[#febc2e]"/><span className="h-2 w-2 rounded-full bg-[#28c840]"/></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${project.title} preview`} loading="lazy" decoding="async" onError={() => setFailed(true)} className="h-[93%] w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover/visual:scale-[1.03]" />
      </div>
    ) : <MockArt project={project} />}
  </div>;
}

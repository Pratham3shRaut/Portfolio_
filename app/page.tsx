import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { ProjectArchive } from "@/components/project-archive";
import { Reveal } from "@/components/reveal";
import { certifications, education, experience, principles, projects, skillGroups } from "@/lib/data";

const facts = [
  ["Base", "Pune, Maharashtra"], ["Focus", "Full-stack engineering"],
  ["Experience", "1+ year building"], ["Current", "Associate Developer · Chistats"],
];

export default function Home() {
  return <PageTransition><div id="content"><Hero/>
    <section className="border-y hairline py-8"><div className="frame grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">{facts.map(([label,value])=><div key={label}><span className="block font-mono text-[10px] uppercase tracking-wider text-muted">{label}</span>{value}</div>)}</div></section>

    <section id="work" className="py-28 md:py-48"><div className="frame">
      <Reveal className="mb-16 flex items-end justify-between border-b hairline pb-6"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">Selected work · 2025</p><h2 className="mt-4 font-display text-5xl tracking-[-.045em] md:text-7xl">Built to solve.</h2></div><span className="hidden font-mono text-xs md:block">03 projects</span></Reveal>
      <div className="space-y-28 md:space-y-52">{projects.map((project,index)=><Reveal key={project.slug}><ProjectCard project={project} index={index}/></Reveal>)}</div>
    </div></section>

    <ProjectArchive/>

    <section className="overflow-hidden border-y hairline py-7" aria-label="Technical capabilities"><div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-10 whitespace-nowrap font-display text-4xl font-medium tracking-[-.045em] text-outline md:text-6xl">{["React + TypeScript","Spring Boot","Node + FastAPI","PostgreSQL","Docker + CI/CD","React + TypeScript","Spring Boot"].map((item,i)=><span className="flex items-center gap-10" key={`${item}-${i}`}>{item}<i className="h-2.5 w-2.5 rounded-full bg-signal"/></span>)}</div></section>

    <section id="about" className="relative overflow-hidden bg-ink py-28 text-canvas md:py-48"><div className="noise pointer-events-none absolute inset-0 opacity-[.035]"/><div className="frame relative">
      <div className="grid gap-16 lg:grid-cols-12"><Reveal className="lg:col-span-4"><p className="font-mono text-xs uppercase tracking-[.18em] text-canvas/50">How I work</p></Reveal><Reveal className="lg:col-span-8"><h2 className="balance font-display text-5xl leading-[1.02] tracking-[-.055em] md:text-7xl">Clean interfaces above. Dependable architecture underneath.</h2></Reveal></div>
      <div className="mt-24 grid gap-px bg-white/15 md:grid-cols-3">{principles.map(p=><Reveal key={p.number} className="group relative overflow-hidden bg-ink p-8 transition-colors duration-700 hover:bg-canvas hover:text-ink md:p-10"><span className="font-mono text-xs text-signal">{p.number}</span><h3 className="mt-16 font-display text-3xl tracking-[-.035em] transition-transform duration-700 group-hover:-translate-y-2">{p.title}</h3><p className="mt-5 leading-relaxed text-canvas/60 transition-colors duration-500 group-hover:text-muted">{p.body}</p><span className="absolute -bottom-10 -right-6 font-display text-[10rem] leading-none text-white/[.025] transition-all duration-700 group-hover:-translate-x-3 group-hover:text-ink/[.04]">{p.number}</span></Reveal>)}</div>
    </div></section>

    <section id="skills" className="py-28 md:py-44"><div className="frame"><div className="grid gap-16 lg:grid-cols-12"><div className="lg:col-span-4"><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">Technical toolkit</p><h2 className="mt-5 font-display text-5xl tracking-[-.05em]">Across the stack.</h2></div><div className="lg:col-span-8">{skillGroups.map(group=><Reveal key={group.label} className="grid gap-4 border-t hairline py-7 md:grid-cols-[140px_1fr]"><h3 className="font-mono text-xs uppercase text-muted">{group.label}</h3><div className="flex flex-wrap gap-x-5 gap-y-2">{group.items.map(item=><span key={item} className="font-display text-xl tracking-[-.025em] md:text-2xl">{item}</span>)}</div></Reveal>)}</div></div></div></section>

    <section id="experience" className="bg-surface py-28 md:py-44"><div className="frame"><div className="grid gap-16 lg:grid-cols-12"><div className="lg:col-span-4"><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">Experience</p><h2 className="mt-5 font-display text-5xl tracking-[-.045em]">A growing trajectory.</h2></div><div className="lg:col-span-8">{experience.map(item=><Reveal key={item.period} className="group grid gap-4 border-t hairline py-8 transition-[padding,background-color] duration-500 hover:bg-canvas/60 hover:px-4 md:grid-cols-[150px_1fr] md:py-10"><p className="font-mono text-xs text-muted">{item.period}</p><div><h3 className="font-display text-2xl">{item.role} <span className="text-muted">· {item.company}</span></h3><p className="mt-3 max-w-xl leading-relaxed text-muted">{item.detail}</p></div></Reveal>)}</div></div></div></section>

    <section className="py-28 md:py-44"><div className="frame grid gap-20 lg:grid-cols-2"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">Education</p><div className="mt-8">{education.map(item=><Reveal key={item.period} className="border-t hairline py-7"><p className="font-mono text-xs text-muted">{item.period}</p><h3 className="mt-3 font-display text-2xl">{item.qualification}</h3><p className="mt-2 text-muted">{item.school} · {item.detail}</p></Reveal>)}</div></div><div><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">Training & certification</p><div className="mt-8">{certifications.map((item,i)=><Reveal key={item} className="grid grid-cols-[40px_1fr] border-t hairline py-7"><span className="font-mono text-xs text-signal">0{i+1}</span><p className="leading-relaxed text-muted">{item}</p></Reveal>)}</div></div></div></section>
    <Footer/>
  </div></PageTransition>;
}

import { Arrow } from "./icons";
import { moreProjects } from "@/lib/data";

export function ProjectArchive() {
  return <section className="border-t hairline py-28 md:py-44"><div className="frame">
    <div className="mb-14 flex items-end justify-between"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">More from GitHub</p><h2 className="mt-4 font-display text-5xl tracking-[-.05em] md:text-7xl">Experiments & builds.</h2></div><a href="https://github.com/Pratham3shRaut?tab=repositories" target="_blank" rel="noreferrer" className="hidden border-b border-ink pb-1 text-sm transition hover:text-signal md:block">View all repositories ↗</a></div>
    <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">{moreProjects.map((project,index)=><article className="group" key={project.title}>
      <a href={"live" in project ? project.live : project.code} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl border hairline bg-surface"><div className="relative aspect-[16/9] overflow-hidden"><img src={project.image} alt={`${project.title} repository preview`} width="1280" height="640" loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-700 ease-smooth group-hover:scale-[1.035]"/><span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-canvas text-ink shadow-lg transition duration-500 group-hover:-rotate-12 group-hover:bg-signal group-hover:text-white"><Arrow className="h-5 w-5 -rotate-45"/></span></div></a>
      <div className="mt-5 flex items-start justify-between gap-6"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-muted">0{index+1} · {project.stack.join(" · ")}</p><h3 className="mt-3 font-display text-3xl tracking-[-.04em] transition-colors group-hover:text-signal">{project.title}</h3><p className="mt-3 max-w-xl leading-relaxed text-muted">{project.description}</p></div><a href={project.code} target="_blank" rel="noreferrer" className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-ink">Code ↗</a></div>
    </article>)}</div>
  </div></section>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Arrow } from "@/components/icons";
import { PageTransition } from "@/components/page-transition";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = projects.find(x => x.slug === slug); return p ? { title: p.title, description: p.summary } : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug); if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <PageTransition><div id="content" className="pt-36"><article>
    <header className="frame pb-16 md:pb-24"><p className="font-mono text-xs uppercase tracking-[.18em] text-muted">{project.eyebrow} · {project.year}</p><h1 className="mt-8 max-w-6xl font-display text-[clamp(4rem,10vw,9rem)] leading-[.88] tracking-[-.065em]">{project.title}</h1><div className="mt-12 grid gap-8 border-t hairline pt-8 md:grid-cols-3"><div className="md:col-span-2"><p className="text-xl">{project.summary}</p>{(project.live || project.code) && <div className="mt-7 flex flex-wrap gap-5 text-sm">{project.live && <a className="border-b border-ink pb-1 hover:text-signal" href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}{project.code && <a className="border-b border-ink pb-1 hover:text-signal" href={project.code} target="_blank" rel="noreferrer">Source code ↗</a>}</div>}</div><div className="text-sm"><p><span className="text-muted">Role · </span>{project.role}</p><p className="mt-2"><span className="text-muted">Stack · </span>{project.stack.join(", ")}</p></div></div></header>
    <div className="frame"><ProjectVisual project={project}/></div>
    <div className="frame py-28 md:py-44"><div className="mx-auto max-w-5xl space-y-28"><Reveal className="grid gap-8 md:grid-cols-3"><p className="font-mono text-xs uppercase text-muted">01 · The challenge</p><p className="text-2xl leading-relaxed md:col-span-2 md:text-3xl">{project.challenge}</p></Reveal><Reveal className="grid gap-8 md:grid-cols-3"><p className="font-mono text-xs uppercase text-muted">02 · The response</p><p className="text-2xl leading-relaxed md:col-span-2 md:text-3xl">{project.solution}</p></Reveal><Reveal><div style={{backgroundColor:project.accent}} className="rounded-2xl p-8 text-white md:p-14"><p className="font-mono text-xs uppercase tracking-[.15em] text-white/70">03 · What I built</p><div className="mt-12 grid gap-8 md:grid-cols-3">{project.impact.map((item,i)=><div key={item} className="border-t border-white/30 pt-5"><span className="font-mono text-xs text-white/60">0{i+1}</span><p className="mt-5 font-display text-3xl">{item}</p></div>)}</div></div></Reveal></div></div>
    <Link href={`/work/${next.slug}`} className="group block border-t hairline py-20 md:py-28"><div className="frame flex items-end justify-between"><div><p className="font-mono text-xs uppercase text-muted">Next case study</p><h2 className="mt-5 font-display text-5xl tracking-[-.05em] md:text-8xl">{next.title}</h2></div><Arrow className="hidden h-16 w-16 transition-transform group-hover:translate-x-4 md:block"/></div></Link>
  </article><Footer/></div></PageTransition>;
}

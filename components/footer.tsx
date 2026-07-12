import Link from "next/link";
import { Arrow } from "./icons";
import { LocalTime } from "./local-time";
import { site } from "@/lib/site";

export function Footer() {
  return <footer id="contact" className="bg-ink py-20 text-canvas md:py-28">
    <div className="frame">
      <p className="font-mono text-xs uppercase tracking-[.18em] text-canvas/60">Have a difficult product problem?</p>
      <a href={`mailto:${site.email}`} className="group mt-7 flex items-end justify-between border-b border-canvas/30 pb-8">
        <span className="max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] leading-[.9] tracking-[-.055em]">Let’s make it clear.</span>
        <Arrow className="mb-2 hidden h-14 w-14 transition-transform duration-500 group-hover:translate-x-3 md:block" />
      </a>
      <div className="mt-12 flex flex-col justify-between gap-8 text-sm text-canvas/60 md:flex-row md:items-end">
        <div><p className="text-canvas">{site.fullName} · {site.role}</p><p className="mt-1">{site.location} · <LocalTime/> · Available worldwide</p></div>
        <div className="flex flex-wrap gap-6"><a className="transition hover:-translate-y-0.5 hover:text-signal" href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a><a className="transition hover:-translate-y-0.5 hover:text-signal" href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><Link className="transition hover:-translate-y-0.5 hover:text-signal" href="/Prathamesh_Raut_Resume.pdf" target="_blank">Résumé</Link></div>
        <p>Designed & built with intention · © {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>;
}

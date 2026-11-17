import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { FdeProject } from "../data/projects";

/** 界面截图（带窗口栏） */
export function ShotFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#eceae4] ${className}`}>
      <div className="flex h-6 items-center gap-1.5 border-b border-black/[0.06] bg-white px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <img src={src} alt={alt} width={1440} height={900} loading="lazy" className="block w-full object-cover object-top" style={{ aspectRatio: "16 / 10" }} />
    </div>
  );
}

export default function ProjectCard({ p }: { p: FdeProject }) {
  return (
    <Link to={`/work/fde/${p.slug}`} className="work-card group flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white transition-shadow duration-300 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.25)]">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
          <ShotFrame src={p.shots[0].src} alt={`${p.title} 界面`} />
        </div>
        <span className="absolute left-3 top-9 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">{p.industry}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400"><span className="font-display mr-2 text-[#d6b278]">{p.no}</span>{p.en}</p>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900 md:text-xl">{p.title}</h3>
          </div>
          <span className="work-arrow inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-neutral-700"><ArrowUpRight className="h-4 w-4" /></span>
        </div>
        <p className="mt-3 text-[14px] leading-7 text-neutral-600">{p.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.tags.map((t) => <span key={t} className="rounded-full bg-[#f3ede1] px-2.5 py-0.5 text-[12px] text-[#8a6d3f]">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}

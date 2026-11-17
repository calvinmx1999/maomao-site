import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import { ShotFrame } from "../components/ProjectCard";
import { getProject, projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

/** 三级标签：项目详情内的分段 */
const TABS = [
  { key: "overview", label: "概览" },
  { key: "flow", label: "流程" },
  { key: "design", label: "关键设计" },
  { key: "ui", label: "界面" },
] as const;
type TabKey = (typeof TABS)[number]["key"];

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);
  const [tab, setTab] = useState<TabKey>("overview");
  usePageMeta(p ? p.title : "作品", p?.tagline);
  if (!p) return <Navigate to="/work/fde" replace />;

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* 头部 */}
      <section className="pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <nav className="flex items-center gap-1.5 text-[13px] text-neutral-500" aria-label="面包屑">
            <Link to="/work/fde" className="inline-flex items-center gap-1 hover:text-neutral-900"><ArrowLeft className="h-3.5 w-3.5" />作品集</Link>
            <span>/</span><Link to="/work/fde" className="hover:text-neutral-900">AI 产品交付</Link>
            <span>/</span><span className="text-neutral-800">{p.title}</span>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400"><span className="font-display mr-2 text-2xl text-[#d6b278]">{p.no}</span>{p.en} · {p.industry}</p>
              <h1 className="font-display mt-3 text-4xl leading-tight text-neutral-900 md:text-[52px]">{p.title}</h1>
              <p className="mt-4 text-[17px] leading-8 text-neutral-700">{p.tagline}</p>
              <p className="mt-3 text-[13px] text-neutral-500">{p.form}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setTab("ui")} className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">
                  看界面 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:border-black/25">想要一套类似的</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-black/[0.07] shadow-[0_30px_70px_-35px_rgba(0,0,0,0.35)]">
              <ShotFrame src={p.shots[0].src} alt={p.shots[0].caption} />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {p.metrics.map((m) => (
              <div key={m.d} className="border-t border-black/[0.08] pt-4">
                <div className="font-display text-2xl text-neutral-900 md:text-3xl">{m.v}</div>
                <div className="mt-1 text-[13px] text-neutral-500">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三级标签条 */}
      <div className="sticky top-16 z-40 mt-12 border-y border-black/[0.06] bg-[#fafaf7]/90 backdrop-blur-md">
        <div className="no-scrollbar mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 md:px-8" role="tablist">
          {TABS.map((t) => (
            <button key={t.key} role="tab" aria-selected={tab === t.key} onClick={() => setTab(t.key)} className={`relative shrink-0 py-3.5 text-[14px] transition-colors ${tab === t.key ? "font-semibold text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}>
              {t.label}
              {tab === t.key && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#b07d3c]" />}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        {tab === "overview" && (
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal>
                <h2 className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">业务痛点</h2>
                <ul className="mt-4 space-y-3">
                  {p.pain.map((x, i) => (
                    <li key={i} className="flex gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 text-[15px] leading-7 text-neutral-700">
                      <span className="font-display text-xl text-[#e5d9c3]">0{i + 1}</span>{x}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-12 text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">解决方案</h2>
                <p className="mt-4 text-[15px] leading-8 text-neutral-700">{p.solution}</p>
              </Reveal>
            </div>
            <aside className="space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-black/[0.07] bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400">用户与角色</p>
                  <ul className="mt-3">
                    {p.users.map((u) => (
                      <li key={u.role} className="border-t border-black/[0.06] py-3 first:border-0">
                        <p className="text-[14px] font-semibold text-neutral-900">{u.role}</p>
                        <p className="mt-0.5 text-[13px] leading-6 text-neutral-500">{u.does}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="rounded-2xl bg-neutral-900 p-6 text-white">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400">我在项目中的角色</p>
                  <ul className="mt-3 space-y-2.5">
                    {p.myRole.map((r) => <li key={r} className="flex gap-2.5 text-[14px] leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-[#d6b278]" />{r}</li>)}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        )}

        {tab === "flow" && (
          <Reveal>
            <h2 className="font-display text-3xl text-neutral-900">业务主流程</h2>
            <p className="mt-2 text-[14px] text-neutral-500">从输入到交付结果，一条链跑通。</p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.flow.map((f, i) => (
                <li key={f} className="relative rounded-2xl border border-black/[0.07] bg-white p-6">
                  <span className="font-display text-4xl leading-none" style={{ color: i === p.flow.length - 1 ? "#b07d3c" : "#e5d9c3" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-4 text-[16px] font-semibold text-neutral-900">{f}</p>
                  {i < p.flow.length - 1 && <ArrowRight className="absolute right-5 top-6 h-4 w-4 text-neutral-300" />}
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        {tab === "design" && (
          <div className="grid gap-6 md:grid-cols-2">
            {p.designs.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-3xl border border-black/[0.07] bg-white p-7">
                  <span className="font-display text-3xl text-[#e5d9c3]">0{i + 1}</span>
                  <h3 className="mt-3 text-[19px] font-semibold text-neutral-900">{d.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-7 text-neutral-600">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === "ui" && (
          <div className="space-y-10">
            {p.shots.map((s, i) => (
              <Reveal key={s.src} delay={i * 60}>
                <figure>
                  <div className="overflow-hidden rounded-3xl border border-black/[0.08] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)]">
                    <ShotFrame src={s.src} alt={s.caption} />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-[14px] text-neutral-600"><span className="font-display text-[#d6b278]">0{i + 1}</span>{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
            <p className="text-[12px] text-neutral-400">界面均为演示数据。</p>
          </div>
        )}
      </section>

      {/* 下一个 */}
      <section className="border-t border-black/[0.06]">
        <Link to={`/work/fde/${next.slug}`} className="group mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-12 md:px-8">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400">下一个作品</p>
            <p className="font-display mt-2 text-2xl text-neutral-900 md:text-4xl">{next.title}</p>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all group-hover:bg-neutral-900 group-hover:text-white"><ArrowRight className="h-5 w-5" /></span>
        </Link>
      </section>
    </>
  );
}

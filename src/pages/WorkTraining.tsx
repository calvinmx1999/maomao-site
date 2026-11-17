import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Reveal from "../components/Reveal";
import { ShotFrame } from "../components/ProjectCard";
import { trainingTracks, featuredCourse, ipIncubation } from "../data/training";
import { usePageMeta } from "../hooks/usePageMeta";
import { WorkHeader } from "./WorkShared";

export default function WorkTraining() {
  usePageMeta("企业 AI 培训", "管理层工作坊、岗位实战营、落地陪跑，加老板 / 门店 IP 孵化。代表案例：圣象地板经销商 AI 获客实战营。");
  const [zoom, setZoom] = useState<string | null>(null);
  const c = featuredCourse;
  const ip = ipIncubation;

  return (
    <>
      <WorkHeader title="作品集" desc="企业 AI 转型与组织赋能：管理层工作坊、岗位实战营、落地陪跑，加老板 / 门店 IP 孵化。内部把成本降下来，外部把客源拉上来，做成一套团队自己能跑的能力。" />

      {/* 三类培训 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">Programs</p>
          <h2 className="font-display mt-3 text-3xl text-neutral-900 md:text-4xl">三类培训，按需组合</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trainingTracks.map((t, i) => (
            <Reveal key={t.no} delay={i * 80}>
              <div className="flex h-full flex-col rounded-[28px] border border-black/[0.07] bg-white p-7">
                <span className="font-display text-3xl text-[#d6b278]">{t.no}</span>
                <h3 className="mt-4 text-[18px] font-semibold text-neutral-900">{t.title}</h3>
                {/* flex-1 让标签行统一贴底，避免各卡片标签高低不齐 */}
                <p className="mt-3 flex-1 text-[14px] leading-7 text-neutral-600">{t.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span key={it} className="rounded-full bg-[#f3ede1] px-3 py-1 text-[12px] font-medium text-[#8a6d3f]">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 代表案例 */}
      <section className="border-t border-black/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">Case · {c.client}</p>
            <h2 className="font-display mt-3 text-3xl text-neutral-900 md:text-[42px] md:leading-tight">{c.title}</h2>
            <p className="mt-3 text-[14px] text-neutral-500">对象：{c.audience}</p>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-neutral-600">{c.summary}</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {c.modules.map((m, i) => (
              <Reveal key={m.t} delay={i * 60}>
                <div className="h-full rounded-2xl border border-black/[0.07] bg-[#fafaf7] p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[11px] font-semibold text-[#d6b278]">{i + 1}</span>
                    <span className="text-[15px] font-semibold text-neutral-900">{m.t}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-neutral-600">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-16 text-[18px] font-semibold text-neutral-900">课件节选</h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.slides.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) * 60}>
                <button type="button" onClick={() => setZoom(s.src)} className="group block w-full text-left" aria-label={`放大查看：${s.caption}`}>
                  <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-neutral-100">
                    <img src={s.src} alt={s.caption} loading="lazy" width={960} height={540} className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  {/* 固定两行高度，长短不同的图注不会把卡片底部撑得高低不齐 */}
                  <p className="mt-3 line-clamp-2 min-h-[2.5rem] text-[13px] leading-5 text-neutral-600">{s.caption}</p>
                </button>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 老板 / 门店 IP 孵化：与培训合成一个业务板块 */}
      <section className="border-t border-black/[0.06] bg-[#fafaf7]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">{ip.no} · {ip.en}</p>
            <h2 className="font-display mt-3 text-3xl text-neutral-900 md:text-[42px] md:leading-tight">{ip.title}</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-neutral-600">{ip.intro}</p>
          </Reveal>

          {/* 一条线：课上学会 → 做出内容 → 留在手里 */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ip.bridge.map((b, i) => (
              <Reveal key={b.t} delay={i * 70}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-black/[0.07] bg-white p-5">
                  <span className="font-display text-2xl leading-none text-[#d6b278]">0{i + 1}</span>
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-900">{b.t}</p>
                    <p className="mt-1.5 text-[13px] leading-6 text-neutral-600">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {ip.metrics.map((m) => (
                  <div key={m.d} className="rounded-2xl border border-black/[0.07] bg-white px-5 py-6">
                    <p className="font-display text-2xl text-neutral-900">{m.v}</p>
                    <p className="mt-1.5 text-[12.5px] leading-5 text-neutral-500">{m.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {ip.flow.map((f, i) => (
                  <span key={f} className="inline-flex items-center gap-1.5 rounded-full bg-[#f3ede1] px-3 py-1 text-[12px] font-medium text-[#8a6d3f]">
                    {i > 0 && <span className="text-[#b07d3c]">→</span>}{f}
                  </span>
                ))}
              </div>
            </div>
            <Reveal delay={80}>
              <figure className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_18px_50px_rgba(40,32,20,0.06)]">
                <ShotFrame src={ip.shot.src} alt={ip.shot.caption} />
                <figcaption className="border-t border-black/[0.06] px-5 py-3 text-[13px] text-neutral-500">{ip.shot.caption}</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-[28px] bg-neutral-900 p-8 text-white md:flex-row md:items-center">
              <div>
                <p className="text-[18px] font-semibold">想给团队办一场培训，或者把老板 IP 做起来？</p>
                <p className="mt-1.5 text-[14px] text-white/60">课程可按行业、岗位和时长定制；IP 孵化按品类切换，线上线下均可。</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#d6b278] px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-[#e5c58f]">
                聊聊需求 <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {zoom && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90" aria-label="关闭"><X className="h-5 w-5" /></button>
          <img src={zoom} alt="课件大图" className="max-h-[90vh] max-w-[95vw] rounded-xl" />
        </div>
      )}
    </>
  );
}

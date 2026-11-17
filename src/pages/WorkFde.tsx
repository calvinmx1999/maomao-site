import { useState } from "react";
import Reveal from "../components/Reveal";
import FilterChips from "../components/FilterChips";
import ProjectCard from "../components/ProjectCard";
import { industries, projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { WorkHeader } from "./WorkShared";

type Ind = (typeof industries)[number];

export default function WorkFde() {
  usePageMeta("AI 产品交付", "门窗报价系统、财务派单工作台、建材老板 IP 孵化、AI Score 商超巡检、销冠副驾销售智能体。");
  const [ind, setInd] = useState<Ind>("全部");
  const list = ind === "全部" ? projects : projects.filter((p) => p.industry === ind);
  const counts = Object.fromEntries(industries.map((k) => [k, k === "全部" ? projects.length : projects.filter((p) => p.industry === k).length])) as Record<Ind, number>;

  return (
    <>
      <WorkHeader title="作品集" desc="累计交付 10+ 个 AI 产品与系统。这里是其中可公开的精选案例。" />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <FilterChips options={industries} value={ind} onChange={setInd} counts={counts} />
            <p className="text-[13px] text-neutral-400">按行业筛选 · 点击卡片查看详情</p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-dashed border-black/15 px-7 py-6">
            <p className="text-[15px] text-neutral-700"><b className="font-display mr-1 text-2xl text-neutral-900">10+</b> 个已交付的 AI 产品，更多案例涉及客户信息，欢迎当面交流。</p>
            <a href="#contact" className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">约个时间聊</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

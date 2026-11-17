import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { ArrowRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import SubNav from "../components/SubNav";
import FilterChips from "../components/FilterChips";
import { aboutTabs, profile, skillGroups, timeline, toolStack, traits, type AboutTab } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";

const PageHero = ({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) => (
  <section className="pt-28 md:pt-32">
    <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
      <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">{eyebrow}</p>
      <h1 className="font-display mt-3 text-4xl text-neutral-900 md:text-[56px] md:leading-[1.1]">{title}</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-8 text-neutral-600">{desc}</p>
    </div>
  </section>
);

export default function About() {
  const { tab } = useParams();
  const valid = aboutTabs.some((t) => t.key === tab);
  usePageMeta(valid ? aboutTabs.find((t) => t.key === tab)!.label : "关于我");
  if (!valid) return <Navigate to="/about/profile" replace />;

  return (
    <>
      <PageHero eyebrow="About" title="关于我" desc="连续创业者、AI 导演、AI 产品经理。专注于把 AI 落地进传统行业。" />
      <SubNav items={aboutTabs.map((t) => ({ to: `/about/${t.key}`, label: t.label }))} />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {tab === "profile" && <ProfileTab />}
        {tab === "resume" && <ResumeTab />}
        {tab === "skills" && <SkillsTab />}
      </div>
    </>
  );
}

/* ───────── 二级：个人简介 ───────── */
function ProfileTab() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white">
          <img src={profile.photo} alt="毛翔" width={1440} height={1920} className="aspect-[4/5] w-full object-cover object-[50%_30%]" />
          <div className="p-6">
            <p className="text-xl font-semibold text-neutral-900">{profile.name} <span className="text-[15px] font-normal text-neutral-500">{profile.en}</span></p>
            <p className="mt-1 text-[14px] text-neutral-600">{profile.title}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-neutral-500">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{profile.city}</span>
              <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5" />北京大学硕士</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" />{profile.roles}</span>
            </div>
          </div>
        </div>
      </Reveal>
      <div>
        <Reveal>
          <h2 className="font-display text-3xl leading-snug text-neutral-900 md:text-[40px]">
            做产品、做影像、做培训与 IP，<br />
            <span className="text-[#b07d3c]">让 AI 用进真实生意里。</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 space-y-5 text-[15px] leading-8 text-neutral-700">
            <p>{profile.intro}</p>
            <p>我的工作围绕三件事展开：<b className="text-neutral-900">AI 产品交付</b>——走进门店和工厂，把一个具体问题做成能用、能交接的 AI 系统，累计交付 10+ 个；<b className="text-neutral-900">AI 影像</b>——为品牌、文旅与公共文化机构制作 AI 影片；<b className="text-neutral-900">AI 培训与 IP 孵化</b>——同一个板块里两条并列的业务线：一边让管理层和一线团队学会用 AI，一边帮老板 / 门店把真本事做成持续获客的内容与自有客源。</p>
            <p>不是向企业卖 AI，而是先帮企业找到一个足够具体的问题，从一个部门、一个工作流、一个工具开始。</p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {traits.map((t) => (
              <div key={t.b} className="border-t border-neutral-900 pt-4">
                <p className="text-[15px] font-semibold text-neutral-900">{t.b}</p>
                <p className="mt-1.5 text-[13px] leading-6 text-neutral-500">{t.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about/resume" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">看履历 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link to="/work/fde" className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:border-black/25">看作品</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ───────── 二级：履历（三级：按类型筛选） ───────── */
const KINDS = ["全部", "创业", "影像", "教育"] as const;
type Kind = (typeof KINDS)[number];

function ResumeTab() {
  const [kind, setKind] = useState<Kind>("全部");
  const list = kind === "全部" ? timeline : timeline.filter((t) => t.kind === kind);
  const counts = Object.fromEntries(KINDS.map((k) => [k, k === "全部" ? timeline.length : timeline.filter((t) => t.kind === k).length])) as Record<Kind, number>;

  return (
    <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
      <aside className="lg:sticky lg:top-36 lg:self-start">
        <Reveal>
          <h2 className="font-display text-3xl text-neutral-900">履历</h2>
          <p className="mt-3 text-[14px] leading-7 text-neutral-600">按经历类型筛选。</p>
          <div className="mt-6"><FilterChips options={KINDS} value={kind} onChange={setKind} counts={counts} /></div>
          <div className="mt-8 rounded-2xl border border-black/[0.07] bg-white p-5">
            <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400">教育背景</p>
            <p className="mt-3 text-[14px] font-semibold text-neutral-900">北京大学</p>
            <p className="text-[13px] text-neutral-500">硕士 · 2022 – 2025</p>
          </div>
        </Reveal>
      </aside>
      <ol className="relative border-l border-black/[0.1] pl-8">
        {list.map((t, i) => (
          <Reveal key={t.title + t.time} delay={i * 40}>
            <li className="relative pb-10 last:pb-0">
              <span className={`absolute -left-[39px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-[#fafaf7] ${t.current ? "bg-[#b07d3c]" : "bg-neutral-300"}`} />
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[12px] uppercase tracking-[0.14em] text-neutral-400">{t.time}</p>
                <span className="rounded-full bg-[#f3ede1] px-2 py-0.5 text-[11px] text-[#8a6d3f]">{t.kind}</span>
                {t.current && <span className="rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700">进行中</span>}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">{t.title}</h3>
              <p className="text-[14px] text-neutral-500">{t.org}</p>
              {t.desc && <p className="mt-2.5 max-w-2xl text-[14px] leading-7 text-neutral-600">{t.desc}</p>}
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ───────── 二级：能力栈 ───────── */
function SkillsTab() {
  return (
    <>
      <Reveal>
        <div className="grid overflow-hidden rounded-[32px] border border-black/[0.07] bg-white shadow-[0_18px_50px_rgba(40,32,20,0.06)] md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <div key={g.no} className={`px-7 py-9 md:px-10 md:py-11 ${i > 0 ? "border-t border-black/[0.07] md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
                <span className="font-display text-3xl leading-none text-[#e5d9c3]">{g.no}</span>{g.en}
              </div>
              <h3 className="mt-4 text-[22px] font-semibold text-neutral-900">{g.title}</h3>
              <ul className="mt-6">
                {g.items.map((it) => (
                  <li key={it.b} className="border-t border-black/[0.07] py-3.5">
                    <p className="text-[14px] font-semibold text-neutral-900">{it.b}</p>
                    <p className="mt-0.5 text-[13px] leading-6 text-neutral-500">{it.s}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-14">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">Toolbox</p>
          <h3 className="font-display mt-2 text-3xl text-neutral-900">常用工具与技术</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {toolStack.map((t) => <span key={t} className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[13px] text-neutral-700">{t}</span>)}
          </div>
        </div>
      </Reveal>
    </>
  );
}

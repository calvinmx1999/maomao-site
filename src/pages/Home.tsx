import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, MapPin, Play } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import ProjectCard from "../components/ProjectCard";
import VideoModal, { type ModalVideo } from "../components/VideoModal";
import { projects } from "../data/projects";
import { profile, timeline, businesses } from "../data/profile";
import { businessLines, featuredCourse, ipIncubation } from "../data/training";
import { videos } from "../data/videos";
import { usePageMeta } from "../hooks/usePageMeta";

const STATS = [
  { v: "10+", d: "已交付的 AI 产品与系统" },
  { v: "30+", d: "合作过的商业与公共文化机构" },
  { v: "1 亿+", d: "AI 影像项目累计全网曝光" },
  { v: "北大", d: "北京大学硕士" },
];

export default function Home() {
  usePageMeta("AI 产品经理 · AI 导演", "毛翔，北京大学硕士，连续创业者、AI 导演、AI 产品经理。三大业务：AI 产品交付、AI 影像、AI 培训与 IP 孵化。");
  const [video, setVideo] = useState<ModalVideo | null>(null);
  const heroFilms = ["dunhuang-promise", "changshana"].map((s) => videos.find((v) => v.slug === s)!);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(214,178,120,0.28), rgba(214,178,120,0.08), transparent)" }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[12.5px] text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-[#b07d3c]" />
              {profile.roles}
            </div>
            <h1 className="font-display mt-6 text-[40px] leading-[1.12] text-neutral-900 sm:text-5xl lg:text-[60px]">
              我是毛翔，
              <br />
              把 AI <span className="text-[#b07d3c]">交付进</span>
              <br className="hidden sm:block" />
              真实业务里。
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-neutral-600 md:text-[16px]">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/work/fde" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-neutral-700">
                看作品 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3 text-[15px] font-medium text-neutral-800 transition-colors hover:border-black/25">
                聊聊合作
              </a>
            </div>
            <p className="mt-8 flex items-center gap-1.5 text-[13px] text-neutral-400"><MapPin className="h-3.5 w-3.5" />{profile.city} · {profile.edu}</p>
          </div>

          {/* 照片 + 浮动界面卡 */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="relative overflow-hidden rounded-[28px] border border-black/[0.06] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)]">
              <img src={profile.photo} alt="毛翔个人照" width={1440} height={1920} className="aspect-[4/5] w-full object-cover object-[50%_30%]" loading="eager" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 text-white">
                <p className="text-[18px] font-semibold">毛翔 · mao mao</p>
                <p className="mt-0.5 text-[13px] text-white/80">{profile.title}</p>
              </div>
            </div>
            {heroFilms.map((v, i) => (
              <button
                key={v.slug}
                type="button"
                onClick={() => setVideo({ mid: v.mid, aid: v.aid, title: v.title, client: v.client })}
                aria-label={`播放：${v.title}`}
                className={`float-card absolute hidden w-52 overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_18px_45px_-18px_rgba(0,0,0,0.35)] sm:block ${i === 0 ? "-left-10 top-10" : "-right-10 bottom-12"}`}
                style={{ ["--r" as string]: i === 0 ? "-6deg" : "5deg", animationDelay: `${i * 1.5}s` }}
              >
                <img src={v.img} alt={v.title} width={640} height={360} className="aspect-video block w-full object-cover" />
                <span className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md"><Play className="ml-0.5 h-3 w-3 fill-current text-neutral-900" /></span>
              </button>
            ))}
          </div>
        </div>

        {/* 数据条 */}
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.d} className="border-t border-black/[0.08] pt-5">
                <div className="font-display text-3xl text-neutral-900 md:text-[34px]">{s.v}</div>
                <div className="mt-1.5 text-[13px] leading-snug text-neutral-500">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Quote ───────── */}
      <section className="bg-neutral-900 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <blockquote className="font-display text-2xl leading-snug text-white md:text-[36px] md:leading-[1.4]">
              “不是向企业卖 AI，而是先帮企业找到
              <span className="text-[#d6b278]">一个足够具体的问题</span>。”
            </blockquote>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-neutral-400">从一个部门、一个工作流、一个工具开始，先让老板看到 AI 真的能省时间、降成本，再逐步深入。</p>
          </Reveal>
        </div>
      </section>

      {/* ───────── 三大业务 ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHead eyebrow="What I Do" title="三大业务" desc="做产品、做影像、做培训与 IP——都围绕同一个目标：让 AI 真正用进传统行业的日常经营里。" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {businesses.map((b, i) => (
              <Reveal key={b.no} delay={i * 80}>
                <Link to={b.to} className="group flex h-full flex-col rounded-[32px] border border-black/[0.07] bg-white px-7 py-9 shadow-[0_18px_50px_rgba(40,32,20,0.06)] transition-shadow hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
                    <span className="font-display text-4xl leading-none text-[#b07d3c]">{b.no}</span> {b.en}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-neutral-900">{b.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-7 text-neutral-600">{b.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-neutral-900">{b.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 精选产品 ───────── */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="AI Products" title="AI 产品交付 · 精选" desc="累计交付 10+ 个 AI 产品与系统，每一个都从真实的门店、老板和一线员工那里长出来。" />
            <Reveal><Link to="/work/fde" className="group inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:border-black/25">全部产品 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}><ProjectCard p={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── AI 影像 ───────── */}
      <section className="border-t border-black/[0.06] bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="AI Film" title="AI 影像 · 精选" desc="为品牌、文旅与公共文化机构制作的 AI 影片，主导项目累计全网曝光过亿。" />
            <Reveal><Link to="/work/video" className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-800">全部影像 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {videos.slice(0, 4).map((v, i) => (
              <Reveal key={v.slug} delay={i * 60}>
                <button type="button" onClick={() => setVideo({ mid: v.mid, aid: v.aid, title: v.title, client: v.client })} className="group block w-full text-left" aria-label={`播放：${v.title}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
                    <img src={v.img} alt={v.title} width={640} height={360} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={v.position ? { objectPosition: v.position } : undefined} />
                    <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 opacity-0 shadow-xl transition-opacity group-hover:opacity-100"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
                  </div>
                  <p className="mt-3 truncate text-[14px] font-semibold text-neutral-900">{v.title}</p>
                  <p className="truncate text-[12px] text-neutral-500">{v.result ?? v.client}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── AI 培训与 IP 孵化 ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHead eyebrow="AI Training & IP" title="AI 培训与 IP 孵化" desc="一个板块里两条并列的业务线：AI 培训让团队会用 AI，IP 孵化让老板 / 门店拿到自有客源。可单独合作，也可组合推进。" />
            <Reveal delay={100}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {businessLines.map((b) => (
                  <div key={b.no} className="h-full rounded-2xl border border-black/[0.07] bg-white px-5 py-5">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-400"><span className="font-display mr-2 text-xl text-[#b07d3c]">{b.no}</span>{b.en}</p>
                    <p className="mt-2 text-[16px] font-semibold text-neutral-900">{b.title}</p>
                    <p className="mt-1 text-[13px] leading-6 text-neutral-600">{b.lead}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[13.5px] leading-7 text-neutral-500">培训代表案例：{featuredCourse.client}「{featuredCourse.title}」；IP 孵化案例仍在积累中，完整方案可约时间细聊。</p>
              <Link to="/work/training" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">看两条业务线 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-4">
              {featuredCourse.slides.slice(0, 3).map((sl) => (
                <img key={sl.src} src={sl.src} alt={sl.caption} width={960} height={540} loading="lazy" className="aspect-video w-full rounded-2xl border border-black/[0.07] object-cover" />
              ))}
              <img src={ipIncubation.shot.src} alt={ipIncubation.shot.caption} width={1440} height={900} loading="lazy" className="aspect-video w-full rounded-2xl border border-black/[0.07] object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── 合作品牌 ───────── */}
      <section className="border-t border-black/[0.06] bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHead eyebrow="Clients" title="合作过的品牌与机构" desc="宝马中国、清华大学、中国建筑、敦煌文旅等 30 余家商业与公共文化机构。" center />
          <Reveal delay={80}>
            <img src="/images/brands.jpg" alt="合作品牌：中国建筑、中核、国家电网、华为、清华大学、北京大学、敦煌文旅、方特、中国嘉德、圣象等" width={1920} height={1080} loading="lazy" className="mx-auto mt-12 w-full max-w-5xl rounded-[28px] border border-black/[0.06]" />
          </Reveal>
        </div>
      </section>

      {/* ───────── 简历速览 ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead eyebrow="Path" title="从北大毕业，到传统行业AI落地。" desc="从 AI 影像出发，走到 AI 产品、AI 培训与 IP 孵化。每一步都在做同一件事：把新技术用进真实业务里。" />
            <Reveal delay={100}><Link to="/about/resume" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">完整履历 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Reveal>
          </div>
          <Reveal delay={80}>
            <ol className="relative border-l border-black/[0.1] pl-7">
              {timeline.map((t) => (
                <li key={t.title + t.time} className="relative pb-8 last:pb-0">
                  <span className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-[#fafaf7] ${t.current ? "bg-[#b07d3c]" : "bg-neutral-300"}`} />
                  <p className="text-[12px] uppercase tracking-[0.14em] text-neutral-400">{t.time}</p>
                  <p className="mt-1 text-[16px] font-semibold text-neutral-900">{t.title}<span className="ml-2 text-[14px] font-normal text-neutral-500">{t.org}</span></p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <VideoModal video={video} onClose={() => setVideo(null)} />
    </>
  );
}

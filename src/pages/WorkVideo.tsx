import { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "../components/Reveal";
import FilterChips from "../components/FilterChips";
import VideoModal, { type ModalVideo } from "../components/VideoModal";
import { videoCategories, videos, videoStats } from "../data/videos";
import { usePageMeta } from "../hooks/usePageMeta";
import { WorkHeader } from "./WorkShared";

type Cat = (typeof videoCategories)[number];

export default function WorkVideo() {
  usePageMeta("AI 影像作品", "《听见清华》《我和敦煌有个约定》等 AI 影像代表作。");
  const [cat, setCat] = useState<Cat>("全部");
  const [video, setVideo] = useState<ModalVideo | null>(null);
  const list = cat === "全部" ? videos : videos.filter((v) => v.category === cat);

  return (
    <>
      <WorkHeader title="作品集" desc="为品牌、文旅与公共文化机构制作的 AI 影片。主导项目累计全网曝光过亿。" />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <Reveal>
          <div className="grid grid-cols-3 gap-6 border-b border-black/[0.07] pb-10">
            {videoStats.map((s) => (
              <div key={s.d}>
                <div className="font-display text-3xl text-neutral-900 md:text-4xl">{s.v}</div>
                <div className="mt-1 text-[13px] text-neutral-500">{s.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal><div className="mt-10"><FilterChips options={videoCategories} value={cat} onChange={setCat} /></div></Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 3) * 60} className="h-full">
              <button type="button" onClick={() => setVideo({ mid: v.mid, aid: v.aid, title: v.title, client: v.client })} className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white text-left transition-shadow hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.25)]" aria-label={`播放：${v.title}`}>
                <div className="relative overflow-hidden bg-neutral-100">
                  <img src={v.img} alt={`${v.client}：${v.title}`} width={640} height={360} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={v.position ? { objectPosition: v.position } : undefined} />
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/95 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"><Play className="ml-0.5 h-5 w-5 fill-current" /></span>
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">{v.category}</span>
                </div>
                {/* flex-1 + mt-auto：标题单行截断，结果行贴底，整行卡片等高 */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="truncate text-[16px] font-semibold text-neutral-900" title={v.title}>{v.title}</h3>
                  <p className="mt-1 truncate text-[13px] text-neutral-500" title={v.client}>{v.client}</p>
                  <div className="mt-auto flex min-h-[3.25rem] items-end pt-3">
                    {v.result && <p className="w-full border-t border-black/[0.06] pt-3 text-[13px] font-semibold text-[#8a6d3f]">{v.result}</p>}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      <VideoModal video={video} onClose={() => setVideo(null)} />
    </>
  );
}

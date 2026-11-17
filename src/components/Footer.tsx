import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { profile } from "../data/profile";

const WORDS = ["诊断", "交付", "落地"];

/** 结尾大标题 + 联系方式 */
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } }), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section ref={ref} className="border-t border-black/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-32">
          <h2 className="font-display text-[40px] leading-[1.2] text-neutral-900 sm:text-6xl md:text-7xl">
            把你的业务难题，
            <br />
            交给我来
            <span className={`flip-stack text-[#b07d3c] ${active ? "flip-running" : ""}`}>
              {WORDS.map((w) => <span key={w}>{w}</span>)}
            </span>
            。
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-neutral-500">从一个部门、一个工作流、一个工具开始。</p>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-20 border-t border-black/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">合作 · 聊项目</p>
              <div className="mt-4 flex items-center gap-4">
                <img src="/wechat-qr.jpg" alt="毛翔微信二维码" width={112} height={112} className="h-28 w-28 rounded-xl border border-black/[0.08]" />
                <div>
                  <p className="text-[15px] font-semibold text-neutral-900">微信扫码 · 直接找我</p>
                  <p className="mt-1.5 text-sm text-neutral-500">微信号：<span className="font-medium text-neutral-800">{profile.wechat}</span></p>
                  <p className="mt-1 text-[13px] text-neutral-400">添加请备注「行业 + 想解决的问题」</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">站内导航</p>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[15px]">
                {[["个人简介", "/about/profile"], ["履历", "/about/resume"], ["能力栈", "/about/skills"], ["AI 产品交付", "/work/fde"], ["AI 影像", "/work/video"], ["AI 培训与 IP 孵化", "/work/training"], ["工作方法", "/method"]].map(([l, h]) => (
                  <Link key={h} to={h} className="w-fit text-neutral-600 transition-colors hover:text-neutral-900">{l}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-8 text-[13px] text-neutral-400">
            <span>毛翔 mao mao · {profile.title} · {profile.city}</span>
            <span>© 2026 毛翔 mao mao</span>
          </div>
        </div>
      </footer>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

/**
 * 一级导航：首页 / 关于我 / 作品集 / 工作方法 / 联系
 * 关于我、作品集带二级下拉（桌面 hover，移动端展开）
 */
export const NAV = [
  { label: "首页", to: "/" },
  {
    label: "关于我",
    to: "/about/profile",
    match: "/about",
    children: [
      { label: "个人简介", to: "/about/profile", desc: "我是谁、在做什么" },
      { label: "履历", to: "/about/resume", desc: "从北大毕业，到传统行业AI落地" },
      { label: "能力栈", to: "/about/skills", desc: "交付能力与工具" },
    ],
  },
  {
    label: "作品集",
    to: "/work/fde",
    match: "/work",
    children: [
      { label: "AI 产品交付", to: "/work/fde", desc: "10+ 个落地的 AI 产品与系统" },
      { label: "AI 影像", to: "/work/video", desc: "品牌、文旅与公共文化影片" },
      { label: "企业 AI 培训", to: "/work/training", desc: "管理层工作坊 · 岗位实战营" },
    ],
  },
  { label: "工作方法", to: "/method" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setHover(null); }, [pathname]);

  const enter = (k: string) => { window.clearTimeout(timer.current); setHover(k); };
  const leave = () => { timer.current = window.setTimeout(() => setHover(null), 120); };
  const isActive = (n: (typeof NAV)[number]) => ("match" in n && n.match ? pathname.startsWith(n.match) : pathname === n.to);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-black/[0.06] bg-[#fafaf7]/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="天人合一的毛毛 首页">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-[15px] font-bold text-[#d6b278]">毛</span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold text-neutral-900">@天人合一的毛毛</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400">mao mao</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {NAV.map((n) =>
            "children" in n && n.children ? (
              <div key={n.label} className="relative" onMouseEnter={() => enter(n.label)} onMouseLeave={leave}>
                <NavLink to={n.to} className={`nav-link inline-flex items-center gap-1 text-sm transition-colors ${isActive(n) ? "is-active text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}`} aria-haspopup="true" aria-expanded={hover === n.label} onFocus={() => enter(n.label)}>
                  {n.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${hover === n.label ? "rotate-180" : ""}`} />
                </NavLink>
                {hover === n.label && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                    <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-2 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)]">
                      {n.children.map((c) => (
                        <Link key={c.to} to={c.to} className={`flex items-start justify-between gap-3 rounded-xl px-3.5 py-3 transition-colors hover:bg-[#f6f2ea] ${pathname === c.to ? "bg-[#f6f2ea]" : ""}`} onBlur={leave}>
                          <span>
                            <span className="block text-[14px] font-semibold text-neutral-900">{c.label}</span>
                            <span className="mt-0.5 block text-[12px] text-neutral-500">{c.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={n.label} to={n.to} end className={`nav-link text-sm transition-colors ${isActive(n) ? "is-active text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}`}>
                {n.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="group hidden items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 md:inline-flex">
            聊聊你的业务
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="菜单" aria-expanded={open}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-black/[0.06] bg-[#fafaf7] px-5 py-4 md:hidden">
          {NAV.map((n) => (
            <div key={n.label} className="border-b border-black/[0.05] py-2 last:border-0">
              <Link to={n.to} className="block rounded-lg px-3 py-2 text-[15px] font-semibold text-neutral-900">{n.label}</Link>
              {"children" in n && n.children && (
                <div className="ml-3 grid grid-cols-2 gap-1.5 pb-1">
                  {n.children.map((c) => (
                    <Link key={c.to} to={c.to} className={`rounded-lg px-3 py-2 text-[14px] ${pathname === c.to ? "bg-[#f3ede1] text-[#8a6d3f]" : "text-neutral-600"}`}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white">聊聊你的业务 <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      )}
    </header>
  );
}

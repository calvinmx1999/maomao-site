import { NavLink } from "react-router";

/** 二级标签栏：页面顶部的胶囊分段导航，吸顶在一级导航下方 */
export default function SubNav({ items }: { items: { to: string; label: string; badge?: string }[] }) {
  return (
    <div className="sticky top-16 z-40 border-b border-black/[0.06] bg-[#fafaf7]/90 backdrop-blur-md">
      <div className="no-scrollbar mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-5 py-2.5 md:px-8">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end
            className={({ isActive }) =>
              `inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                isActive ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-black/[0.05] hover:text-neutral-900"
              }`
            }
          >
            {it.label}
            {it.badge && <span className="rounded-full bg-[#d6b278]/25 px-1.5 text-[11px] font-semibold text-[#8a6d3f]">{it.badge}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

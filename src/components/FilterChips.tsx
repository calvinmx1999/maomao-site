/** 三级标签：页面内筛选 */
export default function FilterChips<T extends string>({ options, value, onChange, counts }: { options: readonly T[]; value: T; onChange: (v: T) => void; counts?: Partial<Record<T, number>> }) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto" role="tablist">
      {options.map((o) => (
        <button
          key={o}
          role="tab"
          aria-selected={value === o}
          onClick={() => onChange(o)}
          className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
            value === o ? "border-[#b07d3c] bg-[#f3ede1] font-semibold text-[#8a6d3f]" : "border-black/10 bg-white text-neutral-600 hover:border-black/25"
          }`}
        >
          {o}
          {counts?.[o] !== undefined && <span className="ml-1.5 text-neutral-400">{counts[o]}</span>}
        </button>
      ))}
    </div>
  );
}

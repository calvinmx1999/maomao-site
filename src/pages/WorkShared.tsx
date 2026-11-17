import SubNav from "../components/SubNav";

/** 作品集一级页的公共头部 + 二级标签（三大业务） */
export function WorkHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">Portfolio</p>
          <h1 className="font-display mt-3 text-4xl text-neutral-900 md:text-[56px] md:leading-[1.1]">{title}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-neutral-600">{desc}</p>
        </div>
      </section>
      <SubNav
        items={[
          { to: "/work/fde", label: "AI 产品交付" },
          { to: "/work/video", label: "AI 影像" },
          { to: "/work/training", label: "AI 培训与 IP 孵化" },
        ]}
      />
    </>
  );
}

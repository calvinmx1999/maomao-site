import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { usePageMeta } from "../hooks/usePageMeta";

const STEPS = [
  { no: "01", en: "Discover", title: "驻场诊断", desc: "到门店、工地、财务室坐一天。听老板讲生意，看员工怎么干活，找到那个最痛、最具体、最容易验证的环节。", out: "问题清单 · 访谈纪要" },
  { no: "02", en: "Define", title: "定义产品", desc: "把口述变成需求文档：角色、流程、数据模型、计算口径、验收标准。标出“待老板拍板”的口径，不替客户做决定。", out: "需求文档 · 数据模型" },
  { no: "03", en: "Build", title: "AI 编程交付", desc: "用 AI 编程在几天内做出可交互原型，演示数据先跑通。能单文件离线就不上服务器，门槛越低越容易用起来。", out: "可交互原型 · 演示数据" },
  { no: "04", en: "Pilot", title: "试用迭代", desc: "找真实用户用真实单据试。识别错了标出来，口径不对改规则，每一轮都回到业务现场验证。", out: "测试题集 · 迭代记录" },
  { no: "05", en: "Handover", title: "交接陪跑", desc: "模板、流程、培训留在客户身边。目标不是让客户离不开我，而是团队能自己接着跑。", out: "操作手册 · 培训 · 交接清单" },
];

const RULES = [
  { b: "不确定就不猜", s: "AI 识别结果先进确认环节：红色缺失、黄色存疑，人工确认后才入库。" },
  { b: "事实与建议分离", s: "参数、价格、政策必须有来源；AI 给的是建议，不冒充官方承诺。" },
  { b: "一个真相源", s: "台账 / 知识库是唯一事实来源，看板与报表全部实时计算。" },
  { b: "先软件闭环，后硬件", s: "知识与流程跑通之前，不急着上数字人、大屏和硬件。" },
];

const FIT = [
  {
    t: "适合找我",
    lead: "先把成本降下来，再把客源引进来：",
    items: [
      "最想先把成本降下来",
      "制造 / 零售 / 餐饮，有具体人工环节可以先试点",
      "想做线上获客，但不会做账号、没精力做内容",
      "老板愿意花半天讲清业务和客群",
      "希望能力最终留在自己手里",
    ],
  },
  {
    t: "不太适合",
    lead: "",
    items: [
      "只想做个「AI 概念」撑门面宣传，不打算落进真实业务",
      "需求还没理清，就想一口价定死总价",
      "需要整体替换大型 ERP 级别的核心业务系统",
      "只想靠投广告买流量，不愿做长期 IP 和自有客源",
    ],
  },
];

const EFFECTS = [
  { no: "01", label: "降本", desc: "重复工作交给 AI，省工时、减用工、降差错；先试点验证效果，再决定投入" },
  { no: "02", label: "获客", desc: "帮你做老板 / 门店 IP，持续产出内容、沉淀自有客源，不靠一次性投流" },
  { no: "03", label: "双轮推进", desc: "内部把成本压下来，外部把客源拉上来，投入产出算得清" },
];

export default function Method() {
  usePageMeta("工作方法", "驻场诊断 → 定义产品 → AI 编程交付 → 试用迭代 → 交接陪跑。");
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 pb-6 md:px-8">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">How I Work</p>
          <h1 className="font-display mt-3 text-4xl text-neutral-900 md:text-[56px] md:leading-[1.1]">AI 产品的五步交付法</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-neutral-600">做 AI 产品不是外包写代码，而是站在客户身边，把“业务问题”翻译成“能用的系统”。</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid overflow-hidden rounded-[32px] border border-black/[0.07] bg-white shadow-[0_18px_50px_rgba(40,32,20,0.06)] md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 60} className={`flex h-full flex-col px-6 py-8 ${i > 0 ? "border-t border-black/[0.07] md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-400"><span className="font-display text-3xl leading-none text-[#e5d9c3]">{s.no}</span>{s.en}</div>
              <h3 className="mt-4 text-[19px] font-semibold text-neutral-900">{s.title}</h3>
              {/* flex-1 吃掉多余高度，让各列的「产出」统一贴底对齐 */}
              <p className="mt-2.5 flex-1 text-[13.5px] leading-7 text-neutral-600">{s.desc}</p>
              {/* 预留两行高度：最长的「操作手册 · 培训 · 交接清单」换行时，其余列也保持同一区块高度 */}
              <p className="mt-5 min-h-[2.75rem] border-t border-black/[0.07] pt-3 text-[12px] font-medium leading-5 text-[#8a6d3f]">产出：{s.out}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHead eyebrow="Principles" title="我坚持的四条铁律" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RULES.map((r, i) => (
              <Reveal key={r.b} delay={i * 60}>
                <div className="border-t border-neutral-900 pt-4">
                  <p className="text-[16px] font-semibold text-neutral-900">{r.b}</p>
                  <p className="mt-2 text-[13.5px] leading-6 text-neutral-500">{r.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {FIT.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className={`flex h-full flex-col rounded-3xl p-8 ${i === 0 ? "bg-white" : "border border-white/10"}`}>
                  <h3 className={`text-xl font-semibold ${i === 0 ? "text-neutral-900" : "text-white"}`}>{f.t}</h3>
                  {/* 导语区固定高度：两张卡的第一条列表项从同一水平线开始 */}
                  <div className="mt-3 min-h-[2rem]">
                    {f.lead && <p className="text-[14px] font-medium leading-7 text-[#8a6d3f]">{f.lead}</p>}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {f.items.map((x) => (
                      <li key={x} className={`flex gap-3 text-[15px] leading-7 ${i === 0 ? "text-neutral-700" : "text-neutral-300"}`}>
                        <span className={i === 0 ? "text-[#b07d3c]" : "text-neutral-500"}>{i === 0 ? "✓" : "—"}</span>{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-12">
            <Reveal>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#d6b278]">What You Get</p>
              <h2 className="font-display mt-3 text-[32px] leading-tight text-white md:text-[42px]">老板看得见的效果</h2>
              <p className="mt-3 text-[14px] leading-7 text-neutral-400">内部降本、外部获客，投入产出算得清。</p>
            </Reveal>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {EFFECTS.map((e, i) => (
                <Reveal key={e.label} delay={i * 70}>
                  <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl leading-none text-[#d6b278]">{e.no}</span>
                      <h3 className="text-lg font-semibold text-white">{e.label}</h3>
                    </div>
                    <p className="mt-4 flex-1 text-[14px] leading-7 text-neutral-300">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link to="/work/fde" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-neutral-900">看看这套方法交付了什么 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

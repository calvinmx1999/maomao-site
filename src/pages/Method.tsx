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
  { t: "适合找我", items: ["传统企业，想用 AI 但不知道从哪开始", "有一个具体的、重复的、靠人工的环节", "老板愿意花半天讲清楚业务", "希望团队最终能自己用起来"] },
  { t: "不太适合", items: ["只想要一个“AI 概念”做宣传", "需求还没想清楚就要定总价", "需要大型 ERP 级别的系统替换"] },
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
            <Reveal key={s.no} delay={i * 60} className={`px-6 py-8 ${i > 0 ? "border-t border-black/[0.07] md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-400"><span className="font-display text-3xl leading-none text-[#e5d9c3]">{s.no}</span>{s.en}</div>
              <h3 className="mt-4 text-[19px] font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-7 text-neutral-600">{s.desc}</p>
              <p className="mt-5 border-t border-black/[0.07] pt-3 text-[12px] font-medium text-[#8a6d3f]">产出：{s.out}</p>
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
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-8">
          {FIT.map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className={`h-full rounded-3xl p-8 ${i === 0 ? "bg-white" : "border border-white/10"}`}>
                <h3 className={`text-xl font-semibold ${i === 0 ? "text-neutral-900" : "text-white"}`}>{f.t}</h3>
                <ul className="mt-5 space-y-3">
                  {f.items.map((x) => <li key={x} className={`flex gap-3 text-[15px] leading-7 ${i === 0 ? "text-neutral-700" : "text-neutral-300"}`}><span className={i === 0 ? "text-[#b07d3c]" : "text-neutral-500"}>{i === 0 ? "✓" : "—"}</span>{x}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
          <Link to="/work/fde" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-neutral-900">看看这套方法交付了什么 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </>
  );
}

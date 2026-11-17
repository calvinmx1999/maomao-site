/** 个人资料、履历、能力 —— 对外业务展示版，只保留与业务相关的信息 */

export const profile = {
  name: "毛翔",
  en: "mao mao",
  title: "AI 产品经理",
  roles: "连续创业者 · AI 导演 · AI 产品经理",
  edu: "北京大学硕士",
  city: "重庆",
  wechat: "Calvinmx99",
  photo: "/images/maoxiang.jpg",
  intro:
    "北京大学硕士，连续创业者、AI 导演、AI 产品经理。主导过宝马中国、清华大学、中国建筑、敦煌文旅等 30 余家商业和公共文化机构的 AI 影像与数字化项目；现在专注于把 AI 落地进传统行业——做产品、做影像、做培训与 IP 孵化。",
};

/** 一级标签「关于我」下的二级标签 */
export const aboutTabs = [
  { key: "profile", label: "个人简介" },
  { key: "resume", label: "履历" },
  { key: "skills", label: "能力栈" },
] as const;

export type AboutTab = (typeof aboutTabs)[number]["key"];

export interface TimelineItem {
  time: string;
  title: string;
  org: string;
  desc: string;
  kind: "创业" | "影像" | "教育";
  current?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    time: "持续创业中",
    title: "AI 产品经理",
    org: "连续创业者",
    desc: "为传统企业交付 AI 产品与系统，并提供 AI 影像制作、AI 培训与 IP 孵化。",
    kind: "创业",
    current: true,
  },
  {
    time: "2024 — 至今",
    title: "AI 导演",
    org: "商业及文化 AI 影像项目",
    desc: "《我和敦煌有个约定》《跟着熊出没去旅行·哈密篇》等，主导项目累计全网曝光过亿。",
    kind: "影像",
    current: true,
  },
  {
    time: "2024.04 — 2025.01",
    title: "联合创始人",
    org: "北京祖母镜科技有限公司",
    desc: "生成式 AI 方向创业，为国企与跨国企业交付 AI 影像 Demo 与项目。",
    kind: "创业",
  },
  {
    time: "2022 — 2025",
    title: "硕士",
    org: "北京大学",
    desc: "",
    kind: "教育",
  },
];

/** 三大业务 */
export const businesses = [
  {
    no: "01",
    en: "AI Products",
    title: "AI 产品交付",
    desc: "驻进业务现场，把一个具体问题做成能用、能交接的 AI 系统。服务门窗建材、连锁零售与销售团队。",
    to: "/work/fde",
    cta: "看产品作品",
  },
  {
    no: "02",
    en: "AI Film",
    title: "AI 影像",
    desc: "清华大学、敦煌文旅、LV、中国建筑等品牌与文化机构的 AI 影片。",
    to: "/work/video",
    cta: "看影像作品",
  },
  {
    no: "03",
    en: "AI Training & IP",
    title: "AI 培训与 IP 孵化",
    desc: "两条并列业务线：AI 培训让团队会用 AI，IP 孵化让老板 / 门店拿到自有客源。可单独合作，也可组合推进。",
    to: "/work/training",
    cta: "看两条业务线",
  },
];

export const skillGroups = [
  {
    no: "01",
    en: "Product",
    title: "AI 产品交付",
    items: [
      { b: "业务现场诊断", s: "驻店访谈、流程拆解，找到值得投入 AI 的那一个环节" },
      { b: "产品定义", s: "需求文档、数据模型、权限矩阵、验收标准" },
      { b: "AI 系统搭建", s: "大模型视觉识别、RAG 知识库、Agent 工作流、提示词工程" },
      { b: "AI 编程交付", s: "快速交付可用产品，单文件离线到全栈应用" },
    ],
  },
  {
    no: "02",
    en: "Film",
    title: "AI 影像",
    items: [
      { b: "导演与叙事", s: "品牌片、宣传片、文旅与公共文化影像" },
      { b: "生成式视频", s: "商业级 AI 视频生产流程" },
      { b: "视觉营销", s: "AI 图片 / 视频素材的规模化产出" },
    ],
  },
  {
    no: "03",
    en: "Training & IP",
    title: "AI 培训与 IP 孵化",
    items: [
      { b: "课程设计", s: "按行业与岗位定制，零基础可上手" },
      { b: "实战带教", s: "现场人人出图、出稿，当堂点评迭代" },
      { b: "IP 定位与内容", s: "访谈挖底、账号定位、脚本与内容生产" },
      { b: "SOP 固化", s: "模板与流程交回团队，自己接着跑" },
    ],
  },
];

export const toolStack = [
  "Claude / GPT / 豆包", "多模态视觉识别", "RAG 知识库", "Agent 工作流", "提示词工程",
  "React / Next.js", "TypeScript", "单文件离线 Web", "Excel / 数据迁移",
  "可灵 / Seedance", "AIGC 影像", "飞书 / 钉钉集成",
];

export const traits = [
  { b: "懂业务", s: "先听懂生意怎么做，再决定 AI 用在哪。" },
  { b: "能交付", s: "从需求到可用的系统，一个人跑通全链路。" },
  { b: "会传授", s: "把方法教给团队，让 AI 留在客户身边。" },
];

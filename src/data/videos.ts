/** AI 影像作品 */

export interface VideoWork {
  slug: string;
  img: string;
  title: string;
  client: string;
  category: "品牌" | "文旅" | "公共文化";
  result?: string;
  mid: string;
  aid: string;
  position?: string;
}

export const videoCategories = ["全部", "品牌", "文旅", "公共文化"] as const;

export const videos: VideoWork[] = [
  { slug: "tsinghua", img: "/works/tsinghua.jpg", title: "《听见清华》", client: "清华大学", category: "公共文化", result: "全网播放 2000 万+", mid: "OpgP7k9DYg946BL5", aid: "12484384", position: "18% 50%" },
  { slug: "dunhuang-promise", img: "/works/dunhuang-promise.jpg", title: "《我和敦煌有个约定》", client: "敦煌文旅", category: "文旅", result: "全网播放 1000 万+", mid: "gyDjwoDLRZO4xv1q", aid: "13618385" },
  { slug: "lv-speedy", img: "/works/lv-speedy.jpg", title: "《时间旅行》", client: "Louis Vuitton · Speedy", category: "品牌", mid: "36Jm4aPGrvNwyjzB", aid: "13410059" },
  { slug: "xiongchumo-hami", img: "/works/xiongchumo-hami.jpg", title: "《跟着熊出没去旅行 · 哈密篇》", client: "哈密文旅 × 熊出没", category: "文旅", mid: "yoRe78RvPEN4r1Dj", aid: "13758660" },
  { slug: "changshana", img: "/works/changshana.jpg", title: "《天才少女常沙娜》", client: "公共文化人物影像", category: "公共文化", mid: "Mnp8wWgYDOlwK0lG", aid: "13637322" },
  { slug: "dunhuang-rabbit", img: "/works/dunhuang-rabbit.jpg", title: "《大家一起来敦煌》", client: "敦煌文旅 · 三兔系列", category: "文旅", mid: "yOBl4zxylEq7aMg0", aid: "13618390" },
  { slug: "monalisa-brocade", img: "/works/monalisa-brocade.jpg", title: "《当织锦遇见蒙娜丽莎》", client: "文化 IP 跨界企划", category: "公共文化", mid: "2MmN45k0Bgz7X0zL", aid: "13676368" },
  { slug: "up-we-build", img: "/works/up-we-build.jpg", title: "《UP WE BUILD》", client: "中国建筑", category: "品牌", mid: "d0Nq7Mz0Jr5wO2Vj", aid: "12790956" },
];

export const videoStats = [
  { v: "1 亿+", d: "主导项目累计全网曝光" },
  { v: "30+", d: "国央企及国际品牌 AI 影像项目" },
  { v: "几十部", d: "清华相关宣传片" },
];

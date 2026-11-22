# 个人网站部署说明（calvinmx99.cn）

这个网站部署在 **Cloudflare Pages**，项目名 `maomao-site`，绑定域名 `calvinmx99.cn`（含 www 自动跳转）。
代码仓库：GitHub 私有库 `calvinmx1999/maomao-site`。

## 每次更新网站（最常用）

改完代码后，在项目根目录的终端里运行：

```bash
./deploy.sh
```

脚本会自动：构建 → 让你输入 `y` 确认 → 部署 → 打印线上标题验证。
看到 `完成 ✅` 后打开 https://calvinmx99.cn 检查即可（缓存原因可能要强刷一下：Cmd+Shift+R）。

顺手提交代码存档（可选但建议）：

```bash
git add -A && git commit -m "更新说明" && git push
```

## 第一次在这台电脑上部署（只需一次）

1. 安装依赖：在项目根目录运行 `npm install`
2. 登录 Cloudflare：`npx wrangler login`（会自动打开浏览器，用 calvinmx1999@gmail.com 授权）

## 回滚（发错了想退回上一版）

不用重新部署，去 Cloudflare 控制台回滚即可：

1. 打开 https://dash.cloudflare.com → Workers 和 Pages → **maomao-site** → 「部署」
2. 找到要退回的那一条部署，点 ⋯ → **Rollback to this deployment**

## ⚠️ 千万别搞混

| 项目 | 域名 | 是什么 |
|---|---|---|
| `maomao-site` | calvinmx99.cn | **这个个人网站** |
| `menchuang-youzhang` | hubwindoor.com | 门窗有帐产品站（别往这里发） |

手动部署时的命令（等价于 deploy.sh 的第 2 步）：

```bash
npx vite build && npx wrangler pages deploy dist --project-name=maomao-site --branch=main --commit-dirty=true
```

`--project-name` 一定要是 `maomao-site`。

## 常见问题

- **部署卡住 / 网络错误**：关掉代理或在代理里给 Cloudflare 加直连规则后重试。
- **提示未登录 / 凭证过期**：重新跑一次 `npx wrangler login`。
- **线上还是旧内容**：等 1 分钟，浏览器 Cmd+Shift+R 强刷；还不行就检查部署是不是发到了别的项目。
- **Vercel 备份**：`maomao-site.vercel.app` 还留着，不用管它提示的域名失效警告。

## 网站技术栈（给维护的人看）

Vite + React 19 + TypeScript + Tailwind；纯静态 SPA，构建产物在 `dist/`。
路由兜底：`public/_redirects`；www 301 跳主域名：`functions/_middleware.js`（Direct Upload 会自动打包）。

#!/usr/bin/env bash
# 毛翔个人网站（calvinmx99.cn）一键部署脚本
# 目标：Cloudflare Pages 项目 maomao-site
# 用法：在项目根目录运行  ./部署/deploy.sh
set -euo pipefail

# ⚠️ 部署目标固定写死，防止误发到别的项目（门窗有帐是 menchuang-youzhang，别混）
PROJECT="maomao-site"

# 项目根目录 = 本脚本所在「部署」文件夹的上一级
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_DIR="$ROOT/部署"

cd "$ROOT"

echo "==> 1/4 构建（vite build）"
npx vite build

echo "==> 2/4 把要上传到 Cloudflare 的内容整理进 部署/ 文件夹"
rm -rf "$DEPLOY_DIR/dist"
cp -r "$ROOT/dist" "$DEPLOY_DIR/dist"
echo "    就绪：部署/dist（网站静态文件）+ 部署/functions（www 跳转中间件）"

echo "==> 3/4 部署到 Cloudflare Pages"
echo "    项目：$PROJECT  →  https://calvinmx99.cn"
echo "    （注意：这是个人网站，不是门窗有帐）"
read -r -p "    输入 y 确认部署：" ans
if [ "$ans" != "y" ]; then
  echo "已取消，未部署。"
  exit 1
fi

cd "$DEPLOY_DIR"
npx -y wrangler pages deploy dist --project-name="$PROJECT" --branch=main --commit-dirty=true

echo "==> 4/4 验证线上标题"
sleep 5
curl -sS -m 20 https://calvinmx99.cn/ | grep -o "<title>[^<]*</title>" || true
echo "完成 ✅ 打开 https://calvinmx99.cn 检查"

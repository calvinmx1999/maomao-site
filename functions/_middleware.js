// Cloudflare Pages 中间件：www 301 跳主域名（_redirects 不支持域名级规则，故在代码里处理）
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.calvinmx99.cn") {
    url.hostname = "calvinmx99.cn";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}

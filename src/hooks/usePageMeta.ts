import { useEffect } from "react";

/** 路由级 title / description */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} · 毛翔 mao mao`;
    if (description) {
      let el = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!el) {
        el = document.createElement("meta");
        el.name = "description";
        document.head.appendChild(el);
      }
      el.content = description;
    }
  }, [title, description]);
}

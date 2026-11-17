import { useEffect } from "react";
import { X } from "lucide-react";

export interface ModalVideo { mid: string; aid?: string; title: string; client: string }

export default function VideoModal({ video, onClose }: { video: ModalVideo | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [video, onClose]);
  if (!video) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-10" onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title}>
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-3.5">
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-white">{video.title}</p>
            <p className="truncate text-xs text-neutral-400">{video.client}</p>
          </div>
          <button onClick={onClose} aria-label="关闭" className="ml-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><X className="h-4 w-4" /></button>
        </div>
        <div className="aspect-video w-full bg-black">
          <iframe src={`https://player.xinpianchang.com/?mid=${video.mid}${video.aid ? `&aid=${video.aid}` : ""}&autoplay=1`} title={video.title} className="h-full w-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

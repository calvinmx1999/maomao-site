import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, desc, center = false }: { eyebrow: string; title: ReactNode; desc?: ReactNode; center?: boolean }) {
  return (
    <Reveal>
      <div className={center ? "text-center" : ""}>
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b07d3c]">{eyebrow}</p>
        <h2 className="font-display mt-3 text-[32px] leading-tight text-neutral-900 md:text-5xl">{title}</h2>
        {desc && <p className={`mt-4 max-w-2xl text-[15px] leading-8 text-neutral-600 ${center ? "mx-auto" : ""}`}>{desc}</p>}
      </div>
    </Reveal>
  );
}

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageIntro({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return (
    <section className="page-intro px-4 pt-36 pb-14 sm:px-6 md:pt-44 md:pb-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <Reveal className="max-w-4xl">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </Reveal>
        {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
      </div>
    </section>
  );
}
import { icons } from "lucide-react";
import { aiFields } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

/** "Your All-in-One AI Partner" — AI capability fields grid. */
export function AIFields() {
  return (
    <section id="ai-fields" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI Fields"
          title={<>Your All-in-One <span className="gradient-text">AI Partner</span></>}
          subtitle="Smart AI solutions for a smarter tomorrow — across development, content, design and strategy."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiFields.map((f, i) => {
            const Icon = icons[f.icon as keyof typeof icons];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.07}>
                <article className="glass card-lift group grid h-full grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl p-5">
                  <span className="glass grid size-11 shrink-0 place-items-center rounded-xl transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5 text-accent" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold">{f.title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </span>
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

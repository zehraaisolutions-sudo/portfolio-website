import type { ReactNode } from "react";
import { Reveal, SectionHeading } from "./Reveal";

/** Numbered process/benefit steps shared by Services, AI Fields and Contact. */
export function Steps({
  eyebrow,
  title,
  subtitle,
  steps,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  steps: ReadonlyArray<{ title: string; description: string }>;
}) {
  const columns = steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${columns}`}>
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 4) * 0.06}>
              <article className="surface-elevated card-lift h-full rounded-lg border p-6">
                <span className="font-display text-3xl font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

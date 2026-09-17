import { Quote, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

/**
 * Honest client-feedback placeholder — no fake testimonials or invented reviews.
 * Replace this panel with real client quotes as they come in.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Feedback"
          title={<>Real feedback from <span className="gradient-text">real clients</span></>}
          subtitle="This space is reserved for genuine client reviews only — nothing here is scripted, paid for or invented."
        />

        <Reveal delay={0.1}>
          <div className="glass glow-ring mx-auto mt-12 max-w-3xl rounded-3xl p-8 text-center sm:p-10">
            <span className="gradient-surface mx-auto grid size-12 place-items-center rounded-2xl text-primary-foreground">
              <Quote className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">Client feedback coming soon</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Reviews are published here only after real projects wrap up, shared with the
              client's permission. Your business could be the first story on this page.
            </p>
            <a
              href="#contact"
              className="gradient-surface glow-ring mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Send className="size-4" />
              Start a project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

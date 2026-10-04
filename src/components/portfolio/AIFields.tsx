import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, icons } from "lucide-react";
import { aiFields } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";

const details = [
  ["Website copy", "Articles and scripts", "Captions"], ["Competitor research", "Summaries", "Structured insights"],
  ["Brand concepts", "Social creatives", "Visual content"], ["Video concepts", "Short-form visuals", "Promotional content"],
  ["Pitch decks", "Educational slides", "Business presentations"], ["Responsive websites", "AI-assisted workflows", "Modern interfaces"],
  ["Elementor layouts", "Editable pages", "WordPress websites"], ["Content calendars", "Campaign ideas", "Social strategy"],
];

export function AIFields({ compact = false }: { compact?: boolean }) {
  return (
    <section id="ai-fields" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="AI Fields" title={<>AI capabilities for <span className="gradient-text">real digital work</span></>} subtitle="Explore the AI-powered services I provide across content, research, design, video, websites, presentations, and digital marketing." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiFields.slice(0, compact ? 4 : aiFields.length).map((field, index) => {
            const Icon = icons[field.icon as keyof typeof icons];
            return <Reveal key={field.title} delay={(index % 4) * 0.05}>
              <article id={`field-${index + 1}`} className="surface-elevated card-lift flex h-full scroll-mt-28 flex-col rounded-lg border p-5">
                <span className="icon-tile"><Icon /></span>
                <h3 className="mt-5 text-base font-semibold">{field.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{field.description}</p>
                <ul className="mt-4 grid gap-2 text-xs text-muted-foreground">{(details[index] ?? []).map((item) => <li key={item} className="flex items-center gap-2"><Check className="size-3.5 text-accent" />{item}</li>)}</ul>
                <Button asChild variant="link" className="mt-auto w-fit px-0 pt-5 text-accent"><Link to="/contact" search={{ service: field.title }}>Learn more <ArrowRight /></Link></Button>
              </article>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
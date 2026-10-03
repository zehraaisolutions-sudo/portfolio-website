import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";

const filters = ["All", "Business Websites", "Landing Pages", "Personal Brand"] as const;

export function Portfolio({ compact = false, initialCategory = "All" }: { compact?: boolean; initialCategory?: string }) {
  const [filter, setFilter] = useState(filters.includes(initialCategory as typeof filters[number]) ? initialCategory : "All");
  const [preview, setPreview] = useState<(typeof projects)[number] | null>(null);
  const visible = projects.filter((project) => filter === "All" || project.group === filter).slice(0, compact ? 3 : projects.length);

  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title={<>Websites designed to be <span className="gradient-text">seen and used</span></>} subtitle="Every project links to its published website and is clearly identified as demo or concept work." />
        {!compact ? <div className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Filter projects">{filters.map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)} className="rounded-md">{item}</Button>)}</div> : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => <Reveal key={project.title} delay={(index % 3) * 0.06}>
            <article className="surface-elevated card-lift group flex h-full flex-col overflow-hidden rounded-lg border">
              <div className="project-preview relative grid aspect-[16/10] place-items-center overflow-hidden border-b">
                <div className="grid-pattern absolute inset-0 opacity-40" />
                <span className="absolute left-3 top-3 rounded-md border bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase text-muted-foreground backdrop-blur">{project.label}</span>
                <div className="relative px-5 text-center"><p className="text-xl font-semibold">{project.title}</p><p className="mt-2 text-xs uppercase text-accent">{project.group}</p></div>
              </div>
              <div className="flex flex-1 flex-col p-5"><p className="text-xs font-semibold uppercase text-accent">{project.category}</p><h3 className="mt-2 text-lg font-semibold">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.map((tech) => <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-[11px]">{tech}</span>)}</div>
                <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] gap-2 pt-6"><Button asChild><a href={project.url} target="_blank" rel="noopener noreferrer">View Live Website <ExternalLink /></a></Button><Button size="icon" variant="outline" onClick={() => setPreview(project)} aria-label={`Preview ${project.title}`}><Eye /></Button></div>
              </div>
            </article>
          </Reveal>)}
        </div>
      </div>
      <Dialog open={Boolean(preview)} onOpenChange={(open) => { if (!open) setPreview(null); }}><DialogContent className="surface-elevated max-w-xl rounded-lg"><DialogHeader><DialogTitle>{preview?.title}</DialogTitle><DialogDescription>{preview?.group} · {preview?.label}</DialogDescription></DialogHeader><p className="leading-relaxed text-muted-foreground">{preview?.description}</p><div className="flex flex-wrap gap-2">{preview?.tech.map((tech) => <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{tech}</span>)}</div>{preview ? <Button asChild><a href={preview.url} target="_blank" rel="noopener noreferrer">View Live Website <ExternalLink /></a></Button> : null}</DialogContent></Dialog>
    </section>
  );
}
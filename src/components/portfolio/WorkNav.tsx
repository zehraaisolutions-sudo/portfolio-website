import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";

const groups = ["Business Websites", "Landing Pages", "Personal Brand"] as const;

/** On-page navigation for the Work page: category headings with connected project links. */
export function WorkNav({ activeCategory }: { activeCategory?: string | undefined }) {
  return (
    <nav aria-label="Work categories" className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group} className="surface-elevated rounded-lg border p-5">
            <Link
              to="/work"
              search={{ category: group }}
              className={`text-xs font-semibold uppercase tracking-wide text-accent transition-opacity hover:opacity-80 ${activeCategory === group ? "underline underline-offset-4" : ""}`}
            >
              {group}
            </Link>
            <div className="mt-3 grid gap-1">
              {projects.filter((project) => project.group === group).map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <span className="min-w-0 truncate">{project.title}</span>
                  <ExternalLink className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

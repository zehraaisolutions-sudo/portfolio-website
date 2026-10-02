import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { aiFields, navLinks, projects, services } from "@/data/portfolio";
import logoAsset from "@/assets/zehra-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useTheme } from "./useTheme";

const groups = ["Business Websites", "Landing Pages", "Personal Brand"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  const close = () => { setOpen(false); setExpanded(null); };
  const dropdowns = {
    Services: services.map((item) => item.title),
    "AI Fields": aiFields.map((item) => item.title),
    Work: groups,
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <Link to="/" onClick={close} className="flex min-w-0 items-center gap-3">
          <img src={logoAsset.url} alt="Zehra AI Solutions logo" width={40} height={40} className="size-10 shrink-0 rounded-full" />
          <span className="truncate font-display text-base font-semibold sm:text-lg">Zehra <span className="text-accent">AI</span> Solutions</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const items = dropdowns[link.label as keyof typeof dropdowns];
            return (
              <div key={link.href} className="group relative">
                <Link to={link.href} activeOptions={{ exact: link.href === "/" }} className="inline-flex h-11 items-center gap-1 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-foreground">
                  {link.label}{items ? <ChevronDown className="size-3.5" /> : null}
                </Link>
                {items ? (
                  <div className="surface-elevated invisible absolute left-0 top-[calc(100%+8px)] w-72 translate-y-2 rounded-lg border p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {link.label === "Work" ? groups.map((group) => (
                      <div key={group} className="p-2">
                        <Link to="/work" search={{ category: group }} className="text-xs font-semibold uppercase text-accent">{group}</Link>
                        <div className="mt-1 grid gap-1">{projects.filter((p) => p.group === group).map((p) => <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{p.title}</a>)}</div>
                      </div>
                    )) : items.map((item, index) => (
                      <Link key={item} to={link.href} hash={link.label === "Services" ? `service-${index + 1}` : `field-${index + 1}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{item}</Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Button onClick={toggle} size="icon" variant="ghost" className="ml-1 rounded-full" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? <Sun /> : <Moon />}</Button>
          <Button asChild className="ml-1 rounded-md"><Link to="/contact">Work with me</Link></Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <Button onClick={toggle} size="icon" variant="ghost" className="rounded-full" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? <Sun /> : <Moon />}</Button>
          <Button onClick={() => setOpen((value) => !value)} size="icon" variant="outline" aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
        </div>
      </nav>
      {open ? (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t bg-background px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => {
              const items = dropdowns[link.label as keyof typeof dropdowns];
              return <div key={link.href} className="border-b border-border/60 py-1">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                  <Link to={link.href} onClick={close} className="min-w-0 py-3 text-sm font-semibold">{link.label}</Link>
                  {items ? <Button size="icon" variant="ghost" onClick={() => setExpanded(expanded === link.label ? null : link.label)} aria-label={`Expand ${link.label}`}><ChevronDown className={`transition-transform ${expanded === link.label ? "rotate-180" : ""}`} /></Button> : null}
                </div>
                {items && expanded === link.label ? <div className="grid gap-1 pb-3 pl-3">{items.map((item, index) => <Link key={item} to={link.href} hash={link.label === "Services" ? `service-${index + 1}` : link.label === "AI Fields" ? `field-${index + 1}` : undefined} search={link.label === "Work" ? { category: item } : undefined} onClick={close} className="py-2 text-sm text-muted-foreground">{item}</Link>)}</div> : null}
              </div>;
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
import { Link } from "@tanstack/react-router";
import { Bot, Globe2, LayoutTemplate, Megaphone, PanelsTopLeft } from "lucide-react";

const items = [
  { label: "Websites", to: "/services" as const, hash: "service-1", icon: Globe2 },
  { label: "Landing Pages", to: "/services" as const, hash: "service-2", icon: PanelsTopLeft },
  { label: "AI Services", to: "/ai-fields" as const, hash: "field-1", icon: Bot },
  { label: "WordPress", to: "/ai-fields" as const, hash: "field-7", icon: LayoutTemplate },
  { label: "Social Media", to: "/ai-fields" as const, hash: "field-8", icon: Megaphone },
];

export function QuickNavigator() {
  return <nav aria-label="Services quick navigator" className="sticky top-24 z-30 mx-auto max-w-5xl px-4 sm:px-6"><div className="surface-elevated grid grid-cols-5 gap-1 rounded-lg border p-1.5 shadow-xl">{items.map((item) => <Link key={item.label} to={item.to} hash={item.hash} className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-md px-1 py-2 text-center text-[10px] font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex-row sm:px-3 sm:text-xs"><item.icon className="size-4 shrink-0 text-accent" /><span className="truncate">{item.label}</span></Link>)}</div></nav>;
}
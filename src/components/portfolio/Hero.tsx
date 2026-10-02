import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Bot, Globe2, PenTool, Sparkles, icons } from "lucide-react";
import { heroBadges } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/zehra-logo.png.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(860px,100svh)] items-center px-4 pt-28 pb-16 sm:px-6 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,.8fr)] lg:items-center">
        <div>
        <Reveal>
          <span className="section-kicker inline-flex items-center gap-2">
            <Sparkles className="size-3.5 text-accent" />
            AI Freelancer · Website Developer · Consultant
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-7xl">
            AI-Powered Digital Solutions
            <span className="gradient-text block">for Modern Businesses</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I help businesses, entrepreneurs, creators, and professionals build modern websites,
            AI-powered digital experiences, content systems, and practical AI solutions.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {heroBadges.map((b) => {
              const Icon = icons[b.icon as keyof typeof icons];
              return (
                <li
                  key={b.label}
                   className="surface-elevated inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold sm:text-sm"
                >
                  <Icon className="size-4 text-accent" />
                  {b.label}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md px-6"><Link to="/work">View My Work <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6"><Link to="/contact">Let&apos;s Work Together</Link></Button>
          </div>
        </Reveal>
        </div>
        <Reveal delay={0.18} className="relative mx-auto w-full max-w-md">
          <div className="hero-visual relative aspect-square overflow-hidden rounded-lg border">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <img src={logoAsset.url} alt="Zehra AI Solutions" width={220} height={220} className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-2xl sm:size-52" />
            <div className="surface-elevated absolute left-4 top-4 flex items-center gap-2 rounded-md px-3 py-2 text-xs"><Bot className="size-4 text-accent" /> AI solutions</div>
            <div className="surface-elevated absolute bottom-4 left-4 flex items-center gap-2 rounded-md px-3 py-2 text-xs"><Globe2 className="size-4 text-accent" /> Modern websites</div>
            <div className="surface-elevated absolute bottom-4 right-4 flex items-center gap-2 rounded-md px-3 py-2 text-xs"><PenTool className="size-4 text-accent" /> Digital content</div>
          </div>
        </Reveal>
      </div>
      <a href="#home-preview" aria-label="Explore services" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block"><ArrowDown className="size-5 animate-bounce" /></a>
    </section>
  );
}

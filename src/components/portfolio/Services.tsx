import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";

const features = [
  ["Responsive page layouts", "Clear calls to action", "Professional brand presentation"],
  ["Campaign-focused structure", "Focused messaging", "Mobile-first experience"],
  ["Personal brand storytelling", "Project showcase", "Contact-ready structure"],
  ["Product presentation", "Shopping flow design", "Checkout-ready interface"],
  ["AI-assisted experiences", "Smart interactions", "Practical automation planning"],
];

export function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title={<>Practical digital solutions, <span className="gradient-text">built with purpose</span></>} subtitle="Practical AI-powered digital solutions designed to help businesses and professionals build, launch, and grow online." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.slice(0, compact ? 3 : services.length).map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.07} className={`${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <article id={`service-${index + 1}`} className="surface-elevated card-lift flex h-full scroll-mt-28 flex-col rounded-lg border p-6">
                <div className="flex items-start justify-between"><span className="icon-tile"><service.icon /></span><span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span></div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-5 grid gap-2 text-sm">{(features[index] ?? []).map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-4 text-accent" />{feature}</li>)}</ul>
                <Button asChild variant="ghost" className="mt-6 w-fit px-0 text-accent hover:bg-transparent hover:text-accent/80"><Link to="/contact" search={{ service: service.title }}>Get Started <ArrowRight /></Link></Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
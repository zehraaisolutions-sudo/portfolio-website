import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function WorkWithMe() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <Reveal className="cta-panel mx-auto max-w-6xl overflow-hidden rounded-lg px-6 py-12 text-center sm:px-10 md:py-16">
        <p className="section-kicker">Start a conversation</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl md:text-5xl">
          Have a project in mind? Let&apos;s build it with AI.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Share your goals and explore a practical website or AI-powered solution built around your needs.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-md">
          <Link to="/contact">Start a Project <ArrowRight /></Link>
        </Button>
      </Reveal>
    </section>
  );
}
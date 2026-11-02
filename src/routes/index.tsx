import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { PracticalServices } from "@/components/portfolio/PracticalServices";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { AIFields } from "@/components/portfolio/AIFields";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Certificates } from "@/components/portfolio/Certificates";
import { WhyChooseMe } from "@/components/portfolio/WhyChooseMe";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";
import { Button } from "@/components/ui/button";

const title = "Zehra AI Solutions | AI Freelancer & AI Website Developer";
const description = "Zehra AI Solutions provides AI-powered websites, AI content, research, design, video, WordPress, social media and digital solutions for businesses and professionals.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

const stats = [
  { value: "7+", label: "Portfolio Projects" },
  { value: "9+", label: "Web Services" },
  { value: "8+", label: "AI Fields" },
  { value: "3+", label: "Completed Courses" },
];

function StatsStrip() {
  return (
    <section className="px-4 sm:px-6">
      <div className="surface-elevated mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-lg border p-6 sm:p-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="gradient-text font-display text-4xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return <main><Hero /><StatsStrip /><About /><Skills /><FeaturedProjects /><PracticalServices /><div id="home-preview"><Services compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/services">Explore all services <ArrowRight /></Link></Button></div><AIFields compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/ai-fields">Explore all AI fields <ArrowRight /></Link></Button></div><Portfolio compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/work">View all work <ArrowRight /></Link></Button></div><Certificates /><WhyChooseMe /><Testimonials /><WorkWithMe /><Contact /></div></main>;
}
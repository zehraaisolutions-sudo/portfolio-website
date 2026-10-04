import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { AIFields } from "@/components/portfolio/AIFields";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Certificates } from "@/components/portfolio/Certificates";
import { WhyChooseMe } from "@/components/portfolio/WhyChooseMe";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";
import { QuickNavigator } from "@/components/portfolio/QuickNavigator";
import { Button } from "@/components/ui/button";

const title = "Zehra AI Solutions | AI Freelancer & AI Website Developer";
const description = "Zehra AI Solutions provides AI-powered websites, AI content, research, design, video, WordPress, social media and digital solutions for businesses and professionals.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

function HomePage() {
  return <main><Hero /><div id="home-preview"><QuickNavigator /><Services compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/services">Explore all services <ArrowRight /></Link></Button></div><AIFields compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/ai-fields">Explore all AI fields <ArrowRight /></Link></Button></div><Portfolio compact /><div className="-mt-14 mb-8 flex justify-center"><Button asChild variant="outline"><Link to="/work">View all work <ArrowRight /></Link></Button></div><Certificates /><WhyChooseMe /><Testimonials /><WorkWithMe /></div></main>;
}
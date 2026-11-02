import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { QuickNavigator } from "@/components/portfolio/QuickNavigator";
import { PracticalServices } from "@/components/portfolio/PracticalServices";
import { Services } from "@/components/portfolio/Services";
import { Steps } from "@/components/portfolio/Steps";
import { FAQ } from "@/components/portfolio/FAQ";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const processSteps = [
  { title: "Discuss Requirements", description: "We talk through your goals, audience, content and the pages or features you need." },
  { title: "Plan the Website or Service", description: "I prepare a clear structure, scope and timeline before any work begins." },
  { title: "Build and Review", description: "I build the website or deliver the service and share progress for your feedback." },
  { title: "Deliver and Support", description: "You receive the finished work with guidance, plus support after delivery." },
] as const;

const title = "Services | Zehra AI Solutions";
const description = "Business websites, landing pages, portfolio websites, e-commerce websites and AI-powered websites by Zehra AI Solutions.";
export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: ServicesPage });
function ServicesPage() { return <main><PageIntro eyebrow="What I offer" title="Services" description="Practical AI-powered digital solutions designed to help businesses and professionals build, launch, and grow online." /><QuickNavigator /><PracticalServices /><Services /><Steps eyebrow="Process" title={<>How I <span className="gradient-text">work</span></>} subtitle="A simple, clear process from your first message to final delivery." steps={processSteps} /><FAQ /><WorkWithMe /></main>; }
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Skills } from "@/components/portfolio/Skills";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const title = "About Zehra | AI Freelancer & Website Developer";
const description = "Learn about Zehra's AI, website development, content and digital marketing capabilities at Zehra AI Solutions.";
export const Route = createFileRoute("/about")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: AboutPage });
function AboutPage() { return <main><PageIntro eyebrow="About Zehra" title="AI creativity meets modern website development" description="A focused introduction to my skills, services, career direction and practical AI-assisted approach." /><About /><Skills /><WorkWithMe /></main>; }
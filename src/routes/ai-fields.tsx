import { createFileRoute } from "@tanstack/react-router";
import { AIFields } from "@/components/portfolio/AIFields";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { QuickNavigator } from "@/components/portfolio/QuickNavigator";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const title = "AI Fields | Zehra AI Solutions";
const description = "Explore AI writing, research, design, video, presentations, website development, WordPress and social media services.";
export const Route = createFileRoute("/ai-fields")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: AIFieldsPage });
function AIFieldsPage() { return <main><PageIntro eyebrow="AI capabilities" title="AI Fields" description="Explore the AI-powered services I provide across content, research, design, video, websites, presentations, and digital marketing." /><QuickNavigator /><AIFields /><WorkWithMe /></main>; }
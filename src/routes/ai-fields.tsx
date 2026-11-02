import { createFileRoute } from "@tanstack/react-router";
import { AIFields } from "@/components/portfolio/AIFields";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { QuickNavigator } from "@/components/portfolio/QuickNavigator";
import { Steps } from "@/components/portfolio/Steps";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const aiBenefits = [
  { title: "Save Time", description: "AI tools speed up research, writing and production so your work moves faster." },
  { title: "Create Content Faster", description: "Blogs, visuals, videos and social posts are produced in a fraction of the time." },
  { title: "Improve Online Presence", description: "Consistent, polished content strengthens your brand across every platform." },
  { title: "Get Professional Digital Support", description: "Practical, expert-led help for websites, content and digital marketing." },
] as const;

const title = "AI Fields | Zehra AI Solutions";
const description = "Explore AI writing, research, design, video, presentations, website development, WordPress and social media services.";
export const Route = createFileRoute("/ai-fields")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: AIFieldsPage });
function AIFieldsPage() { return <main><PageIntro eyebrow="AI capabilities" title="AI Fields" description="Explore the AI-powered services I provide across content, research, design, video, websites, presentations, and digital marketing." /><QuickNavigator /><AIFields /><Steps eyebrow="Why AI" title={<>How AI can help <span className="gradient-text">your business</span></>} steps={aiBenefits} /><WorkWithMe /></main>; }
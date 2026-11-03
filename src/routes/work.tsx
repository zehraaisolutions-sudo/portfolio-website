import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const title = "Work | Zehra AI Solutions";
const description = "Browse live demo and concept websites by Zehra AI Solutions, grouped by business websites, landing pages and personal brand.";
export const Route = createFileRoute("/work")({ validateSearch: (search) => z.object({ category: z.string().optional() }).parse(search), head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: WorkPage });
function WorkPage() { const { category } = Route.useSearch(); return <main><PageIntro eyebrow="Portfolio" title="Work" description="Explore published demo and concept websites across business, campaign and personal brand categories." /><Portfolio initialCategory={category} /><WorkWithMe /></main>; }
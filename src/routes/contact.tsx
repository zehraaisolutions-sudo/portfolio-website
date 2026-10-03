import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Contact } from "@/components/portfolio/Contact";
import { FAQ } from "@/components/portfolio/FAQ";
import { PageIntro } from "@/components/portfolio/PageIntro";

const title = "Contact | Zehra AI Solutions";
const description = "Start a website or AI-powered digital project with Zehra AI Solutions in Pakistan or internationally.";
export const Route = createFileRoute("/contact")({ validateSearch: (search) => z.object({ service: z.string().optional() }).parse(search), head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: ContactPage });
function ContactPage() { const { service } = Route.useSearch(); return <main><PageIntro eyebrow="Start a project" title="Let's Work Together" description="Tell me what you want to build and which service you need. You can also contact me directly through email or WhatsApp Business." /><Contact initialService={service} /><FAQ /></main>; }
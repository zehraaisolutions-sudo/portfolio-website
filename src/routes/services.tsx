import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { QuickNavigator } from "@/components/portfolio/QuickNavigator";
import { Services } from "@/components/portfolio/Services";
import { FAQ } from "@/components/portfolio/FAQ";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const title = "Services | Zehra AI Solutions";
const description = "Business websites, landing pages, portfolio websites, e-commerce websites and AI-powered websites by Zehra AI Solutions.";
export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: ServicesPage });
function ServicesPage() { return <main><PageIntro eyebrow="What I offer" title="Services" description="Practical AI-powered digital solutions designed to help businesses and professionals build, launch, and grow online." /><QuickNavigator /><Services /><FAQ /><WorkWithMe /></main>; }
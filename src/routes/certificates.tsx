import { createFileRoute } from "@tanstack/react-router";
import { Certificates } from "@/components/portfolio/Certificates";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { WorkWithMe } from "@/components/portfolio/WorkWithMe";

const title = "Certificates | Zehra AI Solutions";
const description = "View Zehra's existing AI, vibe coding and AI social media marketing training certificates.";
export const Route = createFileRoute("/certificates")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: CertificatesPage });
function CertificatesPage() { return <main><PageIntro eyebrow="Professional learning" title="Certificates" description="A transparent record of completed AI, coding and digital marketing training using the original certificates." /><Certificates /><WorkWithMe /></main>; }
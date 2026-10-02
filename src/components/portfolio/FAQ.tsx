import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./Reveal";

const faqs = [
  ["What services do you provide?", "I provide business websites, landing pages, portfolio and e-commerce websites, plus AI-assisted content, research, design, video, presentations and social media services."],
  ["Can you build custom websites?", "Yes. The scope, pages and features are planned around the goals and content of each project."],
  ["Do you provide AI-powered solutions?", "Yes. I build AI-assisted website experiences and practical workflows where they meaningfully support the project."],
  ["Do you work with international clients?", "Project enquiries are welcome from Pakistan and international clients, with communication handled online."],
  ["Can you create WordPress websites?", "Yes. WordPress and Elementor website development is available alongside modern React-based website work."],
  ["How can a client start a project?", "Use the project enquiry form or WhatsApp Business to share your goals, required service and project details."],
] as const;

export function FAQ() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Answers before we begin" subtitle="Clear information about services and starting a project." />
        <Accordion type="single" collapsible className="surface-elevated mt-10 rounded-lg border px-5 sm:px-7">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`}>
              <AccordionTrigger className="py-5 text-base hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="max-w-3xl leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
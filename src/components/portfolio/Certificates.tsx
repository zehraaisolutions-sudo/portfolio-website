import { Award, BadgeCheck, CalendarDays, Clock } from "lucide-react";
import type { Certificate } from "@/data/portfolio";
import socialMediaCert from "@/assets/certificate-ai-social-media-marketing.jpg";
import vibeCodingCert from "@/assets/certificate-vibe-coding.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const certificates: Certificate[] = [
  {
    title: "AI Social Media Marketing Training",
    issuer: "Hassan Digital Skills",
    issued: "01 August 2026",
    duration: "1.5 Months",
    meta: "Awarded to Ismat Zehra",
    image: socialMediaCert,
  },
  {
    title: "Vibe Coding — Basic to Advance Level Training",
    issuer: "NDA Digital Skills",
    issued: "02 August 2026",
    duration: "1.5 Months",
    meta: "Awarded to Ismat Zehra",
    image: vibeCodingCert,
  },
];

/** Verified certificates, shown one by one. */
export function Certificates() {
  return (
    <section id="certificates" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Certificates"
          title={<>Verified <span className="gradient-text">AI Training</span></>}
          subtitle="Recognised training in AI-assisted development and AI social media marketing."
        />

        <div className="mt-12 grid gap-8">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="glass card-lift grid gap-6 overflow-hidden rounded-3xl p-4 sm:p-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
                <a
                  href={c.image}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-ring block overflow-hidden rounded-2xl"
                  aria-label={`View full certificate: ${c.title}`}
                >
                  <img
                    src={c.image}
                    alt={`${c.title} certificate issued by ${c.issuer}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </a>

                <div className="min-w-0 px-1 pb-2 md:px-2">
                  <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-accent">
                    <Award className="size-3.5" /> {c.issuer}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold sm:text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.meta}</p>

                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CalendarDays className="size-4 text-accent" /> Issued {c.issued}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="size-4 text-accent" /> Duration {c.duration}
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeCheck className="size-4 text-accent" /> Verifiable certificate
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

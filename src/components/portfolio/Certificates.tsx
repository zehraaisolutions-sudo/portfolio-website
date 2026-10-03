import { useState } from "react";
import { ArrowLeft, ArrowRight, Award, CalendarDays, Eye } from "lucide-react";
import type { Certificate } from "@/data/portfolio";
import socialMediaCert from "@/assets/certificate-ai-social-media-marketing.jpg";
import vibeCodingCert from "@/assets/certificate-vibe-coding.jpg";
import aiTrainingCert from "@/assets/certificate-ai-training.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";

const certificates: Certificate[] = [
  { title: "AI Social Media Marketing Training", issuer: "Hassan Digital Skills", issued: "01 August 2026", duration: "1.5 Months", meta: "Awarded to Ismat Zehra", image: socialMediaCert },
  { title: "Vibe Coding — Basic to Advance Level Training", issuer: "NDA Digital Skills", issued: "02 August 2026", duration: "1.5 Months", meta: "Awarded to Ismat Zehra", image: vibeCodingCert },
  { title: "Artificial Intelligence — Basic to Advance Level Training", issuer: "NDA Digital Skills", issued: "02 September 2026", duration: "1.5 Months", meta: "Awarded to Ismat Zehra", image: aiTrainingCert.url },
];

export function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? null : certificates[selected];
  const move = (step: number) => setSelected((value) => value === null ? 0 : (value + step + certificates.length) % certificates.length);
  return <section id="certificates" className="px-4 py-20 sm:px-6 md:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Certificates" title={<>Verified learning, <span className="gradient-text">presented clearly</span></>} subtitle="Existing training certificates in AI, vibe coding and social media marketing." />
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{certificates.map((certificate, index) => <Reveal key={certificate.title} delay={index * 0.06}><article className="surface-elevated card-lift flex h-full flex-col overflow-hidden rounded-lg border"><button type="button" onClick={() => setSelected(index)} className="group aspect-[1.4] overflow-hidden border-b"><img src={certificate.image} alt={`${certificate.title} certificate issued by ${certificate.issuer}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></button><div className="flex flex-1 flex-col p-5"><span className="flex items-center gap-2 text-xs font-semibold text-accent"><Award className="size-4" />{certificate.issuer}</span><h3 className="mt-3 text-base font-semibold">{certificate.title}</h3><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" />{certificate.issued}</p><Button variant="outline" onClick={() => setSelected(index)} className="mt-auto pt-4"><Eye /> View Certificate</Button></div></article></Reveal>)}</div>
  </div><Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="surface-elevated max-h-[92vh] max-w-5xl overflow-y-auto rounded-lg p-4 sm:p-6"><DialogHeader><DialogTitle>{current?.title}</DialogTitle><DialogDescription>{current?.issuer} · {current?.issued}</DialogDescription></DialogHeader>{current ? <img src={current.image} alt={`${current.title} full certificate`} className="max-h-[70vh] w-full object-contain" /> : null}<div className="flex justify-between"><Button variant="outline" onClick={() => move(-1)}><ArrowLeft /> Previous</Button><Button variant="outline" onClick={() => move(1)}>Next <ArrowRight /></Button></div></DialogContent></Dialog></section>;
}
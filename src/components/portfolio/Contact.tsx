import { useState, useEffect, type FormEvent } from "react";
import { contactSchema } from "@/lib/contact-schema";
import { practicalServices } from "@/data/profile";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { socials, services, whatsapp } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { CVButton } from "./ProfileActions";
import { Reveal } from "./Reveal";

export function Contact({ initialService = "" }: { initialService?: string | undefined }) {
  const [startedAt, setStartedAt] = useState(0);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  useEffect(() => { setStartedAt(Date.now()); }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const input = contactSchema.safeParse({ name: fields.get("Name"), email: fields.get("Email"), service: fields.get("Service") ?? "", message: fields.get("Message"), website: fields.get("website") ?? "", startedAt });
    setFailed(false);
    if (!input.success) { setFailed(true); setStatus(input.error.issues[0]?.message ?? "Please check your details."); return; }
    setPending(true); setStatus("");
    try {
      const response = await fetch("/api/public/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input.data) });
      const result = await response.json() as { saved?: boolean; emailed?: boolean; error?: string };
      if (!response.ok || !result.saved) throw new Error(result.error ?? "Your message could not be submitted.");
      setStatus(result.emailed ? "Your message was submitted and emailed successfully." : "Your message has been saved securely. Email delivery is not enabled yet; you can also email or WhatsApp me directly.");
      form.reset(); setStartedAt(Date.now());
    } catch (error) { setFailed(true); setStatus(error instanceof Error ? error.message : "Please try again."); }
    finally { setPending(false); }
  }
  return <section id="contact" className="px-4 py-20 sm:px-6 md:py-28"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,.9fr)]">
    <Reveal className="surface-elevated rounded-lg border p-6 sm:p-8"><p className="section-kicker">Project inquiry</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let&apos;s Work Together</h2><p className="mt-3 text-muted-foreground">Tell me about your project. You can also reach me directly by email or WhatsApp.</p>
      <form onSubmit={submit} className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-medium">Name<input name="Name" required maxLength={100} autoComplete="name" className="form-control" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-medium">Email<input name="Email" type="email" required maxLength={255} autoComplete="email" className="form-control" placeholder="you@company.com" /></label><label className="grid gap-2 text-sm font-medium">Service<select name="Service" defaultValue={initialService} className="form-control"><option value="">Select a service (optional)</option>{[...services, ...practicalServices].map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label className="grid gap-2 text-sm font-medium">Message<textarea name="Message" required minLength={10} maxLength={3000} rows={6} className="form-control resize-none" placeholder="Tell me about your goals, audience and required pages or features." /></label><label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><Button type="submit" size="lg" disabled={pending}><Send />{pending ? "Sending…" : "Send Message"}</Button>{status ? <p role={failed ? "alert" : "status"} className={failed ? "text-sm text-destructive" : "text-sm text-muted-foreground"}>{status}</p> : null}</form>
    </Reveal>
    <Reveal delay={0.1} className="grid content-start gap-4"><a href="mailto:hello@zehraaisolutions.com" className="contact-row"><span className="icon-tile"><Mail /></span><span className="min-w-0"><span className="block text-xs uppercase text-muted-foreground">Professional email</span><span className="block truncate font-semibold">hello@zehraaisolutions.com</span></span></a><a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="contact-row"><span className="icon-tile"><MessageCircle /></span><span><span className="block text-xs uppercase text-muted-foreground">WhatsApp Business</span><span className="font-semibold">{whatsapp.display}</span></span></a><div className="contact-row"><span className="icon-tile"><MapPin /></span><span><span className="block text-xs uppercase text-muted-foreground">Location</span><span className="font-semibold">Pakistan</span></span></div><CVButton className="w-full justify-center" /><div className="surface-elevated rounded-lg border p-5"><p className="text-xs font-semibold uppercase text-muted-foreground">Connect</p><div className="mt-4 flex flex-wrap gap-2">{socials.map((social) => <Button key={social.label} asChild variant="outline" size="sm"><a href={social.href} target="_blank" rel="noopener noreferrer">{social.icon ? <social.icon /> : null}{social.label}</a></Button>)}</div></div></Reveal>
  </div></section>;
}
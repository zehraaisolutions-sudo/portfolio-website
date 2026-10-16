import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { practicalServices } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Reveal, SectionHeading } from './Reveal';

export function PracticalServices() { return <section id="digital-services" className="px-4 py-16 sm:px-6 md:py-24"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Services" title="Support for your next digital step" /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{practicalServices.map((service) => <Reveal key={service.title}><article className="card-lift h-full rounded-lg border bg-card p-6"><span className="icon-tile"><service.icon /></span><h3 className="mt-5 text-lg font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p></article></Reveal>)}</div><div className="mt-8 flex justify-center"><Button asChild><Link to="/contact">Contact Me<ArrowRight /></Link></Button></div></div></section>; }
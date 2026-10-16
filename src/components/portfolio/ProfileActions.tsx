import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socials } from '@/data/portfolio';

export function CVButton() { return <Button variant="outline" disabled><Download /> CV · Coming Soon</Button>; }
export function SocialIcons() { return <div className="flex flex-wrap gap-2">{socials.map((social) => <Button asChild size="icon" variant="ghost" key={social.label} title={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>{social.icon ? <social.icon className="size-5" /> : social.label}</a></Button>)}</div>; }
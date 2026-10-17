import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cv, socials } from '@/data/portfolio';

export function CVButton({ className = '' }: { className?: string }) {
  return (
    <Button variant="outline" size="lg" asChild className={className}>
      <a href={cv.href} type="application/pdf" target="_blank" rel="noopener noreferrer">
        <Download /> {cv.label}
      </a>
    </Button>
  );
}
export function SocialIcons() { return <div className="flex flex-wrap gap-2">{socials.map((social) => <Button asChild size="icon" variant="ghost" key={social.label} title={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>{social.icon ? <social.icon className="size-5" /> : social.label}</a></Button>)}</div>; }

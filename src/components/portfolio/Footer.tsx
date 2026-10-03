import { Link } from "@tanstack/react-router";
import { aiFields, navLinks, services, socials } from "@/data/portfolio";
import logoAsset from "@/assets/zehra-logo.png.asset.json";

export function Footer() {
  return <footer className="border-t border-border/70 bg-card/40 px-4 py-12 sm:px-6"><div className="mx-auto max-w-7xl"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
    <div><Link to="/" className="flex items-center gap-3"><img src={logoAsset.url} alt="Zehra AI Solutions logo" width={42} height={42} className="size-10 rounded-full" /><span className="font-display text-lg font-semibold">Zehra AI Solutions</span></Link><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Modern websites, AI-assisted digital experiences and practical creative services for businesses and professionals.</p></div>
    <FooterGroup title="Quick Links" items={navLinks.map((item) => ({ label: item.label, href: item.href }))} />
    <FooterGroup title="Services" items={services.map((item) => ({ label: item.title, href: "/services" }))} />
    <FooterGroup title="AI Fields" items={aiFields.map((item) => ({ label: item.title.replace(" Services", ""), href: "/ai-fields" }))} />
    <div><h2 className="text-sm font-semibold">Connect</h2><ul className="mt-4 grid gap-2.5">{socials.map((social) => <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">{social.label}</a></li>)}</ul><h2 className="mt-7 text-sm font-semibold">Work</h2><ul className="mt-3 grid gap-2 text-sm text-muted-foreground"><li><Link to="/work" search={{ category: "Business Websites" }}>Business Websites</Link></li><li><Link to="/work" search={{ category: "Landing Pages" }}>Landing Pages</Link></li><li><Link to="/work" search={{ category: "Personal Brand" }}>Personal Brand</Link></li></ul></div>
  </div><p className="mt-10 border-t pt-6 text-xs text-muted-foreground">© 2026 Zehra AI Solutions. All rights reserved.</p></div></footer>;
}

function FooterGroup({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return <div><h2 className="text-sm font-semibold">{title}</h2><ul className="mt-4 grid gap-2.5">{items.map((item) => <li key={`${item.href}-${item.label}`}><Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.label}</Link></li>)}</ul></div>;
}
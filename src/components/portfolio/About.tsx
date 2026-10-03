import { BrainCircuit, Code2, Megaphone, Sparkles } from "lucide-react";
import logoAsset from "@/assets/zehra-logo.png.asset.json";
import { Reveal, SectionHeading } from "./Reveal";

const categories = [
  { title: "AI", icon: BrainCircuit, skills: ["AI Tools", "Prompt Engineering", "AI Content Creation", "AI Research", "AI Video", "AI Design"] },
  { title: "Web", icon: Code2, skills: ["Website Development", "Vibe Coding", "Responsive Design", "WordPress", "Elementor"] },
  { title: "Digital", icon: Megaphone, skills: ["Social Media Marketing", "Content Strategy", "Digital Marketing"] },
  { title: "Freelancing", icon: Sparkles, skills: ["Project communication", "Research-led planning", "AI-assisted delivery"] },
];

export function About() {
  return <section id="about" className="px-4 py-20 sm:px-6 md:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="About" title={<>Creative thinking, <span className="gradient-text">practical execution</span></>} subtitle="AI and web expertise brought together to create polished digital work for modern businesses and professionals." />
    <div className="mt-12 grid gap-5 lg:grid-cols-3"><Reveal className="surface-elevated overflow-hidden rounded-lg border p-7 lg:row-span-2"><img src={logoAsset.url} alt="Zehra AI Solutions brand portrait" width={180} height={180} className="mx-auto size-40 rounded-full object-cover" /><h3 className="mt-7 text-2xl font-semibold">Hi, I&apos;m Zehra.</h3><p className="mt-4 leading-relaxed text-muted-foreground">I&apos;m an AI freelancer and website developer focused on modern websites, AI-assisted content, research, design and practical digital solutions. My direction combines clear communication, thoughtful design and efficient AI-supported workflows.</p></Reveal>
      {categories.map((category, index) => <Reveal key={category.title} delay={(index % 2) * 0.06}><article className="surface-elevated card-lift h-full rounded-lg border p-6"><span className="icon-tile"><category.icon /></span><h3 className="mt-5 text-lg font-semibold">{category.title}</h3><div className="mt-4 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill} className="rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">{skill}</span>)}</div></article></Reveal>)}
    </div></div></section>;
}
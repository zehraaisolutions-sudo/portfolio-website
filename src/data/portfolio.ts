/** Central content source — edit these arrays to customize the site. */

import {
  Building2,
  Facebook,
  Github,
  LayoutTemplate,
  Linkedin,
  MessageCircle,
  Bot,
  Rocket,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  title: string;
  category: string;
  /** Honest label: "Demo Project" or "Concept Project" — not client work. */
  label: "Demo Project" | "Concept Project";
  description: string;
  tech: string[];
  url: string;
  github: string;
  group: "Business Websites" | "Landing Pages" | "Personal Brand";
};

export const projects: Project[] = [
  {
    title: "Restaurant Website",
    category: "Hospitality",
    label: "Demo Project",
    description:
      "An appetite-driven restaurant experience with menu highlights, reservations and a warm editorial layout.",
    tech: ["React", "Tailwind CSS", "AI Assisted"],
    url: "https://zehra-ai-restaurant.lovable.app/",
    github: "https://github.com/",
    group: "Business Websites",
  },
  {
    title: "Dentist Website",
    category: "Healthcare",
    label: "Concept Project",
    description:
      "A calm, trust-first clinic site with treatment pages, team credibility and booking-focused CTAs.",
    tech: ["React", "Tailwind CSS", "SEO"],
    url: "https://pinnacle-smile-solutions.lovable.app/",
    github: "https://github.com/",
    group: "Business Websites",
  },
  {
    title: "Gym Landing Page",
    category: "Fitness",
    label: "Demo Project",
    description:
      "High-energy conversion landing page with bold typography, program cards and membership pricing.",
    tech: ["React", "Motion", "Tailwind CSS"],
    url: "https://golden-kinetic-forge.lovable.app/",
    github: "https://github.com/",
    group: "Landing Pages",
  },
  {
    title: "Real Estate Website",
    category: "Property",
    label: "Concept Project",
    description:
      "Premium property showcase with listing grids, filters and elegant agent-focused storytelling.",
    tech: ["React", "Tailwind CSS", "Responsive"],
    url: "https://luxury-property-pros.lovable.app/",
    github: "https://github.com/",
    group: "Business Websites",
  },
  {
    title: "AI Chatbot Landing Page",
    category: "AI Product",
    label: "Concept Project",
    description:
      "Product launch page for a conversational AI assistant with feature blocks and animated demos.",
    tech: ["React", "Motion", "AI UX"],
    url: "https://aurora-chat-zen.lovable.app/",
    github: "https://github.com/",
    group: "Landing Pages",
  },
  {
    title: "AI SaaS Landing Page",
    category: "SaaS",
    label: "Concept Project",
    description:
      "Skill-building SaaS funnel with pricing tiers, social proof and a crisp onboarding narrative.",
    tech: ["React", "Tailwind CSS", "Conversion"],
    url: "https://build-your-skillset.lovable.app/",
    github: "https://github.com/",
    group: "Personal Brand",
  },
  {
    title: "Travel Agency Website",
    category: "Travel",
    label: "Demo Project",
    description:
      "Elegant travel brand site with destination cards, itineraries and immersive imagery.",
    tech: ["React", "Tailwind CSS", "Motion"],
    url: "https://globetrotter-elegance.lovable.app/",
    github: "https://github.com/",
    group: "Business Websites",
  },
];

export const services = [
  {
    title: "Business Websites",
    description: "Credible, structured multi-page sites that build trust and win customers.",
    icon: Building2,
  },
  {
    title: "Landing Pages",
    description: "Conversion-focused single pages designed around one clear business goal.",
    icon: Rocket,
  },
  {
    title: "Portfolio Websites",
    description: "Personal brand sites that make creators and freelancers look premium.",
    icon: LayoutTemplate,
  },
  {
    title: "E-commerce Websites",
    description: "Online stores with product listings, cart flows and checkout-ready pages.",
    icon: ShoppingBag,
  },
  {
    title: "AI-Powered Websites",
    description: "Websites wired with chat, automation and AI-driven product features.",
    icon: Bot,
  },
] as const satisfies ReadonlyArray<{ title: string; description: string; icon: LucideIcon }>;

/** AI-powered service fields — "Your All-in-One AI Partner". */
export const aiFields = [
  { title: "AI Writing Services", description: "Blogs, brand copy and long-form content that ranks.", icon: "PenLine" },
  { title: "AI Research Services", description: "Deep research, summaries and insight reports.", icon: "Search" },
  { title: "AI Design Services", description: "Brand visuals, graphics and UI powered by AI.", icon: "Paintbrush" },
  { title: "AI Video Services", description: "Scripted, generated and edited AI video content.", icon: "Video" },
  {
    title: "AI Presentation Services",
    description: "Investor and client decks built fast and beautifully.",
    icon: "Presentation",
  },
  {
    title: "AI Website Development",
    description: "AI-accelerated websites built end to end.",
    icon: "MonitorSmartphone",
  },
  {
    title: "AI WordPress Development with Elementor",
    description: "Custom Elementor builds you can edit yourself.",
    icon: "LayoutTemplate",
  },
  {
    title: "AI Social Media Marketing",
    description: "Content plans, creatives and growth campaigns.",
    icon: "Megaphone",
  },
] as const;

/** Verified training certificates. */
export type Certificate = {
  title: string;
  issuer: string;
  issued: string;
  duration: string;
  meta: string;
  image: string;
};

/** Hero value badges. */
export const heroBadges = [
  { label: "Innovate Faster", icon: "Zap" },
  { label: "Automate Smarter", icon: "ShieldCheck" },
  { label: "Grow Bigger", icon: "TrendingUp" },
] as const;

export const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 94 },
];

export const tools = ["ChatGPT", "Claude", "Cursor", "Replit", "GitHub", "Vercel"];

export const reasons = [
  { title: "Fast Delivery", description: "Most projects shipped in days, not months.", icon: "Zap" },
  { title: "Clean Code", description: "Readable, component-based and easy to extend.", icon: "Code" },
  {
    title: "Mobile Responsive",
    description: "Designed mobile-first and tested across breakpoints.",
    icon: "Smartphone",
  },
  { title: "Modern UI/UX", description: "Premium layouts with purposeful motion.", icon: "Palette" },
  {
    title: "AI Assisted Development",
    description: "AI tooling for speed without losing craft.",
    icon: "BrainCircuit",
  },
  { title: "SEO Friendly", description: "Semantic markup, metadata and fast loads.", icon: "Search" },
] as const;

/** Official social accounts — shared by Contact and Footer. */
export type Social = { label: string; href: string; icon: LucideIcon | null };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/zehraaisolutions-sudo", icon: Github },
  { label: "Facebook Page", href: "https://www.facebook.com/ZehraAISolutions", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zehraaisolutions/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/923435207875", icon: MessageCircle },
];

export const whatsapp = {
  label: "WhatsApp Business",
  href: "https://wa.me/923435207875",
  display: "+92 343 5207875",
};

export type NavPath = "/" | "/about" | "/services" | "/ai-fields" | "/work" | "/certificates" | "/contact";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "AI Fields", href: "/ai-fields" },
  { label: "Work", href: "/work" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
] as const satisfies ReadonlyArray<{ label: string; href: NavPath }>;

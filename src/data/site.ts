/**
 * Single source of truth for site content.
 * Add new projects, certificates or services here — pages read from these arrays.
 */

import realEstateImg from "@/assets/projects/real-estate.jpg";
import chatbotImg from "@/assets/projects/ai-chatbot-saas.jpg";
import dentistImg from "@/assets/projects/dentist.jpg";
import skillsetImg from "@/assets/projects/build-your-skillset.jpg";
import travelImg from "@/assets/projects/travel-agency.jpg";
import restaurantImg from "@/assets/projects/restaurant.jpg";
import gymImg from "@/assets/projects/gym.jpg";
import certSocialMedia from "@/assets/certificate-ai-social-media-marketing.jpg";
import certVibeCoding from "@/assets/certificate-vibe-coding.jpg";

export const brand = {
  name: "Zehra AI Solutions",
  tagline: "AI Freelancer • AI Website Developer • AI Content Creator • Prompt Engineer",
  description:
    "AI-powered digital solutions for modern businesses, creators, and professionals.",
  email: "hello@zehraaisolutions.com",
  location: "Pakistan — working with local and international clients",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/zehraaisolutions-sudo", icon: "Github" },
  { label: "Facebook", href: "https://www.facebook.com/share/19ZsyuHBm3/", icon: "Facebook" },
  { label: "Instagram", href: "https://www.instagram.com/zehraaisolutions", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/@zehraaisolutions", icon: "Youtube" },
  { label: "TikTok", href: "https://www.tiktok.com/@zehraaisolutions", icon: "Music2" },
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Certificates", to: "/certificates" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
] as const;

export const secondaryLinks = [
  { label: "FAQ", to: "/faq" },
  { label: "AI Insights", to: "/blog" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
] as const;

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  deliverables: string[];
  useCases: string[];
  tools: string[];
  clientType: string;
};

export const services: Service[] = [
  {
    slug: "ai-writing",
    title: "AI Writing Services",
    icon: "PenLine",
    short: "AI-assisted content writing for websites, blogs and social platforms.",
    description:
      "Structured, readable content written with AI assistance and reviewed manually for tone, accuracy and clarity.",
    deliverables: [
      "Website copy",
      "Blog articles",
      "Social media content",
      "Captions",
      "Marketing copy",
    ],
    useCases: ["Launching a new website", "Publishing regular content", "Refreshing outdated copy"],
    tools: ["ChatGPT", "Claude", "Prompt engineering", "Manual editing"],
    clientType: "Small businesses, creators and professionals who publish content regularly.",
  },
  {
    slug: "ai-research",
    title: "AI Research Services",
    icon: "Search",
    short: "AI-assisted research, summaries and structured reports.",
    description:
      "Focused research using AI tools, organised into readable summaries with sources kept traceable.",
    deliverables: [
      "Topic research",
      "Competitor research",
      "Information gathering",
      "Research summaries",
      "Structured research reports",
    ],
    useCases: ["Understanding a market", "Preparing a proposal", "Planning content or a launch"],
    tools: ["ChatGPT", "Claude", "Perplexity-style research workflows", "Manual verification"],
    clientType: "Entrepreneurs, students and teams needing organised background research.",
  },
  {
    slug: "ai-design",
    title: "AI Design Services",
    icon: "Paintbrush",
    short: "AI-assisted graphics, social creatives and brand visuals.",
    description:
      "Visuals produced with AI image tools and refined in Canva for consistent brand presentation.",
    deliverables: [
      "Social media designs",
      "Marketing creatives",
      "Brand visuals",
      "AI-generated imagery",
    ],
    useCases: ["Social media content", "Campaign creatives", "Simple brand refresh"],
    tools: ["Canva", "AI image generation", "Prompt engineering"],
    clientType: "Creators and small brands that need a steady flow of visuals.",
  },
  {
    slug: "ai-video",
    title: "AI Video Services",
    icon: "Video",
    short: "Short-form AI video content, concepts and scripts.",
    description:
      "Short videos built from AI-generated visuals and scripted narration, suited to social platforms.",
    deliverables: [
      "Short-form videos",
      "Social media videos",
      "AI-generated visual content",
      "Video concepts and scripts",
    ],
    useCases: ["Reels and Shorts", "Product or service intros", "Educational clips"],
    tools: ["AI video tools", "AI voice tools", "Canva"],
    clientType: "Creators and businesses building a video presence.",
  },
  {
    slug: "ai-presentations",
    title: "AI Presentation Services",
    icon: "Presentation",
    short: "Clear, well-designed decks for business and education.",
    description:
      "Presentations structured around one clear message, with consistent slide design and readable typography.",
    deliverables: [
      "Business presentations",
      "Educational presentations",
      "Pitch decks",
      "Visual slide design",
    ],
    useCases: ["Pitching an idea", "Teaching a topic", "Internal reporting"],
    tools: ["AI presentation tools", "Canva", "Prompt engineering"],
    clientType: "Entrepreneurs, professionals and educators.",
  },
  {
    slug: "ai-website-development",
    title: "AI Website Development",
    icon: "MonitorSmartphone",
    short: "AI-assisted websites, landing pages and portfolios.",
    description:
      "Responsive websites built with AI-assisted development workflows, from a single landing page to a small multi-page site.",
    deliverables: [
      "Landing pages",
      "Business websites",
      "Portfolio websites",
      "Responsive layouts",
    ],
    useCases: ["First website for a new business", "Campaign landing page", "Personal portfolio"],
    tools: ["Vibe coding", "HTML / CSS / JavaScript", "AI website builders"],
    clientType: "Startups, small businesses and professionals needing an online presence.",
  },
  {
    slug: "ai-wordpress-elementor",
    title: "AI WordPress Website Development with Elementor",
    icon: "LayoutTemplate",
    short: "WordPress and Elementor builds you can edit yourself.",
    description:
      "WordPress websites built with Elementor so the content stays easy to update after handover.",
    deliverables: [
      "WordPress websites",
      "Elementor page builds",
      "Website customisation",
      "Basic setup and handover notes",
    ],
    useCases: ["Business website on WordPress", "Landing page campaigns", "Redesign of an old site"],
    tools: ["WordPress", "Elementor", "AI-assisted content and design"],
    clientType: "Businesses that want to manage their own website content.",
  },
  {
    slug: "ai-social-media-marketing",
    title: "AI Social Media Marketing",
    icon: "Megaphone",
    short: "Content planning, creatives and platform-specific posting.",
    description:
      "Social media planning and content production supported by AI tools, organised into a usable calendar.",
    deliverables: [
      "Social media strategy",
      "Content calendars",
      "Captions",
      "Platform-specific content",
    ],
    useCases: ["Starting a business page", "Staying consistent with posting", "Campaign content"],
    tools: ["Canva", "AI content tools", "Scheduling tools"],
    clientType: "Small businesses and creators building an audience.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Websites" | "Landing Pages" | "AI Projects" | "Business Websites" | "Creative Projects";
  label: string;
  description: string;
  objective: string;
  features: string[];
  technologies: string[];
  outcome: string;
  image: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    category: "Business Websites",
    label: "Portfolio Project",
    description:
      "A property showcase site with listing sections, agent credibility and a calm premium layout.",
    objective: "Present property listings clearly and guide visitors towards an enquiry.",
    features: ["Listing sections", "Agent presentation", "Enquiry-focused calls to action", "Responsive layout"],
    technologies: ["React", "Tailwind CSS", "AI-assisted development"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: realEstateImg,
    liveUrl: "https://luxury-property-pros.lovable.app/",
  },
  {
    slug: "ai-chatbot-saas-landing-page",
    title: "AI Chatbot SaaS Landing Page",
    category: "AI Projects",
    label: "Selected Website Project",
    description:
      "A product landing page for a conversational AI assistant, built around feature clarity.",
    objective: "Explain an AI product quickly and lead visitors to a single sign-up action.",
    features: ["Feature blocks", "Product explanation flow", "Single primary CTA", "Motion accents"],
    technologies: ["React", "Tailwind CSS", "Motion"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: chatbotImg,
    liveUrl: "https://aurora-chat-zen.lovable.app/",
  },
  {
    slug: "dentist-website",
    title: "Dentist Website",
    category: "Business Websites",
    label: "Portfolio Project",
    description: "A trust-first clinic website with treatment information and booking prompts.",
    objective: "Build confidence for a healthcare service and make booking straightforward.",
    features: ["Treatment sections", "Team presentation", "Booking-focused CTAs", "Accessible typography"],
    technologies: ["React", "Tailwind CSS", "SEO structure"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: dentistImg,
    liveUrl: "https://pinnacle-smile-solutions.lovable.app/",
  },
  {
    slug: "build-your-skillset",
    title: "Build Your Skill Set",
    category: "Landing Pages",
    label: "Selected Website Project",
    description: "A learning platform landing page with clear tiers and an onboarding narrative.",
    objective: "Explain a skills programme and move visitors towards signing up.",
    features: ["Programme overview", "Pricing tiers", "Step-by-step narrative", "Responsive sections"],
    technologies: ["React", "Tailwind CSS", "AI-assisted development"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: skillsetImg,
    liveUrl: "https://build-your-skillset.lovable.app/",
  },
  {
    slug: "travel-agency-website",
    title: "Travel Agency Website",
    category: "Websites",
    label: "Portfolio Project",
    description: "A travel brand site with destination pages and immersive imagery.",
    objective: "Present destinations attractively and support enquiry-driven travel planning.",
    features: ["Destination pages", "Itinerary sections", "Image-led layout", "Multi-page navigation"],
    technologies: ["React", "Tailwind CSS", "Motion"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: travelImg,
    liveUrl: "https://globetrotter-elegance.lovable.app/destinations",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    category: "Websites",
    label: "Portfolio Project",
    description: "A restaurant site with menu highlights, atmosphere imagery and reservation prompts.",
    objective: "Communicate the dining experience and encourage reservations.",
    features: ["Menu highlights", "Reservation prompts", "Editorial layout", "Mobile-first sections"],
    technologies: ["React", "Tailwind CSS", "AI-assisted development"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: restaurantImg,
    liveUrl: "https://zehra-ai-restaurant.lovable.app/",
  },
  {
    slug: "gym-landing-page",
    title: "Gym Landing Page",
    category: "Landing Pages",
    label: "Selected Website Project",
    description: "A high-energy fitness landing page with programme cards and membership options.",
    objective: "Drive membership interest with one focused conversion path.",
    features: ["Programme cards", "Membership options", "Bold typography", "Single conversion goal"],
    technologies: ["React", "Tailwind CSS", "Motion"],
    outcome: "Portfolio demonstration of the selected design and development approach.",
    image: gymImg,
    liveUrl: "https://golden-kinetic-forge.lovable.app/",
  },
];

export const projectFilters = [
  "All",
  "Websites",
  "Landing Pages",
  "AI Projects",
  "Business Websites",
  "Creative Projects",
] as const;

export type Certificate = {
  title: string;
  subtitle?: string;
  provider: string;
  description: string;
  image?: string;
};

export const certificates: Certificate[] = [
  {
    title: "AI Social Media Marketing",
    provider: "HDS Hassan Digital Skills",
    description:
      "Completed training in AI-assisted social media marketing, content planning and platform-specific content.",
    image: certSocialMedia,
  },
  {
    title: "AI Vibe Coding",
    subtitle: "AI WordPress Website Development with Elementor",
    provider: "NDA Digital Skills",
    description:
      "Completed training in AI-assisted website development, including WordPress and Elementor builds.",
    image: certVibeCoding,
  },
  {
    title: "Artificial Intelligence",
    provider: "NDA Digital Skills",
    description:
      "Completed training in artificial intelligence fundamentals and practical AI tool usage. Certificate image will be added here once available.",
  },
];

export const skillGroups = [
  {
    group: "AI & Technology",
    items: [
      { name: "Artificial Intelligence", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Intermediate" },
      { name: "AI Content Creation", level: "Intermediate" },
      { name: "Vibe Coding", level: "Intermediate" },
      { name: "AI Website Development", level: "Intermediate" },
    ],
  },
  {
    group: "Web Development",
    items: [
      { name: "Website Development", level: "Intermediate" },
      { name: "Responsive Web Design", level: "Intermediate" },
      { name: "WordPress", level: "Developing" },
      { name: "Elementor", level: "Developing" },
    ],
  },
  {
    group: "Creative",
    items: [
      { name: "Canva / Graphic Design", level: "Intermediate" },
      { name: "AI Design", level: "Intermediate" },
      { name: "AI Presentations", level: "Intermediate" },
      { name: "AI Video Creation", level: "Developing" },
    ],
  },
  {
    group: "Marketing",
    items: [
      { name: "Content Strategy", level: "Developing" },
      { name: "Social Media Marketing", level: "Developing" },
      { name: "Digital Marketing", level: "Developing" },
      { name: "Freelancing", level: "Developing" },
    ],
  },
] as const;

export const toolGroups = [
  { group: "AI", items: ["ChatGPT", "Claude", "Prompt engineering", "AI research workflows"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor", "Vibe coding"] },
  { group: "Creative", items: ["Canva", "AI image generation", "AI video tools", "Presentation tools"] },
] as const;

export const values = [
  { title: "AI-Powered", description: "Modern AI tools and workflows applied to real tasks.", icon: "Sparkles" },
  { title: "Practical", description: "Focused on useful, real-world digital solutions.", icon: "Target" },
  { title: "Creative", description: "AI combined with design, content and technology.", icon: "Palette" },
  { title: "Client-Focused", description: "Solutions shaped around specific goals and requirements.", icon: "Handshake" },
] as const;

export const whyWorkWithMe = [
  { title: "AI-First Approach", description: "AI used strategically to improve creative and digital workflows.", icon: "BrainCircuit" },
  { title: "Modern Web Experiences", description: "Responsive, visually polished websites built to current standards.", icon: "MonitorSmartphone" },
  { title: "Multi-Disciplinary Skills", description: "AI, content, design, websites and marketing in one place.", icon: "Layers" },
  { title: "Continuous Learning", description: "Skills developed through courses, projects and experimentation.", icon: "GraduationCap" },
  { title: "Clear Communication", description: "Information presented clearly and professionally at every step.", icon: "MessagesSquare" },
] as const;

export const process = [
  { step: "01", title: "Discover", description: "Understand the requirement and objectives." },
  { step: "02", title: "Plan", description: "Research and determine the appropriate approach." },
  { step: "03", title: "Create", description: "Build the website, content, design, video or campaign." },
  { step: "04", title: "Refine", description: "Review, test and improve." },
  { step: "05", title: "Deliver", description: "Hand over the completed solution professionally." },
] as const;

export const audiences = [
  { title: "Small Businesses", description: "Websites, content, social media and digital presence.", icon: "Store" },
  { title: "Entrepreneurs", description: "Landing pages, presentations, branding and AI-powered solutions.", icon: "Rocket" },
  { title: "Creators", description: "AI content, videos, designs and social media support.", icon: "Camera" },
  { title: "Professionals", description: "Personal websites, portfolios, presentations and content.", icon: "BriefcaseBusiness" },
  { title: "Startups", description: "Landing pages, AI concepts and digital experiences.", icon: "Lightbulb" },
] as const;

export const careerFocus = [
  { title: "AI Freelancer", description: "Project-based AI support across writing, design and development." },
  { title: "AI Consultant", description: "Practical guidance on where AI fits into a workflow." },
  { title: "AI Trainer", description: "Explaining AI tools and prompting in plain language." },
  { title: "AI Content Creator", description: "Content produced with AI assistance and human review." },
  { title: "Prompt Engineer", description: "Reliable prompts and repeatable AI workflows." },
  { title: "AI Website Developer", description: "Responsive websites built with AI-assisted development." },
] as const;

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Eight AI service areas: AI writing, AI research, AI design, AI video, AI presentations, AI website development, AI WordPress development with Elementor, and AI social media marketing.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — Zehra AI Solutions is based in Pakistan and set up to work with both local and international clients remotely.",
  },
  {
    question: "Can you build custom websites?",
    answer:
      "Yes. Custom landing pages, business websites and portfolio websites are built according to project requirements.",
  },
  {
    question: "Do you work with WordPress and Elementor?",
    answer: "Yes. WordPress websites are built with Elementor so content stays easy to edit after handover.",
  },
  {
    question: "Can you create AI-generated content?",
    answer:
      "Yes, including writing, design, video, presentations and social media content — always reviewed manually before delivery.",
  },
  {
    question: "How can I start a project?",
    answer: "Send the project details through the contact page and you will receive a reply by email.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Projects can be discussed according to requirements and scope.",
  },
] as const;

export const blogCategories = [
  "Artificial Intelligence",
  "AI Tools",
  "Freelancing",
  "Website Development",
  "Digital Marketing",
  "Productivity",
  "Career Development",
  "AI Content Creation",
] as const;

import { Code2, BrainCircuit, Megaphone, Terminal, Globe2, PenLine, Bot, Workflow, Wrench, Youtube, LayoutTemplate, CalendarDays } from 'lucide-react';

export const biography = 'I am Zehra, a DAE CIT graduate from GPIW H-8/1 Islamabad with training in AI, WordPress website development, and AI social-media marketing. I create modern websites, AI-powered content, and simple digital solutions for individuals and small businesses. I am currently building my portfolio through practical projects in web development, AI tools, and content creation.';
export const skillGroups = [
  { title: 'Web Development', icon: Code2, skills: ['WordPress', 'HTML', 'CSS', 'JavaScript basics', 'React', 'Tailwind CSS', 'Vibe Coding', 'Responsive Design', 'Elementor'] },
  { title: 'AI Tools', icon: BrainCircuit, skills: ['Prompt Engineering', 'AI Content Creation', 'AI Chatbots', 'AI Automation', 'AI Research', 'AI Video', 'AI Design', 'ChatGPT', 'Claude', 'Cursor', 'Replit'] },
  { title: 'Digital Marketing', icon: Megaphone, skills: ['Social Media Marketing', 'Content Planning', 'Content Strategy', 'Canva', 'CapCut'] },
  { title: 'Technical Skills', icon: Terminal, skills: ['Python basics', 'GitHub', 'Database basics', 'Computer Networking basics', 'Vercel', 'Project communication', 'Research-led planning'] },
] as const;
export const practicalServices = [
  { title: 'WordPress Website Development', description: 'Modern, responsive business and portfolio websites.', icon: Globe2 },
  { title: 'AI-Powered Content Creation', description: 'Scripts, captions, posts, and content ideas using AI tools.', icon: PenLine },
  { title: 'Social Media Marketing', description: 'Content planning, page setup, and basic growth strategy.', icon: Megaphone },
  { title: 'AI Chatbot Setup', description: 'Simple AI chat assistants for websites and customer support.', icon: Bot },
  { title: 'Basic AI Automation', description: 'Small automation workflows for content and business tasks.', icon: Workflow },
  { title: 'Website Maintenance and Updates', description: 'Content updates, improvements, and basic troubleshooting.', icon: Wrench },
] as const;
export const featuredProjects = [
  { title: 'AI-Powered Portfolio Website', description: 'Built with Lovable; AI-assisted design and content.', tools: ['Lovable', 'AI-assisted design', 'React'], icon: Code2, label: 'Demo Project', url: 'https://aipowered-portfolio.lovable.app/', action: 'Live Demo' },
  { title: 'AI Education Content Channel', description: 'YouTube, Instagram, and TikTok content about AI learning.', tools: ['YouTube', 'Instagram', 'AI Content'], icon: Youtube, label: 'Content Project', url: 'https://www.youtube.com/@AIEducation-p2y', action: 'View Channel' },
  { title: 'WordPress Business Website Demo', description: 'Modern responsive business website using WordPress.', tools: ['WordPress', 'Responsive Design'], icon: LayoutTemplate, label: 'Demo Project', url: null, action: 'Demo unavailable' },
  { title: 'AI Social Media Content Calendar', description: 'AI-assisted content ideas and captions for small businesses.', tools: ['AI Tools', 'Content Planning'], icon: CalendarDays, label: 'Concept Project', url: null, action: 'Preview unavailable' },
] as const;
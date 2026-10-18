export interface Project {
  id: string;
  title: string;
  category: 'Web Design' | 'E-Commerce' | 'Branding & UI' | 'Mobile & Web App';
  subtitle: string;
  description: string;
  image: string;
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  tools: string[];
  tags: string[];
  challenge: string;
  solution: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  project: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedInUrl: string;
  availability: string;
  bio: string;
}

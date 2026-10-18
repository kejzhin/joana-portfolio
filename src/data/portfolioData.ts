import { Project, SkillCategory, Testimonial, ContactInfo } from '../types/portfolio';
import avatarImg from '../assets/images/joan.png';
import secondProfileImg from '../assets/images/2ndprof.png';
import projectBotanical from '../assets/images/project_botanical_web_1792226319436.jpg';
import projectEditorial from '../assets/images/project_editorial_brand_1792226321081.jpg';
import projectLifestyle from '../assets/images/project_lifestyle_store_1792226321163.jpg';

export const contactData: ContactInfo = {
  name: 'Joan Saluta',
  role: 'Administrative Executive',
  email: 'joannsaluta@gmail.com',
  phone: '+639913262002',
  location: 'Philippines (GMT+8) · Available Worldwide',
  linkedInUrl: 'https://www.linkedin.com/in/joan-saluta-912114368?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  availability: 'Open for Freelance Projects & Full-time Roles',
  bio: 'A highly organized and dependable Administrative Executive based in the Philippines. I help busy entrepreneurs, executives, and growing teams streamline daily operations, organize administrative workflows, manage calendars and communications, and maintain digital assets with high efficiency.',
};

export const avatarPhoto = avatarImg;
export const secondProfilePhoto = secondProfileImg;
export const heroDeskPhoto = secondProfileImg;

export const projectsData: Project[] = [
  {
    id: 'executive-admin-overhaul',
    title: 'Executive Calendar & Inbox Management',
    category: 'Web Design', // mapped category for filtering
    subtitle: 'Inbox Zero & Multi-Timezone Calendar Coordination',
    description: 'Managed daily executive communication for a busy boutique agency director. Organized incoming client communications into tiered priority folders, filtered spam, handled appointment scheduling across US, UK, and APAC time zones, and prepared daily briefing agendas.',
    image: projectEditorial,
    client: 'Aura Strategy Agency',
    year: '2025',
    role: 'Lead Executive Virtual Assistant',
    deliverables: ['Inbox Zero System', 'Calendar De-confliction', 'Client Meeting Agendas', 'SOP Documentation', 'Weekly Reporting'],
    tools: ['Google Workspace', 'Google Calendar', 'Slack', 'Notion', 'Calendly'],
    tags: ['Inbox Management', 'Calendar Scheduling', 'Executive Support', 'SOPs'],
    challenge: 'The executive was overwhelmed with over 300 unread emails daily and double-booked calendar commitments across multiple timezones.',
    solution: 'Designed an automated filtering label hierarchy, established 3 daily triage blocks, and unified all booking links through standardized calendar rules.',
    liveUrl: 'https://linkedin.com/in/joan-saluta-912114368',
    featured: true,
  },
  {
    id: 'ecommerce-operations',
    title: 'E-Commerce Store & Customer Care Operations',
    category: 'E-Commerce',
    subtitle: 'Order Processing, Customer Inquiries & Inventory Sync',
    description: 'Provided end-to-end general virtual assistant and customer service support for an online boutique lifestyle store. Handled order tracking inquiries, processed returns, updated product listings, and maintained accurate stock counts.',
    image: projectBotanical,
    client: 'Flora Botanicals Boutique',
    year: '2025',
    role: 'Administrative Executive & Store Support',
    deliverables: ['Customer Support Helpdesk', 'Shopify Product Catalog Updates', 'Order Tracking & Returns', 'Inventory Logging'],
    tools: ['Shopify', 'Zendesk', 'Google Sheets', 'Canva', 'Gmail'],
    tags: ['Customer Support', 'Shopify Operations', 'Order Fulfillment', 'Data Entry'],
    challenge: 'A sudden holiday sales surge resulted in a backlog of 400+ customer inquiries and misaligned inventory stock counts.',
    solution: 'Resolved customer tickets with empathetic, brand-aligned macro responses within 24 hours and reconciled stock spreadsheets daily.',
    liveUrl: 'https://linkedin.com/in/joan-saluta-912114368',
    featured: true,
  },
  {
    id: 'workflow-sop-creation',
    title: 'Standard Operating Procedures & Database Setup',
    category: 'Branding & UI',
    subtitle: 'Notion Workspace Architecture & Team Onboarding Hub',
    description: 'Built a centralized digital knowledge base and operational dashboard for a remote team. Documented recurring administrative workflows, client intake checklists, and asset repositories to enable seamless asynchronous teamwork.',
    image: projectLifestyle,
    client: 'Terraform Living',
    year: '2024',
    role: 'Operations & Virtual Assistant',
    deliverables: ['Centralized Notion Wiki', 'Step-by-step SOP Guides', 'Client Intake Checklists', 'Team Task Tracker'],
    tools: ['Notion', 'Asana', 'Loom', 'Google Drive', 'Canva'],
    tags: ['SOP Creation', 'Notion Database', 'Workflow Automation', 'Project Coordination'],
    challenge: 'Team members were frequently asking repetitive onboarding questions and losing track of critical client assets across various chat threads.',
    solution: 'Created an intuitive Notion hub with searchable SOPs, video walkthroughs, and automated task templates in Asana.',
    liveUrl: 'https://linkedin.com/in/joan-saluta-912114368',
    featured: true,
  },
  {
    id: 'social-media-content-support',
    title: 'Social Media Scheduling & Graphic Support',
    category: 'Mobile & Web App',
    subtitle: 'Canva Design & Multi-Channel Content Coordination',
    description: 'Supported content creators with weekly graphic production using Canva brand kits, caption formatting, hashtag research, and scheduled posting across Instagram, LinkedIn, and Pinterest.',
    image: projectEditorial,
    client: 'Zenith Wellness Collective',
    year: '2024',
    role: 'Virtual Assistant & Content Coordinator',
    deliverables: ['Weekly Social Carousels', 'Content Scheduling in Buffer', 'Community Engagement & DM Triage', 'Performance Metrics Tracker'],
    tools: ['Canva Pro', 'Buffer', 'Meta Business Suite', 'Google Sheets'],
    tags: ['Canva Graphics', 'Social Media Scheduling', 'Community Management', 'Content Calendar'],
    challenge: 'The founder lacked time to consistently post brand updates and respond to incoming direct messages from prospective clients.',
    solution: 'Established a 2-week rolling content calendar with branded Canva templates and monitored incoming messages twice daily.',
    liveUrl: 'https://linkedin.com/in/joan-saluta-912114368',
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Administrative & Executive Support',
    description: 'Managing daily operational routines, communications, and scheduling with high precision.',
    skills: [
      { name: 'Email & Inbox Management', level: 'Expert', description: 'Inbox Zero methodologies, smart filters, VIP labeling, and polite drafting.' },
      { name: 'Calendar Scheduling', level: 'Expert', description: 'Multi-timezone appointment coordination, Zoom/Meet setups, and buffer times.' },
      { name: 'Data Entry & Spreadsheets', level: 'Advanced', description: 'Google Sheets & Excel data cleaning, formula lookups, and structured reporting.' },
      { name: 'Travel & Itinerary Planning', level: 'Advanced', description: 'Flight, hotel, ground transit research, and comprehensive travel briefs.' },
      { name: 'Meeting Minutes & Action Items', level: 'Expert', description: 'Accurate transcription, executive summaries, and action item follow-ups.' },
    ],
  },
  {
    title: 'Customer Service & E-Commerce Support',
    description: 'Delivering friendly, professional customer care and maintaining storefront operations.',
    skills: [
      { name: 'Customer Email & Chat Support', level: 'Advanced', description: 'Fast, empathetic ticket resolution via Zendesk, Freshdesk, and email.' },
      { name: 'Shopify / WooCommerce Support', level: 'Advanced', description: 'Product uploads, variant tagging, inventory tracking, and order status updates.' },
      { name: 'CRM & Lead Management', level: 'Intermediate', description: 'Updating customer profiles, contact tags, and activity logging in HubSpot/Notion.' },
      { name: 'Order Processing & Returns', level: 'Advanced', description: 'Managing return authorizations, customer refunds, and supplier coordination.' },
    ],
  },
  {
    title: 'Digital Tools, Content & Coordination',
    description: 'Leveraging productivity platforms and creative software for efficient remote teamwork.',
    skills: [
      { name: 'Google Workspace & MS Office', level: 'Expert', description: 'Docs, Sheets, Slides, Drive organization, Word, Excel, and OneDrive.' },
      { name: 'Canva Pro Design', level: 'Expert', description: 'Branded social graphics, presentations, PDF guides, and marketing collaterals.' },
      { name: 'Project Tools (Asana, Trello, Notion)', level: 'Advanced', description: 'Task assignment, milestone tracking, kanban boards, and SOP documentation.' },
      { name: 'Basic Web Updates & WordPress', level: 'Intermediate', description: 'Blog publishing, page text updates, image replacement, and basic SEO tagging.' },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Joan has been an absolute lifesaver for my business. She took over my chaotic inbox and calendar, and within two weeks everything was running like clockwork. Dependable, proactive, and exceptionally polite.',
    author: 'Elena Vance',
    role: 'Founder & CEO',
    company: 'Flora Botanicals',
    project: 'Executive Virtual Assistance',
  },
  {
    id: '2',
    quote: 'Joan is one of the most reliable Virtual Assistants I have ever hired. Her attention to detail with data entry, customer care tickets, and weekly reports freed up 15+ hours of my time every single week.',
    author: 'Marcus Chen',
    role: 'Managing Director',
    company: 'Aura Strategy Agency',
    project: 'Operations & Admin Support',
  },
  {
    id: '3',
    quote: 'Always punctual, communicative, and quick to learn our internal software. Joan created our team SOPs from scratch and kept our Shopify store organized during our busiest season.',
    author: 'Sarah Jenkins',
    role: 'Head of Operations',
    company: 'Terraform Living',
    project: 'E-Commerce VA & SOPs',
  },
];

export const experienceTimeline = [
  {
    period: '2023 - Present',
    role: 'Lead Administrative Executive',
    company: 'Independent / Remote Contractor',
    location: 'Philippines & Global Clients (US, UK, AUS)',
    summary: 'Partnering with founders, e-commerce stores, and digital consultants to manage daily executive schedules, customer support inquiries, data entry, and project workflows.',
  },
  {
    period: '2021 - 2023',
    role: 'Administrative & Customer Support Specialist',
    company: 'BPO & Remote Services Studio',
    location: 'Philippines',
    summary: 'Handled high-volume email correspondence, customer ticket resolution, calendar bookings across multiple timezones, and CRM maintenance.',
  },
  {
    period: '2020 - 2021',
    role: 'Junior Virtual Assistant & Data Specialist',
    company: 'Digital Solutions Provider',
    location: 'Philippines',
    summary: 'Conducted internet research, maintained spreadsheet records, designed marketing graphics in Canva, and assisted with team administrative routines.',
  },
];

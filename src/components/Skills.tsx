import { useState } from 'react';
import { Layers, Workflow } from 'lucide-react';
import { useInView } from '../hooks/useScrollObserver';
import { BrandIcon } from './BrandIcons';
import { Floating3DCube, Floating3DTorus } from './Floating3DObjects';

interface SkillItem {
  name: string;
  description: string;
  tools: string[];
}

interface SkillCategoryDef {
  title: string;
  description: string;
  skills: SkillItem[];
}

const detailedSkillCategories: SkillCategoryDef[] = [
  {
    title: 'Administrative & Executive Support',
    description: 'Managing daily operational routines, communications, and scheduling with high precision.',
    skills: [
      {
        name: 'Email & Inbox Management',
        description: 'Inbox Zero methodologies, smart filters, VIP labeling, and polite drafting.',
        tools: ['Google Workspace', 'Inbox Zero'],
      },
      {
        name: 'Calendar Scheduling',
        description: 'Multi-timezone appointment coordination, Zoom/Meet setups, and buffer times.',
        tools: ['Calendly', 'Google Calendar', 'Zoom'],
      },
      {
        name: 'Data Entry & Spreadsheets',
        description: 'Google Sheets & Excel data cleaning, formula lookups, and structured reporting.',
        tools: ['Google Sheets', 'Excel'],
      },
      {
        name: 'Travel & Itinerary Planning',
        description: 'Flight, hotel, ground transit research, and comprehensive travel briefs.',
        tools: ['Google Workspace', 'Calendar'],
      },
      {
        name: 'Meeting Minutes & Action Items',
        description: 'Accurate transcription, executive summaries, and action item follow-ups.',
        tools: ['Notion', 'Google Workspace', 'Zoom'],
      },
    ],
  },
  {
    title: 'Customer Service & E-Commerce Support',
    description: 'Delivering friendly, professional customer care and maintaining storefront operations.',
    skills: [
      {
        name: 'Customer Email & Chat Support',
        description: 'Fast, empathetic ticket resolution via Zendesk, Freshdesk, and email.',
        tools: ['Zendesk', 'HelpScout'],
      },
      {
        name: 'Shopify / WooCommerce Support',
        description: 'Product uploads, variant tagging, inventory tracking, and order status updates.',
        tools: ['Shopify'],
      },
      {
        name: 'CRM & Lead Management',
        description: 'Updating customer profiles, contact tags, and activity logging in HubSpot/Notion.',
        tools: ['Notion', 'Slack'],
      },
      {
        name: 'Order Processing & Returns',
        description: 'Managing return authorizations, customer refunds, and supplier coordination.',
        tools: ['Shopify', 'Zendesk'],
      },
    ],
  },
  {
    title: 'Digital Tools, Content & Coordination',
    description: 'Leveraging productivity platforms and creative software for efficient remote teamwork.',
    skills: [
      {
        name: 'Google Workspace & MS Office',
        description: 'Docs, Sheets, Slides, Drive organization, Word, Excel, and OneDrive.',
        tools: ['Google Workspace', 'Excel', 'Google Drive'],
      },
      {
        name: 'Canva Pro Design',
        description: 'Branded social graphics, presentations, PDF guides, and marketing collaterals.',
        tools: ['Canva'],
      },
      {
        name: 'Project Tools (Asana, Trello, Notion)',
        description: 'Task assignment, milestone tracking, kanban boards, and SOP documentation.',
        tools: ['Asana', 'Notion', 'Trello'],
      },
      {
        name: 'Basic Web Updates & WordPress',
        description: 'Blog publishing, page text updates, image replacement, and basic SEO tagging.',
        tools: ['WordPress'],
      },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: workflowRef, isInView: workflowInView } = useInView({ threshold: 0.15 });

  const categories = ['All', ...detailedSkillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? detailedSkillCategories
      : detailedSkillCategories.filter((c) => c.title === selectedCategory);

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Onboarding',
      desc: 'Understanding your business priorities, primary pain points, preferred tools, and daily operational routine.',
    },
    {
      num: '02',
      title: 'Systems & Access Setup',
      desc: 'Setting up secure password sharing, inbox filters, calendar preferences, and workspace permissions.',
    },
    {
      num: '03',
      title: 'Execution & SOP Building',
      desc: 'Handling day-to-day administrative tasks, documenting repeatable SOPs in Notion, and resolving tickets.',
    },
    {
      num: '04',
      title: 'Review & Continuous Support',
      desc: 'Providing daily/weekly status summaries, proactive bottleneck elimination, and ongoing reliable support.',
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F5E6E6] border-t border-[#E1D3CA]/60 relative overflow-hidden">
      {/* 3D Floating Decorative Ambient Objects */}
      <div className="absolute top-16 right-8 sm:right-24 pointer-events-none z-0 opacity-70 hidden sm:block">
        <Floating3DCube size={44} />
      </div>
      <div className="absolute bottom-24 left-6 sm:left-14 pointer-events-none z-0 opacity-60">
        <Floating3DTorus size={40} />
      </div>

      {/* Organic Background Decorative Shapes */}
      <div className="absolute top-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#E5C6C6] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[350px] h-[350px] rounded-full bg-[#D4A5A5] opacity-30 blur-3xl pointer-events-none" />


      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-12 transition-all duration-700 ease-out transform ${
            headerInView
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-6 blur-xs'
          }`}
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C4737C] block mb-2">
            Skills &amp; Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#2B1D20] leading-[1.18]">
            Tools and expertise I bring to your team
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#614C50] leading-relaxed">
            Combining human-centered organization, fast execution, and dependable administrative support.
          </p>
        </div>

        {/* Minimalist Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-14 pb-3 border-b border-[#E1D3CA]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C4737C] text-white shadow-xs'
                    : 'bg-white/80 text-[#614C50] hover:text-[#2B1D20] hover:bg-white border border-[#E1D3CA]/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid (Clean, unboxed, with real software brand icons & no 'advanced,expert' labels) */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-7">
              <div className="border-b border-[#E1D3CA]/70 pb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2B1D20]">
                  {category.title}
                </h3>
                <p className="text-sm text-[#614C50] mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-6 bg-white/80 hover:bg-white rounded-2xl border border-[#E1D3CA]/80 hover:border-[#C4737C] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Top Brand Icons Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {skill.tools.map((t, idx) => (
                            <div
                              key={idx}
                              className="w-8 h-8 rounded-xl bg-[#FAF5F1] border border-[#E1D3CA] flex items-center justify-center p-1.5 shadow-2xs group-hover:bg-white transition-colors"
                              title={t}
                            >
                              <BrandIcon name={t} className="w-4 h-4 shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-base font-bold text-[#2B1D20] group-hover:text-[#C4737C] transition-colors pt-1">
                        {skill.name}
                      </h4>

                      {/* Clean Description */}
                      <p className="text-xs sm:text-sm text-[#614C50] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Associated Software Stack */}
                    <div className="pt-3 border-t border-[#E1D3CA]/50 flex flex-wrap items-center gap-1.5 text-xs text-[#856E72]">
                      <span className="font-semibold text-[#614C50]">Software:</span>
                      <span>{skill.tools.join(' · ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Structured Workflow Section */}
        <div ref={workflowRef} className="mt-24 pt-16 border-t border-[#E1D3CA]">
          <div
            className={`max-w-xl mb-12 transition-all duration-700 ease-out transform ${
              workflowInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C4737C] block mb-2">
              Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2B1D20]">
              Structured support from day one
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.num}
                className={`p-7 bg-white/80 hover:bg-white rounded-2xl border border-[#E1D3CA]/80 hover:border-[#C4737C] hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between group transform ${
                  workflowInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-[#C4737C] mb-3 group-hover:scale-105 transition-transform origin-left">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-[#2B1D20] mb-2 group-hover:text-[#C4737C] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#614C50] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

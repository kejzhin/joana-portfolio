import { useInView } from '../hooks/useScrollObserver';
import { BrandIcon } from './BrandIcons';

interface DeliverableItem {
  text: string;
  tool?: string;
}

interface ExperienceEntry {
  period: string;
  isCurrent: boolean;
  role: string;
  company: string;
  location: string;
  summary: string;
  deliverables: DeliverableItem[];
  tools: string[];
}

const experienceEntries: ExperienceEntry[] = [
  {
    period: '2023 — Present',
    isCurrent: true,
    role: 'Lead Administrative Executive',
    company: 'Independent / Remote Contractor',
    location: 'Philippines & Global Clients (US, UK, AUS)',
    summary:
      'Partnering with founders, e-commerce stores, and digital consultants to manage daily executive schedules, customer support inquiries, data entry, and project workflows.',
    deliverables: [
      { text: 'Executive inbox zero & daily schedule maintenance', tool: 'Google Workspace' },
      { text: 'SOP system documentation in Notion wikis', tool: 'Notion' },
      { text: 'Shopify customer inquiries & order tracking', tool: 'Shopify' },
      { text: 'Asana & Trello milestone management', tool: 'Asana' },
    ],
    tools: ['Google Workspace', 'Notion', 'Asana', 'Inbox Zero', 'Calendar Management', 'Slack', 'Client Retainers'],
  },
  {
    period: '2021 — 2023',
    isCurrent: false,
    role: 'Administrative & Customer Support Specialist',
    company: 'BPO & Remote Services Studio',
    location: 'Philippines · International Client Accounts',
    summary:
      'Handled high-volume email correspondence, customer ticket resolution, calendar bookings across multiple timezones, and CRM maintenance.',
    deliverables: [
      { text: 'Managed 80+ customer support tickets daily', tool: 'Zendesk' },
      { text: 'Coordinated international client meeting timezones', tool: 'Zoom' },
      { text: 'Maintained accurate CRM contact records', tool: 'HelpScout' },
      { text: 'Drafted daily executive status memos', tool: 'Google Workspace' },
    ],
    tools: ['Zendesk', 'HelpScout', 'Google Sheets', 'Zoom', 'Multi-Timezone Scheduling', 'CRM Updates'],
  },
  {
    period: '2020 — 2021',
    isCurrent: false,
    role: 'Junior Virtual Assistant & Data Specialist',
    company: 'Digital Solutions Provider',
    location: 'Philippines · Remote Operations',
    summary:
      'Conducted internet research, maintained spreadsheet records, designed marketing graphics in Canva, and assisted with team administrative routines.',
    deliverables: [
      { text: 'Detailed internet research & data organization', tool: 'Google Workspace' },
      { text: 'Spreadsheet record keeping in Google Sheets', tool: 'Google Sheets' },
      { text: 'Canva graphics design for digital announcements', tool: 'Canva' },
      { text: 'Administrative filing & documentation routines', tool: 'Google Workspace' },
    ],
    tools: ['Google Sheets', 'Canva', 'Excel', 'Google Drive', 'Process Documentation'],
  },
];

function ExperienceRow({ entry, idx }: { entry: ExperienceEntry; idx: number }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`border-t border-[#E1D3CA] py-12 sm:py-16 transition-all duration-700 ease-out transform ${
        isInView ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-xs'
      }`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      <div className="space-y-6 max-w-4xl">
        
        {/* Role Title & Impact Narrative */}
        <div className="space-y-2.5">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2B1D20] tracking-tight hover:text-[#C4737C] transition-colors">
            {entry.role}
          </h3>
          <p className="text-base sm:text-lg text-[#614C50] leading-relaxed">
            {entry.summary}
          </p>
        </div>

        {/* Period, Role Status, Contractor & Geographical Scope below title & summary */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-base sm:text-lg font-bold text-[#2B1D20] tracking-tight">
              {entry.period}
            </span>
            {entry.isCurrent && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C4737C]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Current Role
              </span>
            )}
          </div>
          <p className="text-sm font-semibold text-[#614C50]">
            {entry.company}
          </p>
          <div className="text-xs text-[#856E72] leading-relaxed">
            {entry.location}
          </div>
        </div>

        {/* Key Deliverables Ledger with Real Icons */}
        <div className="pt-3 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#856E72] block">
            Core Deliverables
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#2B1D20]">
            {entry.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5">
                {item.tool ? (
                  <div className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                    <BrandIcon name={item.tool} className="w-3.5 h-3.5 shrink-0" />
                  </div>
                ) : (
                  <span className="text-[#C4737C] font-mono text-sm shrink-0 select-none">
                    /
                  </span>
                )}
                <span className="leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Workflow with Real Brand Icons */}
        <div className="pt-4 border-t border-[#E1D3CA]/60 space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#856E72] block">
            Tools &amp; Workflow:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {entry.tools.map((tool, tIdx) => (
              <div
                key={tIdx}
                className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-white/70 hover:bg-white rounded-lg border border-[#E1D3CA]/80 hover:border-[#C4737C]/60 transition-all text-xs text-[#2B1D20] shadow-2xs"
              >
                <BrandIcon name={tool} className="w-3.5 h-3.5 shrink-0" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}

export default function Experience() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F5E6E6] border-t border-[#E1D3CA]/60 relative overflow-hidden">
      <div className="absolute top-20 right-8 sm:right-20 pointer-events-none z-0 opacity-70 hidden sm:block">
      </div>
      <div className="absolute top-1/2 left-4 sm:left-10 pointer-events-none z-0 opacity-75">
      </div>
      <div className="absolute bottom-16 right-12 pointer-events-none z-0 opacity-60 hidden md:block">
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 sm:mb-20 transition-all duration-700 ease-out transform ${
            headerInView
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-6 blur-xs'
          }`}
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C4737C] block mb-2">
            Career Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#2B1D20] leading-[1.18]">
            Virtual Assistant Experience
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#614C50] leading-relaxed">
            A proven history of managing high-priority administrative workflows, executive schedules, and customer inquiries for international founders and teams.
          </p>
        </div>

        {/* Editorial Career Ledger */}
        <div className="border-b border-[#E1D3CA]">
          {experienceEntries.map((entry, idx) => (
            <ExperienceRow key={idx} entry={entry} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
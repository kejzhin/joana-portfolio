import { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { contactData, experienceTimeline } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-xl border border-[#E1D3CA] shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF5F1] border-b border-[#E1D3CA]">
          <h3 className="text-sm font-bold text-[#2B1D20]">
            Joan Saluta — Administrative Executive Resume
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2B1D20] bg-white border border-[#E1D3CA] hover:bg-[#FAF5F1] rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C4737C]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#614C50] hover:text-[#2B1D20] rounded-md transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 text-[#2B1D20]">
          
          {/* Header Lockup */}
          <div className="border-b border-[#E1D3CA] pb-6 space-y-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#2B1D20]">
                {contactData.name}
              </h1>
              <p className="text-base font-semibold text-[#C4737C] mt-0.5">
                Administrative Executive
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#614C50]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C4737C]" />
                <a href={`mailto:${contactData.email}`} className="hover:underline text-[#2B1D20]">
                  {contactData.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C4737C]" />
                <a href={`tel:${contactData.phone}`} className="hover:underline text-[#2B1D20]">
                  {contactData.phone}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C4737C]" />
                <span>Philippines (GMT+8)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#C4737C]" />
                <a
                  href={contactData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#C4737C]"
                >
                  linkedin.com/in/joan-saluta
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C4737C]">
              Professional Summary
            </h2>
            <p className="text-sm text-[#614C50] leading-relaxed">
              Highly resourceful and trustworthy Administrative Executive with extensive experience assisting entrepreneurs, executives, and remote agencies. Expert at inbox and calendar management, customer support ticket resolution, CRM data hygiene, SOP authoring, and day-to-day administrative coordination. Known for high accuracy, proactive communication, and zero-drama execution.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C4737C]">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-bold text-[#2B1D20]">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-[#C4737C]">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs text-[#614C50] font-medium">
                    {item.company} · {item.location}
                  </div>
                  <p className="text-xs text-[#614C50] leading-relaxed pt-1">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core VA Competencies & Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C4737C]">
              Core Competencies & Software Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#614C50]">
              <div>
                <strong className="text-[#2B1D20] block mb-1">Executive & Admin Support:</strong>
                Email Inbox Zero, Google Calendar / Outlook Scheduling, Travel Coordination, Meeting Agendas, Data Entry, File Organization (Google Drive / Dropbox).
              </div>
              <div>
                <strong className="text-[#2B1D20] block mb-1">Customer Service & Digital Operations:</strong>
                Zendesk, Freshdesk, Shopify Admin, Canva Pro Graphic Design, Notion SOPs, Asana, Trello, Slack, Zoom, Basic WordPress Management.
              </div>
            </div>
          </div>

          {/* Education & Language */}
          <div className="pt-2 border-t border-[#E1D3CA] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h2 className="font-bold text-[#2B1D20] mb-1">Education</h2>
              <p className="text-[#614C50]">Bachelor&apos;s Degree / Higher Education</p>
              <p className="text-[#614C50]">Philippines</p>
            </div>
            <div>
              <h2 className="font-bold text-[#2B1D20] mb-1">Languages</h2>
              <p className="text-[#614C50]">English (Fluent / Professional Proficiency)</p>
              <p className="text-[#614C50]">Filipino (Native)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

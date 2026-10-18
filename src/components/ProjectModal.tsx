import { useEffect } from 'react';
import { X, Check, Calendar, User, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FEF2F2] rounded-2xl border border-[#E4C2C1] shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/95 hover:bg-white text-[#2D1C22] rounded-full border border-[#E4C2C1] shadow-xs transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Container */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#E4C2C1] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E4C2C1] block mb-1">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-rose-100 mt-1 max-w-xl">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-xl border border-[#E4C2C1] text-xs">
            <div>
              <span className="text-[#66474F] block mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-[#F53163]" /> Client
              </span>
              <span className="font-semibold text-[#2D1C22]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#66474F] block mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#F53163]" /> Year
              </span>
              <span className="font-semibold text-[#2D1C22]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#66474F] block mb-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#F53163]" /> Role
              </span>
              <span className="font-semibold text-[#2D1C22]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#66474F] block mb-1">Status</span>
              <span className="font-semibold text-emerald-800">Completed & Verified</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#2D1C22]">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-[#66474F] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border border-[#E4C2C1] space-y-2">
              <h4 className="text-sm font-bold text-[#2D1C22] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B6666F]" />
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-[#66474F] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E4C2C1] space-y-2">
              <h4 className="text-sm font-bold text-[#2D1C22] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F53163]" />
                The VA Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#66474F] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F53163]">
                Key Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#2D1C22]">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F53163] shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F53163]">
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-white border border-[#E4C2C1] rounded-md text-[#2D1C22] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-[#E4C2C1] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#66474F]">
              Need similar operational support for your business?
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#F53163] hover:bg-[#DF2354] rounded-md transition-colors cursor-pointer shadow-xs"
              >
                Inquire for Similar Support
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

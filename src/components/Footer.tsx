import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';
import { contactData } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#FAF5F1] to-[#F5E6E6] border-t border-[#E1D3CA] py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-0.5">
            <span className="text-lg font-bold text-[#2B1D20]">
              Joan Saluta
            </span>
            <span className="text-xs text-[#614C50]">
              Administrative Executive
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#614C50]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('works')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#2B1D20] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4 text-[#614C50]">
            <a
              href={contactData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4737C] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="hover:text-[#C4737C] transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${contactData.phone}`}
              className="hover:text-[#C4737C] transition-colors p-1"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 ml-2 bg-white hover:bg-[#FAF5F1] border border-[#E1D3CA] rounded-md text-[#2B1D20] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Quiet Copyright */}
        <div className="mt-8 pt-6 border-t border-[#E1D3CA]/60 text-center text-xs text-[#614C50]">
          &copy; {new Date().getFullYear()} Joan Saluta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

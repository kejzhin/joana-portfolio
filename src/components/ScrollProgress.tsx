import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollObserver';

export default function ScrollProgress() {
  const { scrollProgress, isScrolled } = useScrollProgress();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular ring calculations
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Floating Circular Back-to-Top Indicator */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isScrolled
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="relative group w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#E1D3CA] shadow-lg flex items-center justify-center text-[#2B1D20] hover:text-[#C4737C] hover:border-[#C4737C]/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Circular SVG Ring */}
          <svg className="absolute inset-0 w-12 h-12 -rotate-90 transform" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-[#E1D3CA]/40 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-[#C4737C] stroke-current transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Center Icon & Hover Hint */}
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 duration-200" />
        </button>
      </div>
    </>
  );
}

import { Quote, MessageSquareHeart } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollObserver';
import { Floating3DDiamond, Floating3DSphere } from './Floating3DObjects';

interface WorksProps {
  onContactClick: () => void;
}

export default function Works({ onContactClick }: WorksProps) {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.15 });

  return (
    <section id="works" className="py-24 bg-[#F5E6E6] border-t border-[#E1D3CA]/80 relative overflow-hidden">
      {/* 3D Floating Decorative Ambient Objects */}
      <div className="absolute top-12 right-12 pointer-events-none z-0 opacity-70 hidden sm:block">
        <Floating3DDiamond size={36} />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none z-0 opacity-75">
        <Floating3DSphere size={30} variant="rose" />
      </div>


      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div
          ref={headerRef}
          className={`max-w-xl mb-14 transition-all duration-700 ease-out transform ${
            headerInView
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-6 blur-xs'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#E1D3CA] text-xs font-semibold tracking-wider uppercase text-[#C4737C] mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#C4737C]" />
            <span>Client Testimonials & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B1D20]">
            Trusted by founders, executives & remote teams
          </h2>
          <p className="mt-3 text-base text-[#614C50]">
            Here is what business owners, founders, and team leaders have to say about delegating their daily operations, executive calendars, and customer care to Joan.
          </p>
        </div>

        {/* Testimonials Cards Grid with Staggered Scroll Animation */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className={`p-7 bg-white/80 rounded-2xl border border-[#E1D3CA] flex flex-col justify-between space-y-6 hover:border-[#C4737C]/60 hover:shadow-md hover:-translate-y-1.5 transition-all duration-700 ease-out group transform ${
                cardsInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#C4737C]/30 group-hover:text-[#C4737C]/60 transition-colors" />
                <p className="text-sm sm:text-base text-[#2B1D20] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E1D3CA]">
                <div className="font-bold text-sm text-[#2B1D20]">
                  {t.author}
                </div>
                <div className="text-xs text-[#614C50]">
                  {t.role}, {t.company}
                </div>
                <div className="text-[11px] text-[#C4737C] font-semibold mt-1">
                  Scope: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout with Scroll Reveal */}
        <div
          className={`mt-16 p-8 sm:p-10 bg-white/80 rounded-2xl border border-[#E1D3CA] flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-800 ease-out transform ${
            cardsInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#2B1D20]">
              Ready to free up 15+ hours every week?
            </h3>
            <p className="text-xs sm:text-sm text-[#614C50]">
              Get in touch to discuss your task list, communication routine, and preferred tools.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-6 py-3 bg-[#C4737C] hover:bg-[#AF5E67] text-white text-xs font-bold rounded-lg transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer shrink-0"
          >
            Start Delegating Today
          </button>
        </div>

      </div>
    </section>
  );
}

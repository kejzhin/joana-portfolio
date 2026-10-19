import { useState } from 'react';
import { Calendar, MessageSquare, FileSpreadsheet, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { secondProfilePhoto } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollObserver';
import { Floating3DCube, Floating3DTorus, Floating3DSphere } from './Floating3DObjects';

export default function About() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: capabilitiesRef, isInView: capabilitiesInView } = useInView({ threshold: 0.12 });

  // Interactive 3D tilt effect on Joan's photo
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const pillars = [
    {
      num: '01',
      icon: Calendar,
      title: 'Executive Coordination',
      desc: 'Inbox zero maintenance, priority filtering, and seamless multi-timezone calendar scheduling for busy executives.',
      tools: 'Google Workspace · Calendly · Slack',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Customer Care & Support',
      desc: 'Prompt, empathetic, and professional communication across email, live chat, and helpdesk ticketing systems.',
      tools: 'Zendesk · HelpScout · Shopify',
    },
    {
      num: '03',
      icon: FileSpreadsheet,
      title: 'Operational Clarity & SOPs',
      desc: 'Documenting repeatable processes, organizing Notion wikis, tracking Asana boards, and keeping data structured.',
      tools: 'Notion · Asana · Google Sheets',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Discretion & Reliability',
      desc: 'Absolute confidentiality with executive communications, sensitive credentials, and daily business deliverables.',
      tools: '1Password · LastPass · Zoom',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F5E6E6] border-t border-[#E1D3CA]/60 relative overflow-hidden"
    >
      {/* 3D Floating Decorative Ambient Objects */}
      <div className="absolute top-16 right-6 sm:right-16 pointer-events-none z-0 opacity-70 hidden sm:block">
        <Floating3DCube size={42} />
      </div>
      <div className="absolute top-1/2 left-4 sm:left-12 pointer-events-none z-0 opacity-65">
        <Floating3DTorus size={44} />
      </div>

      <div className="absolute bottom-20 right-1/4 pointer-events-none z-0 opacity-70 hidden md:block">
        <Floating3DSphere size={28} variant="linen" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main 2-Column About Me & Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Column: Title & Narrative Bio */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 ease-out transform ${
              sectionInView
                ? 'opacity-100 translate-y-0 filter-none'
                : 'opacity-0 translate-y-8 blur-xs'
            }`}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#2B1D20] leading-[1.12]">
                About me
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#614C50] leading-relaxed">
              <p className="text-lg sm:text-xl text-[#2B1D20] font-normal leading-relaxed border-l-2 border-[#C4737C] pl-5 py-1">
                Hello! I am <strong className="text-[#2B1D20] font-semibold">Joan Saluta</strong>, a dedicated Administrative Executive and operational support partner based in the Philippines.
              </p>

              <p className="text-base text-[#614C50] pl-5 leading-relaxed">
                I partner with busy founders, executives, e-commerce stores, and remote teams across the globe to eliminate administrative bottlenecks and keep operations running with calm and clarity.
              </p>
            </div>

            {/* Core Working Highlights */}
            <div className="pt-2 pl-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2B1D20]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C4737C] shrink-0" />
                <span>US, UK, AU & Asian time zones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C4737C] shrink-0" />
                <span>Proactive daily communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C4737C] shrink-0" />
                <span>High accuracy & discretion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C4737C] shrink-0" />
                <span>Fast onboarding & SOP setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Joan's 2nd Profile Picture with Clean 3D Tilt */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-800 delay-200 ease-out transform ${
              sectionInView
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative max-w-[320px] sm:max-w-[360px] w-full cursor-pointer select-none"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Soft warm aura backing */}
              <div
                className={`absolute -inset-4 bg-[#E1D3CA]/40 rounded-[36px] blur-2xl z-0 pointer-events-none transition-all duration-500 ease-out ${
                  isHovered ? 'scale-105 opacity-90' : 'scale-95 opacity-60'
                }`}
              />

              {/* Photo Frame Card */}
              <div
                className={`relative z-10 rounded-3xl overflow-hidden border border-[#E1D3CA] bg-white transition-all duration-300 ease-out ${
                  isHovered ? '' : 'animate-portrait-float'
                }`}
                style={{
                  transform: isHovered
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                    : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  boxShadow: isHovered
                    ? '0 20px 40px -15px rgba(43, 29, 32, 0.15)'
                    : '0 10px 30px -10px rgba(43, 29, 32, 0.08)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transformStyle: 'flat',
                }}
              >
                <img
                  src={secondProfilePhoto}
                  alt="Joan Saluta - Administrative Executive"
                  className="w-full h-[400px] sm:h-[440px] object-cover object-[center_20%] block transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Core Capabilities Section */}
        <div ref={capabilitiesRef} className="pt-20 border-t border-[#E1D3CA]/60">
          
          {/* Header */}
          <div
            className={`max-w-2xl mb-16 transition-all duration-700 ease-out transform ${
              capabilitiesInView
                ? 'opacity-100 translate-y-0 filter-none'
                : 'opacity-0 translate-y-6 blur-xs'
            }`}
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C4737C] block mb-2">
              Capabilities
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B1D20]">
              How I Support Leaders
            </h3>
            <p className="mt-3 text-base text-[#614C50] leading-relaxed">
              Essential operational support designed to bring calm and precision to your business.
            </p>
          </div>

          {/* Minimalist Editorial 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className={`p-8 bg-white/80 hover:bg-white rounded-2xl border border-[#E1D3CA]/70 hover:border-[#C4737C] hover:shadow-lg transition-all duration-500 ease-out flex flex-col justify-between space-y-6 group transform ${
                    capabilitiesInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E1D3CA] flex items-center justify-center text-[#C4737C] group-hover:bg-[#C4737C] group-hover:text-white group-hover:border-[#C4737C] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#856E72] group-hover:text-[#C4737C] transition-colors">
                        {pillar.num}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-[#2B1D20] group-hover:text-[#C4737C] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#614C50] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E1D3CA]/60 text-[11px] font-mono text-[#856E72]">
                    {pillar.tools}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

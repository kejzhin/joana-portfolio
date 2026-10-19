import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Clock, MessageSquare, ArrowUpRight, ShieldCheck, Globe, Send } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import { useInView } from '../hooks/useScrollObserver';
import { Floating3DCube, Floating3DSphere, Floating3DTorus } from './Floating3DObjects';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.15 });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5E6E6] border-t border-[#E1D3CA] relative overflow-hidden">
      {/* 3D Floating Decorative Ambient Objects */}
      <div className="absolute top-14 left-8 sm:left-20 pointer-events-none z-0 opacity-70 hidden sm:block">
        <Floating3DCube size={42} />
      </div>

      <div className="absolute top-28 right-8 sm:right-24 pointer-events-none z-0 opacity-75">
        <Floating3DSphere size={34} variant="rose" />
      </div>
      <div className="absolute bottom-16 right-12 pointer-events-none z-0 opacity-60 hidden md:block">
        <Floating3DTorus size={42} />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div
          ref={headerRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ease-out transform ${
            headerInView
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-6 blur-xs'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E1D3CA] text-xs font-semibold tracking-wider uppercase text-[#C4737C] mb-3">
            <Send className="w-3.5 h-3.5 text-[#C4737C]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B1D20]">
            Ready to delegate and scale? Let&apos;s connect.
          </h2>
          <p className="mt-3 text-base text-[#614C50] leading-relaxed">
            Whether you need ongoing executive assistance, inbox & calendar management, customer support, or dependable daily operations, reach out directly via your preferred channel.
          </p>
        </div>

        {/* Primary Contact Channels Grid with Staggered Scroll Animation */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Email Direct Card */}
          <div
            className={`p-7 bg-white rounded-2xl border border-[#E1D3CA] hover:border-[#C4737C] hover:shadow-md hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between space-y-6 group transform ${
              cardsInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] border border-[#E1D3CA] flex items-center justify-center text-[#C4737C] group-hover:bg-[#C4737C] group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#614C50]">
                  Direct Email
                </span>
                <h3 className="text-lg font-bold text-[#2B1D20] break-all">
                  {contactData.email}
                </h3>
                <p className="text-xs text-[#614C50] leading-relaxed pt-1">
                  Ideal for project scopes, task delegation briefs, contracts, and retainer inquiries.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E1D3CA]/70 flex items-center gap-3">
              <a
                href={`mailto:${contactData.email}?subject=Virtual%20Assistant%20Inquiry%20for%20Joan`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] active:bg-[#8F454E] rounded-lg transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={() => handleCopy(contactData.email, 'email')}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#614C50] hover:text-[#2B1D20] bg-[#FAF5F1] hover:bg-[#E1D3CA]/50 border border-[#E1D3CA] rounded-lg transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div
            className={`p-7 bg-white rounded-2xl border border-[#E1D3CA] hover:border-[#C4737C] hover:shadow-md hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between space-y-6 group transform ${
              cardsInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] border border-[#E1D3CA] flex items-center justify-center text-[#C4737C] group-hover:bg-[#C4737C] group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#614C50]">
                  Phone & WhatsApp
                </span>
                <h3 className="text-lg font-bold text-[#2B1D20]">
                  {contactData.phone}
                </h3>
                <p className="text-xs text-[#614C50] leading-relaxed pt-1">
                  Direct mobile call & instant messaging on WhatsApp for quick syncs and urgent requests.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E1D3CA]/70 flex items-center gap-3">
              <a
                href={`https://wa.me/${contactData.phone.replace(/[^0-9]/g, '')}?text=Hi%20Joan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20working%20together!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] active:bg-[#8F454E] rounded-lg transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${contactData.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#614C50] hover:text-[#2B1D20] bg-[#FAF5F1] hover:bg-[#E1D3CA]/50 border border-[#E1D3CA] rounded-lg transition-colors"
                title="Call phone number"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <button
                onClick={() => handleCopy(contactData.phone, 'phone')}
                className="inline-flex items-center justify-center p-2.5 text-xs font-semibold text-[#614C50] hover:text-[#2B1D20] bg-[#FAF5F1] hover:bg-[#E1D3CA]/50 border border-[#E1D3CA] rounded-lg transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div
            className={`p-7 bg-white rounded-2xl border border-[#E1D3CA] hover:border-[#C4737C] hover:shadow-md hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between space-y-6 group transform ${
              cardsInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] border border-[#E1D3CA] flex items-center justify-center text-[#C4737C] group-hover:bg-[#C4737C] group-hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#614C50]">
                  LinkedIn Network
                </span>
                <h3 className="text-lg font-bold text-[#2B1D20]">
                  Joan Saluta
                </h3>
                <p className="text-xs text-[#614C50] leading-relaxed pt-1">
                  Connect on LinkedIn for professional endorsements, career history, and collaborative networking.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E1D3CA]/70">
              <a
                href={contactData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] active:bg-[#8F454E] rounded-lg transition-colors shadow-2xs group"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Working Details & Availability Strip with Scroll Reveal */}
        <div
          className={`mt-12 max-w-5xl mx-auto p-6 bg-white rounded-2xl border border-[#E1D3CA] shadow-2xs transition-all duration-800 ease-out transform ${
            cardsInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF5F1] text-[#C4737C] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#2B1D20]">Location</div>
                <div className="text-xs text-[#614C50]">{contactData.location} (Remote Global)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF5F1] text-[#C4737C] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#2B1D20]">Fast Response</div>
                <div className="text-xs text-[#614C50]">Within 12–24 business hours</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF5F1] text-[#C4737C] shrink-0 mt-0.5">
                <Globe className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#2B1D20]">Timezone Flexibility</div>
                <div className="text-xs text-[#614C50]">Supports US, UK, AU & Asian hours</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF5F1] text-[#C4737C] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#2B1D20]">Collaboration Terms</div>
                <div className="text-xs text-[#614C50]">Flexible Part-Time & Full-Time retainers</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Testimonials', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F5E6E6]/95 backdrop-blur-md border-b border-[#E1D3CA] shadow-xs'
          : 'bg-[#F5E6E6] border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3 sm:py-5 flex items-center justify-center relative">
        {/* Navigation Links with dusty rose indicator (centered) */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#2B1D20] font-semibold'
                    : 'text-[#614C50] hover:text-[#2B1D20]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4737C] rounded-full transition-all duration-300"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Button pinned on right */}
        <div className="hidden md:flex items-center gap-4 shrink-0 absolute right-6 sm:right-8">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] active:bg-[#8F454E] rounded-md transition-colors shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-[#2B1D20] hover:text-[#C4737C] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5E6E6] border-b border-[#E1D3CA] px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 text-base font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-[#C4737C] font-semibold' : 'text-[#614C50] hover:text-[#2B1D20]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#E1D3CA]">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] rounded-md transition-colors cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

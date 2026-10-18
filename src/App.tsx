import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ScrollProgress from '@/components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'works', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const handleContactClick = () => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#2B1D20] flex flex-col font-sans selection:bg-[#E1D3CA] selection:text-[#2B1D20] relative">
      <ScrollProgress />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-1">
        <Hero onContactClick={handleContactClick} />
        <About />
        <Experience />
        <Skills />
        <Works onContactClick={handleContactClick} />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

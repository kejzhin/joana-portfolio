import { useEffect, useState, useRef } from 'react';

/**
 * Hook to detect when an element scrolls into the viewport
 */
export function useInView(options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return { ref: elementRef, isInView };
}

/**
 * Hook to track overall page scroll progress (0 to 100) and scrollY
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

      setScrollY(currentScrollY);
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolled(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, scrollY, isScrolled };
}

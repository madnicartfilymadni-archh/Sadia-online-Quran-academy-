import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  delayMs = 0,
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate display if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    // Fallback if IntersectionObserver isn't supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timer = setTimeout(() => {
                setIsVisible(true);
              }, delayMs);
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
              return () => clearTimeout(timer);
            } else {
              setIsVisible(true);
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delayMs, triggerOnce]);

  return { ref, isVisible };
}

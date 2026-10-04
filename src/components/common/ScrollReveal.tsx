import React, { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: 'fade-up' | 'scale' | 'fade';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  variant = 'fade-up',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delayMs });

  const getVariantClass = () => {
    if (variant === 'scale') {
      return isVisible ? 'reveal-visible-scale' : 'reveal-hidden-scale';
    }
    return isVisible ? 'reveal-visible' : 'reveal-hidden';
  };

  return (
    <div
      ref={ref}
      className={`${getVariantClass()} ${className}`}
      style={{
        transitionDelay: delayMs > 0 ? `${delayMs}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

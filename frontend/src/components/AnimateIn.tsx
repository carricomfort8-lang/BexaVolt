'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number; // 0-6
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

export default function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('anim-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const directionClass = direction !== 'up' ? `anim-${direction}` : '';
  const delayClass = delay > 0 ? `anim-delay-${delay}` : '';

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      className={`anim-hidden ${directionClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Comp>
  );
}

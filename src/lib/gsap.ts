// src/lib/gsap.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useGSAP – a hook that creates a GSAP context for the component.
 * It ensures animations are scoped and cleaned up on unmount.
 * Pass a callback that receives the context to define animations.
 */
export const useGSAP = (callback: (ctx: gsap.core.Context) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      callback(gsap);
    }, ref);
    return () => ctx.revert();
  }, [callback]);

  return ref;
};

/**
 * Default ScrollTrigger settings – can be imported where needed.
 */
export const defaultScrollTrigger = {
  start: 'top bottom-=100',
  end: 'bottom top+=100',
  toggleActions: 'play none none reverse',
  markers: false,
};

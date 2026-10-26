"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.badge', { y: -30, opacity: 0, duration: 0.6 })
        .from('.headline', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8 })
        .from('.subtext', { y: 20, opacity: 0, duration: 0.5 })
        .from('.cta', { y: 20, opacity: 0, stagger: 0.2, duration: 0.5 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen flex-col items-center justify-center text-center px-6 py-24 bg-[#0A0A0A] text-primary">
      <div className="badge text-sm uppercase tracking-widest text-accent mb-4">AVAILABLE FOR FREELANCE PROJECTS</div>
      <h1 className="headline text-5xl md:text-7xl font-heading font-bold mb-6">
        BUILDING DIGITAL<br />EXPERIENCES THAT MOVE.
      </h1>
      <p className="subtext max-w-2xl mx-auto text-lg md:text-xl mb-8">
        Freelance Full Stack Developer creating modern websites, e‑commerce experiences and web applications using React, Next.js and Shopify.
      </p>
      <div className="cta flex flex-col md:flex-row gap-4 justify-center">
        <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-black font-medium hover:scale-105 transition-transform">
          START A PROJECT <span aria-hidden="true">→</span>
        </Link>
        <Link href="#work" className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-primary hover:bg-accent hover:text-black transition-colors">
          VIEW SELECTED WORK ↓
        </Link>
      </div>
    </section>
  );
};

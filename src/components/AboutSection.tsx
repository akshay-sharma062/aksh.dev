"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll<HTMLElement>('.about-word');
    const ctx = gsap.context(() => {
      gsap.from(words, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const paragraph = `I am a freelance full‑stack developer specializing in React, Next.js, Shopify, and interactive web experiences. My work blends performance‑first engineering with motion‑driven storytelling, delivering premium digital products that convert visitors into clients.`;

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A] text-primary" id="about">
      <h2 className="text-center text-4xl font-heading mb-12">WHO I AM</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed px-6">
        {paragraph.split(' ').map((word, i) => (
          <span key={i} className="about-word inline-block mr-1">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};

"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const points = [
  { id: '01', title: 'PERFORMANCE', description: 'Fast, responsive experiences built with modern web technologies.' },
  { id: '02', title: 'CUSTOM DEVELOPMENT', description: 'No generic templates. Every project is built around its actual goals.' },
  { id: '03', title: 'MOTION + INTERACTION', description: 'Animation that adds personality without compromising usability.' },
  { id: '04', title: 'FULL STACK', description: 'Frontend, backend, databases, APIs and integrations.' },
  { id: '05', title: 'SHOPIFY', description: 'Custom Shopify storefronts and Liquid development.' },
];

export const WhySection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.why-point', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A] text-primary" id="process">
      <h2 className="text-center text-4xl font-heading mb-12">DESIGNED WITH INTENT.<br/>BUILT TO PERFORM.</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-6">
        {points.map((p) => (
          <div key={p.id} className="why-point border border-[rgba(244,241,234,0.15)] p-6 rounded-lg">
            <div className="text-2xl font-heading text-accent mb-2">{p.id}</div>
            <h3 className="font-heading text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-secondary">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

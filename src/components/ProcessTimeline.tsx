"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { id: 1, title: 'DISCOVERY', description: 'Research, requirements gathering, and strategy definition.' },
  { id: 2, title: 'DESIGN', description: 'Wireframes, UI/UX design, and prototyping with interactive mockups.' },
  { id: 3, title: 'DEVELOPMENT', description: 'Full‑stack implementation, component architecture, and performance optimization.' },
  { id: 4, title: 'TESTING', description: 'Automated & manual QA, accessibility checks, and cross‑device testing.' },
  { id: 5, title: 'DEPLOYMENT', description: 'Vercel production deployment, monitoring, and handoff.' },
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const sections = containerRef.current!.querySelectorAll<HTMLElement>('.process-step');
      gsap.from(sections, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#0A0A0A] text-primary" id="process-timeline">
      <h2 className="text-center text-4xl font-heading mb-12">MY PROCESS</h2>
      <div className="max-w-4xl mx-auto space-y-12 px-6">
        {steps.map((step) => (
          <div key={step.id} className="process-step border-l-2 border-accent pl-6">
            <h3 className="font-heading text-2xl text-accent mb-2">{step.title}</h3>
            <p className="text-sm text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

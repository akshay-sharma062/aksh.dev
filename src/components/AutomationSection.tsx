"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  'Automated build pipelines with GitHub Actions',
  'CI/CD integration for seamless Vercel deployments',
  'Performance monitoring with Lighthouse CI',
  'Automated image optimization using next‑image and imagemin',
  'Scheduled backups and data integrity checks',
];

export const AutomationSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.automation-item', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A] text-primary" id="automation">
      <h2 className="text-center text-4xl font-heading mb-12">AUTOMATION & CI/CD</h2>
      <ul className="max-w-3xl mx-auto space-y-4 px-6">
        {items.map((txt, i) => (
          <li key={i} className="automation-item text-lg text-secondary">
            {txt}
          </li>
        ))}
      </ul>
    </section>
  );
};

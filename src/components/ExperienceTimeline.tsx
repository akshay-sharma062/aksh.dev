"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '@/data/experience';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const line = containerRef.current!.querySelector('.timeline-line') as HTMLElement;
      gsap.from(line, { height: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }});
      gsap.from('.timeline-item', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#0A0A0A] text-primary" id="experience">
      <h2 className="text-center text-4xl font-heading mb-12">PROFESSIONAL EXPERIENCE</h2>
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-accent timeline-line" />
        <ul className="space-y-12 ml-12">
          {experience.map((exp) => (
            <li key={exp.id} className="timeline-item relative pl-8">
              <div className="absolute left-[-26px] top-0 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-accent flex items-center justify-center">
                <span className="text-sm font-heading text-accent">{exp.start.replace(' ', '\n')}</span>
              </div>
              <h3 className="font-heading text-xl mb-1">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-secondary mb-2">{exp.start} – {exp.end}</p>
              <ul className="list-disc list-inside text-sm text-primary">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

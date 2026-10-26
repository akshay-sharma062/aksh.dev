"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Vercel', 'Shopify', 'GraphQL', 'REST', 'Docker', 'Git', 'Jest', 'Cypress',
];

export const TechMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      const width = marqueeRef.current!.scrollWidth;
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } });
      tl.fromTo(
        marqueeRef.current,
        { x: 0 },
        { x: -width, duration: 20, repeat: -1 }
      );
      // Pause on hover
      marqueeRef.current!.addEventListener('mouseenter', () => tl.pause());
      marqueeRef.current!.addEventListener('mouseleave', () => tl.play());
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 bg-[#0A0A0A] overflow-hidden" id="tech">
      <div className="whitespace-nowrap text-2xl font-heading text-primary" ref={marqueeRef}>
        {techStack.map((tech, i) => (
          <span key={i} className="mx-8 inline-block">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

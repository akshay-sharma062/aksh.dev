"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ProjectShowcase – displays projects in an editorial horizontal scroll on desktop.
 * On mobile (width < 768px) it falls back to a normal vertical stack.
 */
export const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const sections = containerRef.current!.querySelectorAll<HTMLElement>('.project-section');
      const totalWidth = sections.length * window.innerWidth;
      gsap.set(containerRef.current, { width: totalWidth });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((sec, i) => {
        tl.fromTo(
          sec,
          { x: i * window.innerWidth },
          { x: (i - 1) * window.innerWidth, ease: 'none' },
          0
        );
      });

      // Return cleanup for this matchMedia context only
      return () => {
        tl.kill();
      };
    });

    // useEffect cleanup reverts the matchMedia context
    return () => mm.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24" id="work">
      <h2 className="text-center text-4xl font-heading text-primary mb-12">SELECTED WORK</h2>
      <div ref={containerRef} className="flex flex-col md:flex-row md:space-x-8">
        {projects.map((proj) => (
          <div key={proj.slug} className="project-section w-full md:w-screen p-4">
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </section>
  );
};

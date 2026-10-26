"use client";

import Link from 'next/link';
// Image component removed; using standard img tag
import { ArrowRight, Globe, ShoppingBag, Code, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectCardProps = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ slug, title, category, description, technologies, image, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(cardRef.current, { opacity: 0, y: 30, duration: 0.6 });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="group relative overflow-hidden rounded-lg border border-[rgba(244,241,234,0.15)] project-card">
      <Link href={`/work/${slug}`}> 
        <img src={image} alt={title} width="800" height="500" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-xl font-heading text-accent bg-white bg-opacity-10 px-4 py-2 rounded">VIEW</span>
        </div>
      </Link>
      <div className="p-4 bg-[#0A0A0A] text-primary">
        <h3 className="font-heading text-lg mb-1">{title}</h3>
        <p className="text-sm text-secondary mb-2">{category}</p>
        <p className="text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {technologies.map((tech) => (
            <span key={tech} className="bg-accent bg-opacity-20 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

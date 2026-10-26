"use client";
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingBag, Code, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  ShoppingBag,
  Code,
  Zap,
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string; // name of Lucide icon
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = iconMap[icon] || null;

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-lg border border-[rgba(244,241,234,0.15)] p-6 text-primary transition-colors hover:border-accent"
    >
      {IconComponent && <IconComponent className="h-8 w-8 text-accent mb-4" />}
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="text-sm text-secondary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
      <Link href="#contact" className="inline-flex items-center gap-1 text-accent font-medium">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

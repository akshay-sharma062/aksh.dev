// src/data/services.ts
export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string; // name of Lucide icon
};

export const services: Service[] = [
  {
    id: '01',
    title: 'Business Websites',
    category: 'WEB',
    description: 'Modern responsive websites designed to improve brand presence and convert visitors.',
    icon: 'Globe',
  },
  {
    id: '02',
    title: 'E‑Commerce',
    category: 'SHOPIFY',
    description: 'Shopify storefronts and custom e‑commerce experiences built for performance and conversion.',
    icon: 'ShoppingBag',
  },
  {
    id: '03',
    title: 'Web Applications',
    category: 'APP',
    description: 'React / Next.js applications with backend systems, authentication, APIs and databases.',
    icon: 'Code',
  },
  {
    id: '04',
    title: 'Interactive Experiences',
    category: 'ANIMATION',
    description: 'GSAP‑powered landing pages and immersive digital experiences that engage users.',
    icon: 'Zap',
  },
];

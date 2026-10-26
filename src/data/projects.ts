// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string; // path in public folder
  link: string;
};

export const projects: Project[] = [
  {
    slug: 'imperial-essence',
    title: 'Imperial Essence',
    category: 'Shopify / E‑commerce',
    description: 'Custom Shopify storefront for a luxury fragrance brand. Developed dynamic sections, customized Liquid theme layouts, and integrated third‑party apps for a premium shopping experience.',
    technologies: ['Shopify', 'Liquid', 'React', 'GSAP'],
    image: '/images/projects/imperial-essence.jpg',
    link: 'https://imperial-essence-k-c.myshopify.com/',
  },
  {
    slug: 'craftlab',
    title: 'Craftlab',
    category: 'Shopify / E‑commerce',
    description: 'Custom Shopify storefront built with tailored Liquid sections and a clean, conversion‑focused layout — styled and structured for a craft‑goods brand’s product catalog.',
    technologies: ['Shopify', 'Liquid', 'React', 'GSAP'],
    image: '/images/projects/craftlab.jpg',
    link: 'https://craftlab-1.myshopify.com/',
  },
  {
    slug: 'hungry-tiger',
    title: 'Hungry Tiger',
    category: 'Restaurant Website',
    description: 'Full restaurant website with menu showcase, brand storytelling, and smooth responsive design. Focused on visual hierarchy and mobile‑first UX for maximum engagement.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'GSAP'],
    image: '/images/projects/hungry-tiger.jpg',
    link: 'https://www.eathungrytiger.com/',
  },
  {
    slug: 'vmf-technologies',
    title: 'VMF Technologies / Dazzled Experiences',
    category: 'Marketing / Landing Page',
    description: 'High‑fidelity animated marketing page built in Framer. Immersive scroll animations and a polished visual identity for an experiences brand.',
    technologies: ['Framer', 'GSAP', 'React'],
    image: '/images/projects/vmf-technologies.jpg',
    link: 'https://dazzled-experiences-404294.framer.app/',
  },
  {
    slug: 'mystree-messages',
    title: 'Mystree Messages',
    category: 'Full Stack Application',
    description: 'Anonymous messaging app with NextAuth OTP verification, session management, Nodemailer email delivery, Zod form validation, and AI‑powered message suggestions.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'GSAP'],
    image: '/images/projects/mystree-messages.jpg',
    link: 'https://github.com/akshay-sharma062',
  },
  {
    slug: 'musicacade',
    title: 'Musicacade',
    category: 'React / Interactive Application',
    description: 'Interactive music‑themed web app with smooth page transitions and scroll animations. Optimized bundle performance, deployed on Netlify with continuous deployment from GitHub.',
    technologies: ['React', 'GSAP', 'Next.js'],
    image: '/images/projects/musicacade.jpg',
    link: 'https://musicacade-my.netlify.app/',
  },
];

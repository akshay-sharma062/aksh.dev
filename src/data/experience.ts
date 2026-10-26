// src/data/experience.ts
export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string; // e.g., 'Aug 2026'
  end: string; // e.g., 'Present' or 'Apr 2026'
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    id: '1',
    role: 'AI Generalist',
    company: 'Foremost Leads',
    start: 'Aug 2026',
    end: 'Present',
    responsibilities: [
      'Built a multi‑client daily ad reporting system across 13 client accounts integrating Meta Ads and Flexi lead data with client‑wise isolation.',
      'Automated certificate generation and delivery using Google Forms, Sheets, Apps Script and Pabbly Connect.',
      'Designed scalable Apps Script + Pabbly pipelines for API integration, processing and automated email delivery.',
    ],
  },
  {
    id: '2',
    role: 'Web Developer',
    company: 'WOK Media LLC',
    start: 'Mar 2026',
    end: 'Apr 2026',
    responsibilities: [
      'Delivered responsive web apps using Next.js and Tailwind CSS from Figma handoffs.',
      'Engineered immersive scroll experiences with GSAP, ScrollTrigger and smooth‑scrolling libraries.',
    ],
  },
  {
    id: '3',
    role: 'Frontend Development Trainee',
    company: 'VertexPlus Technologies Pvt. Ltd.',
    start: 'Jun 2025',
    end: 'Aug 2025',
    responsibilities: [
      'Trained in HTML5, CSS3, JavaScript and React.js with component‑based mini projects.',
      'Worked with Bootstrap and Tailwind CSS to build reusable layouts and strengthen React, debugging and deployment workflows.',
    ],
  },
];

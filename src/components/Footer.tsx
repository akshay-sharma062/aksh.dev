"use client";
import { contactInfo } from '@/data/contact';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-[#0A0A0A] text-primary py-12">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Akshay Sharma. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href={contactInfo.email ? `mailto:${contactInfo.email}` : '#'} className="text-primary hover:text-accent">
          <Mail size={20} />
        </a>
        <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
          <Phone size={20} />
        </a>
        <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
          <FaLinkedinIn size={20} />
        </a>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
          <FaGithub size={20} />
        </a>
        <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll behavior – change background after scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu animation with GSAP
  useEffect(() => {
    if (!mobileOpen) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.mobile-menu', { y: '-100%', opacity: 0, duration: 0.6 });
    return () => tl.kill();
  }, [mobileOpen]);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
        scrolled ? 'bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm border-b border-[rgba(244,241,234,0.15)]' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="text-2xl font-heading text-primary">
        AKSH.DEV
      </Link>
      <ul className="hidden space-x-6 md:flex text-primary font-body">
        <li><Link href="#work">WORK</Link></li>
        <li><Link href="#services">SERVICES</Link></li>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#process">PROCESS</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
        <li>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            START A PROJECT <ArrowRight size={16} />
          </Link>
        </li>
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-primary"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile full‑screen menu */}
      {mobileOpen && (
        <div className="mobile-menu fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center space-y-8 text-2xl font-heading text-primary">
          <Link href="#work" onClick={toggleMenu}>WORK</Link>
          <Link href="#services" onClick={toggleMenu}>SERVICES</Link>
          <Link href="#about" onClick={toggleMenu}>ABOUT</Link>
          <Link href="#process" onClick={toggleMenu}>PROCESS</Link>
          <Link href="#contact" onClick={toggleMenu}>CONTACT</Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-black"
            onClick={toggleMenu}
          >
            START A PROJECT <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
};

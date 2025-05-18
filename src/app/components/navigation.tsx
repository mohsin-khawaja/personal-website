'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="#" className="text-white hover:text-blue-400">Rishi Srihari</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-white hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hidden md:block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors">
              Resumé
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 
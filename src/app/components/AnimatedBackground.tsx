'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedBackground() {
  return (
    <div className="relative w-full h-screen" style={{ 
      background: 'linear-gradient(to bottom right, #121212, #1a1a1a)',
    }}>
      {/* Top navigation links matching Rishi's site */}
      <div className="absolute top-0 left-0 w-full px-8 md:px-16 py-8 flex justify-between items-center z-10">
        <div className="text-white text-base md:text-lg font-normal">Mohsin Khawaja</div>
        <div className="hidden md:flex space-x-10 text-sm text-gray-400">
          <a href="https://linkedin.com/in/mohsin-khawaja" className="hover:text-white transition-colors">Linkedin</a>
          <a href="https://github.com/mohsin-khawaja" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Resumé</a>
        </div>
      </div>
      
      {/* Responsive navigation for mobile - hidden on Rishi's site */}
      <div className="md:hidden absolute top-0 right-0 p-4 z-10">
        {/* Mobile menu button would go here */}
      </div>
      
      {/* Main content positioned exactly like Rishi's site */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 z-10">
        <div className="mt-20 md:mt-0 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm tracking-wider mb-3"
          >
            PUSHING THE BOUNDARIES OF DIGITAL EXPERIENCES
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Hey, I'm Mohsin
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            I love to build impactful full-stack projects with modern technologies and high-performance.
          </motion.p>
        </div>
      </div>
    </div>
  );
} 
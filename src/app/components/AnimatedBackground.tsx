'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const particles: Particle[] = [];
    const particleCount = 120; // Increased particle count for more visibility

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = '';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1; // Larger particles
        this.speedX = Math.random() * 0.4 - 0.2; // Slower speed
        this.speedY = Math.random() * 0.4 - 0.2; // Slower speed
        
        // Brighter blue tint colors for particles
        const opacity = Math.random() * 0.7 + 0.3; // Higher opacity
        this.color = `rgba(140, 220, 255, ${opacity})`;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // First fill with solid background
    ctx.fillStyle = '#061018'; // Darker blue background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear with slate color and slight transparency for trail effect
      ctx.fillStyle = 'rgba(6, 16, 24, 0.2)'; // Darker blue with transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles (thinner, blue-tinted)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            const opacity = 0.3 - distance / 1000;
            ctx.strokeStyle = `rgba(140, 220, 255, ${opacity})`;
            ctx.lineWidth = 0.8; // Slightly thicker lines
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ 
          background: 'linear-gradient(to bottom, #061018, #050d14)', // Darker blue background
        }}
      />
      
      {/* Top navigation like Rishi's site */}
      <div className="absolute top-0 left-0 w-full px-8 md:px-16 py-8 flex justify-between items-center z-10">
        <div className="text-white text-base md:text-lg font-normal">Mohsin Khawaja</div>
        <div className="hidden md:flex space-x-10 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://linkedin.com/mohsin-khawaja" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/mohsin-khawaja" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Resumé</a>
        </div>
      </div>
      
      {/* Responsive navigation for mobile */}
      <div className="absolute bottom-8 left-0 w-full md:hidden flex justify-center space-x-4 text-xs text-gray-300 z-10">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <a href="https://linkedin.com/mohsin-khawaja" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/mohsin-khawaja" className="hover:text-white transition-colors">GitHub</a>
      </div>
      
      {/* Main content positioned like Rishi's site */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
        <div className="mt-20 md:mt-0 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm tracking-wider mb-3"
          >
            AI RESEARCHER & MACHINE LEARNING ENGINEER
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
            B.S. in Cognitive Science: Machine Learning & Neural Computation from UC San Diego. Passionate about AI algorithms and machine learning applications.
          </motion.p>
        </div>
      </div>
    </div>
  );
} 
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
    const particleCount = 150; // Matches Rishi's particle count

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
        this.size = Math.random() * 1.5 + 0.5; // Smaller particles like Rishi's site
        this.speedX = Math.random() * 0.2 - 0.1; // Slower speed for gentle movement
        this.speedY = Math.random() * 0.2 - 0.1; // Slower speed for gentle movement
        
        // Dark blue to lighter blue particles with low opacity
        const opacity = Math.random() * 0.3 + 0.05; // Very low opacity like Rishi's site
        this.color = `rgba(100, 130, 180, ${opacity})`;
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

    // First fill with solid background - matching Rishi's dark background
    ctx.fillStyle = '#121212'; // Very dark background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear with very dark color and high transparency for subtle trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.5)'; // Dark with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles (very subtle, thin lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Shorter connection distance
            const opacity = 0.05 - distance / 5000; // Very low opacity like Rishi's site
            ctx.strokeStyle = `rgba(100, 140, 200, ${opacity})`;
            ctx.lineWidth = 0.2; // Thinner lines like Rishi's site
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      time += 0.005; // Slower time progression
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
          background: 'linear-gradient(to bottom right, #121212, #1a1a1a)', // Matching Rishi's gradient
        }}
      />
      
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
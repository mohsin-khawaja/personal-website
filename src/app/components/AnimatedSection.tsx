'use client';

import { motion, type TargetAndTransition, type VariantLabels } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: { once?: boolean; amount?: number };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
}

export default function AnimatedSection({
  children,
  id,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate,
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.5 }
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={initial}
      animate={isInView ? animate : initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={`min-h-screen w-full flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
} 
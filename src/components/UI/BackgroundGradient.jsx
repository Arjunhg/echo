'use client';

import { motion } from 'framer-motion';

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: ['0%', '10%', '0%'],
          y: ['0%', '5%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-primary/20 rounded-full blur-3xl"
        animate={{
          x: ['0%', '-10%', '0%'],
          y: ['0%', '-5%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay" />
    </div>
  );
} 
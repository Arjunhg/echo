'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Card({ children, className, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'rounded-xl border border-border/50 bg-background/50 backdrop-blur-xl',
        'shadow-lg shadow-primary/5',
        'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
} 
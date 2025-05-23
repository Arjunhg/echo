'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function SourceTooltip({ source, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="fixed bottom-32 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-semibold">{source.title}</h4>
            <p className="text-sm text-gray-500">{source.type}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-sm text-gray-600">{source.excerpt}</p>
      </motion.div>
    </AnimatePresence>
  );
}
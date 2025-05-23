import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SearchingAnimation() {
  const [currentSource, setCurrentSource] = useState(0);
  
  const sources = [
    'Searching Help Center Articles...',
    'Checking FAQs...',
    'Looking through Past Conversations...',
    'Reviewing Documentation...'
  ];
  
  useEffect(() => {
    if (currentSource >= sources.length) return;
    
    const timer = setTimeout(() => {
      setCurrentSource(prev => prev + 1);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [currentSource, sources.length]);
  
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        <motion.div
          className="h-3 w-3 bg-indigo-600 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Fin is thinking...</p>
      </div>
      
      <div className="pl-6 text-xs text-gray-500 dark:text-gray-400">
        {sources.slice(0, currentSource + 1).map((source, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2 mb-1"
          >
            <motion.div
              className={`h-2 w-2 rounded-full ${
                index === currentSource 
                  ? 'bg-indigo-400 dark:bg-indigo-500' 
                  : 'bg-green-400 dark:bg-green-500'
              }`}
            />
            <span>{source}</span>
            {index < currentSource && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500"
              >
                ✓
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import SourceTooltip from './SourceTooltip';

export default function MessageBubble({ message, onSourceClick }) {
  const { sender, text, timestamp, citations } = message;
  const isAi = sender === 'ai';
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  const formatTimestamp = (date) => {
    return format(new Date(date), 'h:mm a');
  };
  
  // Function to render text with citations
  const renderTextWithCitations = (text) => {
    if (!text) return null;

    const parts = text.split(/(\d+)/);
    return parts.map((part, index) => {
      if (/^\d+$/.test(part)) {
        return (
          <sup
            key={index}
            onClick={() => onSourceClick(message.sources[parseInt(part) - 1])}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {part}
          </sup>
        );
      }
      return part;
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          message.sender === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-white border border-gray-200'
        }`}
      >
        <p className="whitespace-pre-wrap">{renderTextWithCitations(message.text)}</p>
        {message.sources && (
          <div className="mt-2 text-sm">
            <p className="font-medium">Sources:</p>
            {message.sources.map((source) => (
              <div key={source.id} className="mt-1">
                <p className="font-medium">{source.title}</p>
                <p className="text-gray-600">{source.excerpt}</p>
              </div>
            ))}
          </div>
        )}
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp}
        </span>
      </div>
    </motion.div>
  );
}
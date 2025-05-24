'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function ActivityFeed() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setActivities([
        {
          id: 1,
          user: 'John Smith',
          type: 'question',
          content: 'asked about refund policy',
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        },
        {
          id: 2,
          user: 'Sarah Johnson',
          type: 'resolved',
          content: 'got their question about shipping resolved by Fin',
          timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
        },
        {
          id: 3,
          user: 'Michael Brown',
          type: 'handoff',
          content: 'was transferred to human support',
          timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
        },
        {
          id: 4,
          user: 'Lisa Garcia',
          type: 'feedback',
          content: 'left a positive feedback for Fin',
          timestamp: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
        },
        {
          id: 5,
          user: 'Robert Wilson',
          type: 'question',
          content: 'asked about product features',
          timestamp: new Date(Date.now() - 1000 * 60 * 240), // 4 hours ago
        }
      ]);
      setLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getTypeStyles = (type) => {
    switch (type) {
      case 'question':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'handoff':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'feedback':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  const formatTime = (date) => {
    return format(date, 'h:mm a');
  };
  
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map((activity, index) => (
          <motion.li 
            key={activity.id} 
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 dark:bg-gray-700 dark:text-indigo-400">
                  <span className="font-medium text-sm">{activity.user.split(' ').map(name => name[0]).join('')}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.user} <span className="text-gray-500 dark:text-gray-400 font-normal">{activity.content}</span>
                </p>
                <div className="mt-1 flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeStyles(activity.type)}`}>
                    {activity.type}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    {formatTime(activity.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
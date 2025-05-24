'use client';
import { useState, useEffect } from 'react';
import { 
  FiMessageCircle, 
  FiCheckCircle, 
  FiUserPlus, 
  FiAlertCircle 
} from 'react-icons/fi';
import DashboardCard from './DashboardCard';

export default function DashboardCards() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const cards = [
    {
      title: 'Questions Answered',
      value: '1,254',
      icon: <FiMessageCircle className="h-6 w-6" />,
      trend: 'up',
      trendValue: '12'
    },
    {
      title: 'AI Resolved',
      value: '956',
      icon: <FiCheckCircle className="h-6 w-6" />,
      trend: 'up',
      trendValue: '18'
    },
    {
      title: 'Handed to Human',
      value: '298',
      icon: <FiUserPlus className="h-6 w-6" />,
      trend: 'down',
      trendValue: '5'
    },
    {
      title: 'Fallback Rate',
      value: '23.7%',
      icon: <FiAlertCircle className="h-6 w-6" />,
      trend: 'down',
      trendValue: '8'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          trend={card.trend}
          trendValue={card.trendValue}
          loading={loading}
        />
      ))}
    </div>
  );
}
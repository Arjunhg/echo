'use client';

import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const colorMap = {
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  red: 'text-red-500',
};

export default function DashboardCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  isLoading,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-border bg-background p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`rounded-lg p-2 ${colorMap[color]}/10`}>
            <Icon className={`h-5 w-5 ${colorMap[color]}`} />
          </div>
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        {isLoading ? (
          <Skeleton height={32} />
        ) : (
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-semibold">{value}</p>
            <span
              className={`text-sm font-medium ${
                change.startsWith('+')
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {change}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
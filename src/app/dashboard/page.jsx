'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Settings, Plus, ArrowRight, CheckCircle, User, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';

const metrics = [
  {
    title: 'Questions Answered',
    value: '1,234',
    change: '+12.3%',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    title: 'AI Resolved',
    value: '89%',
    change: '+5.2%',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    title: 'Handed to Human',
    value: '123',
    change: '-8.1%',
    icon: User,
    color: 'text-yellow-500',
  },
  {
    title: 'Fallback Rate',
    value: '11%',
    change: '-2.4%',
    icon: AlertCircle,
    color: 'text-red-500',
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(null);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Welcome to your AI assistant dashboard</p>
        </div>
        <select className="rounded-lg border border-border bg-background/50 backdrop-blur-sm px-3 py-1.5 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg bg-${metric.color}/10`}>
                <metric.icon className={metric.color} size={24} />
              </div>
              <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => handleNavigation('/conversations')}
              onMouseEnter={() => setIsHovered('new')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Start New Conversation</h3>
                    <p className="text-sm text-muted-foreground">Begin a new chat with your AI assistant</p>
                  </div>
                </div>
                <ArrowRight
                  className={`text-muted-foreground transition-transform ${
                    isHovered === 'new' ? 'translate-x-1' : ''
                  }`}
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => handleNavigation('/conversations')}
              onMouseEnter={() => setIsHovered('all')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">View All Conversations</h3>
                    <p className="text-sm text-muted-foreground">Access your conversation history</p>
                  </div>
                </div>
                <ArrowRight
                  className={`text-muted-foreground transition-transform ${
                    isHovered === 'all' ? 'translate-x-1' : ''
                  }`}
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => handleNavigation('/sources')}
              onMouseEnter={() => setIsHovered('sources')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Manage Knowledge Sources</h3>
                    <p className="text-sm text-muted-foreground">Configure your AI's knowledge base</p>
                  </div>
                </div>
                <ArrowRight
                  className={`text-muted-foreground transition-transform ${
                    isHovered === 'sources' ? 'translate-x-1' : ''
                  }`}
                  size={20}
                />
              </div>
            </motion.div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: 'Sarah Johnson', action: 'asked about refunds', time: '2 minutes ago' },
              { user: 'Mike Chen', action: 'inquired about shipping', time: '15 minutes ago' },
              { user: 'Emma Wilson', action: 'asked about product features', time: '1 hour ago' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start justify-between p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm"
              >
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

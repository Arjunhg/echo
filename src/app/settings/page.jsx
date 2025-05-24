'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    aiName: 'Fin',
    welcomeMessage: 'Hello! How can I help you today?',
    responseStyle: 'friendly',
    maxTokens: 150,
    temperature: 0.7,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Fin AI Settings</h1>
        <button
          type="submit"
          form="settings-form"
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <form id="settings-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg border border-border bg-background p-6">
          <h2 className="mb-4 text-lg font-semibold">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                AI Assistant Name
              </label>
              <input
                type="text"
                value={settings.aiName}
                onChange={(e) => setSettings({ ...settings, aiName: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Welcome Message
              </label>
              <textarea
                value={settings.welcomeMessage}
                onChange={(e) => setSettings({ ...settings, welcomeMessage: e.target.value })}
                rows={3}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-6">
          <h2 className="mb-4 text-lg font-semibold">AI Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Response Style
              </label>
              <select
                value={settings.responseStyle}
                onChange={(e) => setSettings({ ...settings, responseStyle: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="concise">Concise</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Max Response Length
              </label>
              <input
                type="number"
                value={settings.maxTokens}
                onChange={(e) => setSettings({ ...settings, maxTokens: parseInt(e.target.value) })}
                min={50}
                max={500}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Temperature
              </label>
              <input
                type="range"
                value={settings.temperature}
                onChange={(e) => setSettings({ ...settings, temperature: parseFloat(e.target.value) })}
                min={0}
                max={1}
                step={0.1}
                className="w-full"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>More Focused</span>
                <span>More Creative</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


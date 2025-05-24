'use client';

import { useState } from 'react';
import { Bell, Sun, Moon, User } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-4 md:px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Fin AI Agent</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-lg p-2 hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* Notifications */}
        <button className="rounded-lg p-2 hover:bg-accent transition-colors">
          <Bell className="h-5 w-5" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 rounded-lg p-2 hover:bg-accent transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-background p-2 shadow-lg">
              <div className="p-2">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
              <div className="h-px bg-border my-2" />
              <button className="w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-accent transition-colors">
                Profile Settings
              </button>
              <button className="w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-accent transition-colors">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

'use client';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatWidget from '../Chat/ChatWidget';

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isMobileOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div className="md:pl-64">
        <Header onOpenSidebar={openSidebar} />
        
        <main className="p-6">
          {children}
        </main>
      </div>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

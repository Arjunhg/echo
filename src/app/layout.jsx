import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layout/Sidebar";
import { Toaster } from 'react-hot-toast';
import Spotlight from '@/components/ui/Spotlight';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Fin AI Agent | Intercom",
  description: "AI Assistant that helps users with their questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Spotlight />
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              {children}
            </div>
          </main>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'bg-background text-foreground border border-border',
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layout/Sidebar";
import { Toaster } from 'react-hot-toast';
import Spotlight from '@/components/ui/Spotlight';
import Header from "@/components/Layout/Header";
import { ThemeProvider } from 'next-themes';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Spotlight />
          <div className="fixed inset-0 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <div className="flex-none bg-background/80 backdrop-blur-xl border-b border-border z-50">
                <Header />
              </div>
              <main className="flex-1 relative">
                <div className="absolute inset-0 overflow-y-auto">
                  <div className="container mx-auto px-4 py-6">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'bg-background text-foreground border border-border',
              duration: 3000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

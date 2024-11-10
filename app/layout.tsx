import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Coming Soon Framework',
  description: 'A beautiful, customizable framework for creating stunning coming soon pages.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="coming-soon-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
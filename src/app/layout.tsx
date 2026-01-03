
import type { Metadata } from 'next';
import './globals.css';
import '../styles/components.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'Muniza Zargar - Full Stack Developer',
  description: 'Portfolio of Muniza Zargar, Full Stack Developer specializing in React, Next.js, and .NET',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
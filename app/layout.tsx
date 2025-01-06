import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MetaMind',
  description: 'MetaMind is a platform for mental health awareness and support.',
  icons: {
    icon: '/favicon.ico', // Path to the favicon in the public/ directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Any additional head content */}
        </head>
        <body className={`${inter.className} backg`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

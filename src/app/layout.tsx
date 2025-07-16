import type { ReactNode } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';

import { cn } from '@/shared/lib/utils/styles';

import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', ibmPlexMono.variable)}>
        {children}
      </body>
    </html>
  );
}

import type { ReactNode } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';

import { cn } from '@/shared/lib/utils/styles';
import { Footer } from '@/shared/ui/components/footer';

import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
});

const sfPro = localFont({
  variable: '--font-sf-pro',
  src: [
    {
      path: '../../public/fonts/sf-pro/thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', ibmPlexMono.variable, sfPro.variable)}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

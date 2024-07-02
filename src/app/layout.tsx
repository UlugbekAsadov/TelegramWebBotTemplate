import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { LocaleContextProvider } from '@/context/locale.context';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magicbot Edu',
  description: 'Magicbot educational platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-background container min-h-dvh', inter.className)}>
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </body>
    </html>
  );
}

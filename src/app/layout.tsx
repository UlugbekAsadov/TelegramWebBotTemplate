import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { LocaleContextProvider } from '@/context/locale.context';
import ReactQueryProvider from '@/context/react-query.context';
import { InitTelegramLayout } from '@/layout/init-telegram.layout';
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
        <NextTopLoader />
        <InitTelegramLayout>
          <LocaleContextProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </LocaleContextProvider>
        </InitTelegramLayout>
      </body>
    </html>
  );
}

import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { LocaleContextProvider } from '@/context/locale.context';
import ReactQueryProvider from '@/context/react-query.context';
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
      <Head>
        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
      </Head>
      <body className={cn('bg-background container min-h-dvh', inter.className)}>
        <NextTopLoader />
        <LocaleContextProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </LocaleContextProvider>
      </body>
    </html>
  );
}

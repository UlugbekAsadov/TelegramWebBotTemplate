'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IProps {
  children: JSX.Element;
}

export const InitTelegramLayout = ({ children }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shopName = pathname?.split('/')[1] || '';
  const [initialPathname, setInitialPathname] = useState('');
  const [forceExit, setForceExit] = useState(false);

  useEffect(() => {
    setInitialPathname(pathname || '');
  }, []);

  useEffect(() => {
    const forceExitParam = searchParams?.get('forceExit');
    if (forceExitParam) {
      setForceExit(true);
    }
  }, []);

  useEffect(() => {
    const userId = searchParams?.get('userId');
    if (userId) {
      localStorage.setItem('userId', userId);
    }
  }, []);

  useEffect(() => {
    if (window.Telegram && initialPathname) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.enableClosingConfirmation();
      window.Telegram.WebApp.BackButton.onClick(() => {
        const historyDepth = window.history.length;
        const pathname = window.location.pathname;
        if ((historyDepth === 2 && pathname.split('/')[2] === 'home') || (pathname === initialPathname && forceExit)) {
          window.Telegram.WebApp.close();
        } else {
          router.back();
        }
      });
    }
  }, [initialPathname]);

  useEffect(() => {
    if (window.Telegram) {
      const backButton = window.Telegram.WebApp.BackButton;
      if (pathname === `/${shopName}/home`) {
        backButton.hide();
      } else {
        backButton.show();
      }
    }
  }, [pathname]);

  return children;
};

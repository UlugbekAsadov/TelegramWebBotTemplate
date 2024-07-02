'use client';

import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

import { defaultLocale, getTranslator, ValidLocale } from '@/i18n';

interface IContext {
  t: (
    key: string,
    params?:
      | {
          [key: string]: string | number;
        }
      | undefined
  ) => ReactNode;
  setLang: (lang: ValidLocale) => void;
  lang: ValidLocale;
}

interface IProps {
  children: ReactNode;
}

const LocaleContext = createContext<IContext>({} as IContext);

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender<T>(asyncFun: () => Promise<T>, deps: string[] = []) {
  const [output, setOutput] = useState<T>();

  useEffect(() => {
    (async function () {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, deps);
  return output === undefined ? null : output;
}

export const LocaleContextProvider = ({ children }: PropsWithChildren<IProps>) => {
  const [lang, setLang] = useLocalStorage<ValidLocale>('magicbot-edu-lang', defaultLocale);
  const currentLang = lang || defaultLocale;

  return useDelayedRender(async () => {
    const translate = await getTranslator(currentLang, []);

    const value = {
      t: translate,
      setLang,
      lang: currentLang,
    };

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
  }, [currentLang]);
};

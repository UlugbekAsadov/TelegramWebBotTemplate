/* eslint-disable @typescript-eslint/no-explicit-any */
export const defaultLocale: ValidLocale = 'ru';
export const locales = ['ru', 'uz'] as const;
export type ValidLocale = (typeof locales)[number];

const dictionaries: Record<ValidLocale, any> = {
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  uz: () => import('./dictionaries/uz.json').then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale, translations: object[]) => {
  let dictionary = await dictionaries[locale]();
  if (translations.length) {
    dictionary = translations[locales.indexOf(locale)];
  }
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key.split('.').reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};

export const defaultLocale: ValidLocale = 'uz';

export const locales = ['uz', 'ru'];

export type ValidLocale = (typeof locales)[number];

const dictionaries: Record<ValidLocale, () => Promise<string>> = {
  uz: () => import('./dictionaries/uz.json').then((module) => module.default) as Promise<string>,
  ru: () => import('./dictionaries/ru.json').then((module) => module.default) as Promise<string>,
};

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();

  return getTranslatedValue(dictionary);
};

function getTranslatedValue(dictionary: string) {
  return (translationKey: string, params?: { [key: string]: string | number }) => {
    const keys: string[] = translationKey.split('.');
    let translation: string = keys.reduce((obj, key) => obj && obj[key as unknown as number], dictionary);

    if (!translation) {
      return translationKey;
    }

    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }

    return translation;
  };
}

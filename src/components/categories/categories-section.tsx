'use client';

import { useLocaleContext } from '@/context/locale.context';

import { SeeAll } from '../ui/see-all';
import { Categories } from './categories';

export const CategoriesSection = () => {
  const { t } = useLocaleContext();
  return (
    <div className="pt-section">
      <div className="flex items-center justify-between px-section">
        <h2 className="text-foreground font-bold">{t('category.categories')}</h2>
        <SeeAll />
      </div>
      <Categories className='mt-4 pl-section' />
    </div>
  );
};

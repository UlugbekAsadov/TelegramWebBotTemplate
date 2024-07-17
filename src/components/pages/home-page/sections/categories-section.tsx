'use client';

import { Categories } from '@/components/categories/categories';
import { SeeAll } from '@/components/ui/see-all';
import { useLocaleContext } from '@/context/locale.context';
import { ICategory } from '@/lib/interfaces/categories.interface';

interface IProps {
  categories?: ICategory[];
}

export const CategoriesSection = ({ categories }: IProps) => {
  const { t } = useLocaleContext();

  if (!categories?.length) {
    return null;
  }

  return (
    <div className="mt-section">
      <div className="flex items-center justify-between px-section">
        <h2 className="text-foreground font-bold">{t('category.categories')}</h2>
        <SeeAll href="/categories" />
      </div>
      <Categories className="mt-4 pl-section" categories={categories} />
    </div>
  );
};

'use client';
import { Categories } from '@/components/categories/categories';
import { useLocaleContext } from '@/context/locale.context';

export const CategoriesPage = () => {
  const { t } = useLocaleContext();
  return (
    <div className="p-section">
      <h2 className='text-2xl font-semibold'>{t('category.categories')}</h2>
      <Categories variant="fullWidth" className="gap-2 flex flex-col mt-4" />
    </div>
  );
};

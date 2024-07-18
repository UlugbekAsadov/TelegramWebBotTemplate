'use client';
import { useQuery } from '@tanstack/react-query';

import { Categories } from '@/components/categories/categories';
import { useLocaleContext } from '@/context/locale.context';
import { getCategoriesQueryFn } from '@/react-query/queries/categories.query';

export const CategoriesPage = () => {
  const { t } = useLocaleContext();
  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesQueryFn(),
  });

  return (
    <div className="p-section">
      <h2 className="text-foreground text-2xl font-semibold">{t('category.categories')}</h2>
      <Categories variant="fullWidth" className="gap-2 flex flex-col mt-4" categories={categoriesQuery.data} />
    </div>
  );
};

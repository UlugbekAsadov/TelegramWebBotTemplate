import fetcher from '@/lib/fetcher';

export const getCategoriesQueryFn = () =>
  fetcher('/categories')
    .then((res) => res.json())
    .then((data) => data.data);

export const getCategoryQueryFn = (categoryId: string, nextLink?: string) =>
  fetcher(nextLink || `/categories/${categoryId}`)
    .then((res) => res.json())
    .then((data) => data);

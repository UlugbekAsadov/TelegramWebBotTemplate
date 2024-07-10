import fetcher from '@/lib/fetcher';

export const getCategoriesQueryFn = () => fetcher('/categories');

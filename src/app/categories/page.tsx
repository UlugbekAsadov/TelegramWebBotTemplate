import { dehydrate } from '@tanstack/react-query';

import { CategoriesPage } from '@/components/pages/categories/categories';
import Hydrate from '@/react-query/hydrate-client';
import { getCategoriesQueryFn } from '@/react-query/queries/categories.query';
import getQueryClient from '@/react-query/query-client';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesQueryFn(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CategoriesPage />
    </Hydrate>
  );
}

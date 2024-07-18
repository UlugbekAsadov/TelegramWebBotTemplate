import { dehydrate } from '@tanstack/react-query';

import { Category } from '@/pages/categories/category/category';
import Hydrate from '@/react-query/hydrate-client';
import { getCategoryQueryFn } from '@/react-query/queries/categories.query';
import getQueryClient from '@/react-query/query-client';

interface IProps {
  params: {
    categoryId: string;
  };
}

export default async function Page({ params }: IProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['category', params.categoryId],
    queryFn: () => getCategoryQueryFn(params.categoryId),
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <Category categoryId={params.categoryId} />
    </Hydrate>
  );
}

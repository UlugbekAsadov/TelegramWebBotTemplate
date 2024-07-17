import { Category } from '@/components/pages/categories/category/category';
import getQueryClient from '@/react-query/query-client';
import { dehydrate } from '@tanstack/react-query';
import Hydrate from '@/react-query/hydrate-client';
import { getCategoryQueryFn } from '@/react-query/queries/categories.query';

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

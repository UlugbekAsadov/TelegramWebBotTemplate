import { dehydrate } from '@tanstack/react-query';

import { Homepage } from '@/pages/home-page/homepage';
import Hydrate from '@/react-query/hydrate-client';
import { getCategoriesQueryFn } from '@/react-query/queries/categories.query';
import { getCoursesQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesQueryFn(),
  });

  await queryClient.prefetchQuery({
    queryKey: ['top-courses'],
    queryFn: () => getCoursesQueryFn('-sold'),
  });

  await queryClient.prefetchQuery({
    queryKey: ['new-courses'],
    queryFn: () => getCoursesQueryFn('-created_at'),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Homepage />
    </Hydrate>
  );
}

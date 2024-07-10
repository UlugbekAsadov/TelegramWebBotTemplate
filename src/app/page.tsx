import { dehydrate } from '@tanstack/react-query';

import { Homepage } from '@/components/pages/home-page/homepage';
import Hydrate from '@/react-query/hydrate-client';
import { getCoursesQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['courses', 'top'],
    queryFn: () => getCoursesQueryFn('-sold'),
  });

  await queryClient.prefetchQuery({
    queryKey: ['courses', 'new'],
    queryFn: () => getCoursesQueryFn('-created_at'),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Homepage />
    </Hydrate>
  );
}

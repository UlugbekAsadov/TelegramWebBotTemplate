import { dehydrate } from '@tanstack/react-query';

import { TopCourses } from '@/components/pages/top-courses/top-courses';
import { ICourse } from '@/lib/interfaces/course.interface';
import { IInfinityFetch } from '@/lib/interfaces/react-query.interface';
import Hydrate from '@/react-query/hydrate-client';
import { getCoursesQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery<IInfinityFetch<ICourse[]>>({
    queryKey: ['courses', 'top'],
    queryFn: ({ pageParam }) => getCoursesQueryFn('-sold', pageParam),
    getNextPageParam: (data) => data.links?.next,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <TopCourses />
    </Hydrate>
  );
}

import { dehydrate } from '@tanstack/react-query';

import { CoursePage } from '@/components/pages/course-page/course-page';
import Hydrate from '@/react-query/hydrate-client';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

interface IProps {
  params: { courseId: string };
}

export default async function Page({ params }: IProps) {
  const { courseId } = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CoursePage courseId={courseId} />
    </Hydrate>
  );
}

import { dehydrate } from '@tanstack/react-query';

import { LessonPage } from '@/pages/lesson-page/lesson-page';
import Hydrate from '@/react-query/hydrate-client';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';
import { getLessonQueryFn } from '@/react-query/queries/lesson.query';
import getQueryClient from '@/react-query/query-client';

interface IProps {
  params: {
    lessonId: string;
    courseId: string;
  };
}

export default async function Page({ params }: IProps) {
  const { lessonId, courseId } = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => getLessonQueryFn(lessonId),
  });

  await queryClient.prefetchQuery({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <LessonPage lessonId={lessonId} courseId={courseId} />
    </Hydrate>
  );
}

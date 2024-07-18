'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { CourseCard } from '@/components/courses/course-card/course-card';
import { useLocaleContext } from '@/context/locale.context';
import { ICourse } from '@/lib/interfaces/course.interface';
import { IInfinityFetch } from '@/lib/interfaces/react-query.interface';
import { getCoursesQueryFn } from '@/react-query/queries/courses.query';

export const TopCourses = () => {
  const { t } = useLocaleContext();

  const topCoursesQuery = useInfiniteQuery<IInfinityFetch<ICourse[]>>({
    queryKey: ['courses', 'top'],
    queryFn: ({ pageParam }) => getCoursesQueryFn('-sold', pageParam),
    getNextPageParam: (data) => data.links?.next,
  });

  return (
    <div className="p-section">
      <h2 className="text-foreground text-2xl font-semibold">{t('courses.top_courses')}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {topCoursesQuery.data?.pages.map((page) =>
          page.data.map((course) => <CourseCard key={course.id} course={course} size="small" />)
        )}
      </div>
    </div>
  );
};

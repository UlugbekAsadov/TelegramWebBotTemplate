'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { CourseCard } from '@/components/courses/course-card/course-card';
import { useLocaleContext } from '@/context/locale.context';
import { ICourse } from '@/lib/interfaces/course.interface';
import { IInfinityFetch } from '@/lib/interfaces/react-query.interface';
import { getCategoryQueryFn } from '@/react-query/queries/categories.query';

interface IProps {
  categoryId: string;
}

export const Category = ({ categoryId }: IProps) => {
  const { t } = useLocaleContext();

  const categoryQuery = useInfiniteQuery<IInfinityFetch<ICourse[]>>({
    queryKey: ['category', categoryId],
    queryFn: ({ pageParam }) => getCategoryQueryFn(categoryId, pageParam),
    getNextPageParam: (data) => data.links?.next,
  });

  return (
    <div className="p-section">
      <h2 className="text-foreground text-2xl font-semibold">{t('courses.top_courses')}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {categoryQuery?.data?.pages.map((page) =>
          page.data?.map((course) => <CourseCard key={course.id} size="small" course={course} />)
        )}
      </div>
    </div>
  );
};

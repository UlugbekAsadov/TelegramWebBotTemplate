'use client';
import { useQuery } from '@tanstack/react-query';

import { Header } from '@/components/header';
import { ICourse } from '@/lib/interfaces/course.interface';
import { IInfinityFetch } from '@/lib/interfaces/react-query.interface';
import { getCategoriesQueryFn } from '@/react-query/queries/categories.query';
import { getCoursesQueryFn } from '@/react-query/queries/courses.query';

import { CategoriesSection } from './sections/categories-section';
import { CoursesSection } from './sections/courses-section';
import { RecentlyWatchedSection } from './sections/recently-watched-section';
import { ICategory } from '@/lib/interfaces/categories.interface';

export const Homepage = () => {
  const topCoursesQuery = useQuery<IInfinityFetch<ICourse[]>>({
    queryKey: ['courses', 'top'],
    queryFn: () => getCoursesQueryFn('-sold'),
  });
  const newCoursesQuery = useQuery<IInfinityFetch<ICourse[]>>({
    queryKey: ['courses', 'new'],
    queryFn: () => getCoursesQueryFn('-created'),
  });

  const categoriesQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: () => getCategoriesQueryFn(),
  });

  return (
    <div>
      <Header />
      <CategoriesSection categories={categoriesQuery.data} />
      <RecentlyWatchedSection />
      <CoursesSection sectionTitle="courses.top_courses" courses={topCoursesQuery.data?.data} />
      <CoursesSection sectionTitle="courses.new_courses" courses={newCoursesQuery.data?.data} />
    </div>
  );
};

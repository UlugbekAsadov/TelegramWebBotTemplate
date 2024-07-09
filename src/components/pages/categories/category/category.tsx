'use client';

import { CourseCard } from '@/components/courses/course-card/course-card';
import { useLocaleContext } from '@/context/locale.context';

export const Category = () => {
  const { t } = useLocaleContext();
  return (
    <div className="p-section">
      <h2 className="text-foreground text-2xl font-semibold">{t('courses.top_courses')}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
        <CourseCard size="small" />
      </div>
    </div>
  );
};

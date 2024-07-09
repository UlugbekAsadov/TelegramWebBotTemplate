'use client';

import { MyCourseCard } from '@/components/courses/course-card/my-course-card/my-course-card';
import { useLocaleContext } from '@/context/locale.context';

export const MyCourses = () => {
  const { t } = useLocaleContext();
  return (
    <div className="p-5">
      <h2 className="text-foreground text-2xl font-semibold">{t('courses.my_courses')}</h2>

      <div className="mt-4 flex flex-col space-y-4">
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
      </div>
    </div>
  );
};

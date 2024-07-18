'use client';

import { Courses } from '@/components/courses/courses';
import { SeeAll } from '@/components/ui/see-all';
import { useLocaleContext } from '@/context/locale.context';
import { ICourse } from '@/lib/interfaces/course.interface';

interface IProps {
  sectionTitle: string;
  courses: ICourse[] | undefined;
  href: string;
}

export const CoursesSection = ({ sectionTitle, courses, href }: IProps) => {
  const { t } = useLocaleContext();

  if (!courses?.length) return null;

  return (
    <div className="mt-section">
      <div className="flex items-center justify-between px-section">
        <h2 className="text-foreground font-bold">{t(sectionTitle)}</h2>
        <SeeAll href={href || '/courses'} />
      </div>
      <Courses className="mt-4 pl-section" courses={courses} />
    </div>
  );
};

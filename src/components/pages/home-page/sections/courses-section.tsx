'use client';

import { Courses } from '@/components/courses/courses';
import { SeeAll } from '@/components/ui/see-all';
import { useLocaleContext } from '@/context/locale.context';


interface IProps {
  sectionTitle: string;
}

export const CoursesSection = ({ sectionTitle }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="mt-section">
      <div className="flex items-center justify-between px-section">
        <h2 className="text-foreground font-bold">{t(sectionTitle)}</h2>
        <SeeAll href="/courses" />
      </div>
      <Courses className="mt-4 pl-section" />
    </div>
  );
};

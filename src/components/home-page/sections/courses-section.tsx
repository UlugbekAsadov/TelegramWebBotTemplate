'use client';

import { Courses } from '@/components/courses/courses';
import { useLocaleContext } from '@/context/locale.context';

import { SeeAll } from '../../ui/see-all';

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

import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

import { CourseCard } from './course-card/course-card';

interface IProps extends HTMLProps<HTMLDivElement> {}

export const Courses = ({ className, ...props }: IProps) => {
  return (
    <div className={cn('flex items-center gap-3 overflow-x-scroll', className)} {...props}>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

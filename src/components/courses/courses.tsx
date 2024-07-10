import { HTMLProps } from 'react';

import { ICourse } from '@/lib/interfaces/course.interface';
import { cn } from '@/lib/utils';

import { CourseCard } from './course-card/course-card';

interface IProps extends HTMLProps<HTMLDivElement> {
  courses: ICourse[];
}

export const Courses = ({ className, courses, ...props }: IProps) => {
  return (
    <div className={cn('flex items-center gap-3 overflow-x-scroll', className)} {...props}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

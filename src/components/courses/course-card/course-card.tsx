import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { ICourse } from '@/lib/interfaces/course.interface';
import { cn } from '@/lib/utils';

import { CourseDetails } from './course-details';

const courseCardVariants = cva('rounded-xl bg-card text-card-foreground w-full shadow-courseCard', {
  variants: {
    size: {
      medium: 'min-w-card p-3 ',
      small: 'max-w-card p-2',
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof courseCardVariants> {
  course: ICourse;
}

export const CourseCard = ({ className, size, course, ...props }: IProps) => {
  const mockCourseImage = '/mock-images/course-image.png';

  return (
    <Link
      href={`/courses/${course.id}` || '/courses/:courseId'}
      className={cn(courseCardVariants({ size }), className)}
      {...props}
    >
      <Image src={course.image || mockCourseImage} alt="course-name" width={214} height={143} className="rounded-lg" />
      <CourseDetails size={size} course={course} />
    </Link>
  );
};

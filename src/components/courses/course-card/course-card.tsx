import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

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

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof courseCardVariants> {}

export const CourseCard = ({ className, size, href, ...props }: IProps) => {
  return (
    <Link href={href || '/courses/:courseId'} className={cn(courseCardVariants({ size }), className)} {...props}>
      <Image src="/mock-images/course-image.png" alt="course-name" width={214} height={143} className="rounded-lg" />
      <CourseDetails size={size} />
    </Link>
  );
};

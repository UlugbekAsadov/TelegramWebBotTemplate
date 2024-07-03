import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Clock, MovieIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const courseDetailsVariants = cva('mt-3', {
  variants: {
    size: {
      medium: '[&>p]:text-base [&>p]:line-clamp-1 [&>div>span]:text-sm ',
      small: '[&>p]:text-sm  [&>p]:line-clamp-2 [&>div>span]:text-xs',
    },
  },
});

interface IProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof courseDetailsVariants> {}

export const CourseDetails = ({ size, className, ...props }: IProps) => {
  return (
    <div className={cn(courseDetailsVariants({ size }), className)} {...props}>
      <p className="font-medium text-card-foreground line-clamp-2">UX/UI design figma course</p>
      <div className="flex items-center gap-2 mt-1">
        <MovieIcon />
        <span className="text-muted-foreground">28 lessons</span>
      </div>
      <div className="bg-secondary text-secondary-foreground flex items-center w-fit py-1.5 px-2 rounded-full text-sm gap-1.5 mt-4">
        <Clock />
        <span>2h 37min</span>
      </div>
    </div>
  );
};

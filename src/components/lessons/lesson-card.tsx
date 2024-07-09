import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { PlayIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const lessonCardVariants = cva('w-full p-2.5 flex items-center gap-3  cursor-pointer', {
  variants: {
    variant: {
      default: 'border-b last:border-none',
      bordered: 'border rounded-full',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof lessonCardVariants> {}

export const LessonCard = ({ variant, className, href, ...props }: IProps) => {
  return (
    <Link
      href={href || '/courses/:courseId/:lessonId'}
      className={cn(lessonCardVariants({ variant }), className)}
      {...props}
    >
      <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center text-secondary-foreground text-lg">
        01
      </div>
      <div className="flex-grow">
        <h2 className="font-medium">Middle section</h2>
        <p className="mt-1 text-sm">14 mins</p>
      </div>
      <PlayIcon />
    </Link>
  );
};

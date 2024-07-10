'use client';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

import { PlayIcon } from '@/assets/icons';
import { ILesson } from '@/lib/interfaces/lesson.interface';
import { cn } from '@/lib/utils';

const lessonCardVariants = cva('w-full  flex items-center gap-3  cursor-pointer', {
  variants: {
    variant: {
      default: 'border-b last:border-none',
      bordered: 'border rounded-full p-2.5',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof lessonCardVariants> {
  lesson: ILesson;
  idx: number;
}

export const LessonCard = ({ variant, className, lesson, idx, ...props }: IProps) => {
  const { courseId } = useParams();

  return (
    <Link
      href={`/courses/${courseId}/${lesson.id}` || '/courses/:courseId/:lessonId'}
      className={cn(lessonCardVariants({ variant }), className)}
      {...props}
    >
      <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center text-secondary-foreground text-lg">
        {idx + 1 < 9 ? `0${idx + 1}` : idx + 1}
      </div>
      <div className="flex-grow">
        <h2 className="font-medium">{lesson.title}</h2>
        <p className="mt-1 text-sm">14 mins</p>
      </div>
      <PlayIcon />
    </Link>
  );
};

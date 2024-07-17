'use client';

import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

import { ChevronRightIcon } from '@/assets/icons/chevron-right.icon';
import { ICategory } from '@/lib/interfaces/categories.interface';
import { cn } from '@/lib/utils';

export const categoryVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      small:
        'flex gap-2 flex-col items-center p-3 bg-white max-w-[72px] w-full shadow-category rounded-xl [&>p]:text-sm',
      large:
        'w-full flex items-center gap-3  bg-card text-card-foreground rounded-full p-4 shadow-category [&>p]:text-base [&>p]:flex-1 [&>div]:block]',
    },
  },

  defaultVariants: {
    variant: 'small',
  },
});

export interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof categoryVariants> {
  category: ICategory;
}

export const Category = forwardRef<HTMLAnchorElement, IProps>(
  ({ variant, className, href, category, ...props }, ref) => {
    return (
      <Link
        href={href || '/categories/:categoryId'}
        ref={ref}
        className={cn(categoryVariants({ variant }), className)}
        {...props}
      >
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <Image src={category.image} alt={category.title} width={42} height={42} />
        </div>
        <p className="font-medium ">{category.title}</p>
        <ChevronRightIcon className={cn('hidden', variant === 'large' && 'block')} />
      </Link>
    );
  }
);

Category.displayName = 'Category';

'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLProps } from 'react';

import { ICategory } from '@/lib/interfaces/categories.interface';
import { cn } from '@/lib/utils';

import { Category } from './category';

const categoriesVariants = cva('', {
  variants: {
    variant: {
      scrollable: 'flex items-center gap-x-3 overflow-x-scroll',
      fullWidth: '',
    },
  },

  defaultVariants: {
    variant: 'scrollable',
  },
});

const categoryVariant: Record<'scrollable' | 'fullWidth', 'large' | 'small'> = {
  scrollable: 'small',
  fullWidth: 'large',
};

export interface IProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof categoriesVariants> {
  categories: ICategory[];
}

export const Categories = forwardRef<HTMLDivElement, IProps>(({ variant, className, categories, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(categoriesVariants({ variant }), className)} {...props}>
      {categories.map((category) => (
        <Category
          key={category.id}
          variant={categoryVariant[variant || 'scrollable']}
          href={`/categories/${category.id}`}
          category={category}
        />
      ))}
    </div>
  );
});

Categories.displayName = 'Categories';

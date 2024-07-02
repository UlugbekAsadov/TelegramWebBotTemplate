'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLProps } from 'react';

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

export interface IProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof categoriesVariants> {}

export const Categories = forwardRef<HTMLDivElement, IProps>(({ variant, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(categoriesVariants({ variant }), className)} {...props}>
      <Category variant={categoryVariant[variant || 'scrollable']} />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
});

Categories.displayName = 'Categories';

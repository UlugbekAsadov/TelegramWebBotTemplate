'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLProps } from 'react';

import { Paint } from '@/assets/icons';
import { cn } from '@/lib/utils';

export const categoryVariants = cva('', {
  variants: {
    variant: {
      small: 'flex flex-col items-center p-3 bg-white max-w-[72px] w-full shadow-category rounded-xl',
      large: '',
    },
  },

  defaultVariants: {
    variant: 'small',
  },
});

export interface IProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof categoryVariants> {}

export const Category = forwardRef<HTMLDivElement, IProps>(({ variant, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(categoryVariants({ variant }), className)} {...props}>
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
        <Paint width={32} height={32} />
      </div>
      <p className="font-medium text-sm mt-2">Paint</p>
    </div>
  );
});

Category.displayName = 'Category';

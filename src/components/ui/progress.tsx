'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-3 w-full overflow-hidden rounded-full bg-background', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 flex items-center px-4 justify-between rounded-full bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      {Array.from(new Array(20)).map((_, i) => (
        <span key={i} className="h-5 w-[2.4px] -rotate-45 bg-background" />
      ))}
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

const ProgressSmall = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-[2px] w-full overflow-hidden rounded-full bg-background', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 flex items-center px-4 justify-between rounded-full bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    ></ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
ProgressSmall.displayName = ProgressPrimitive.Root.displayName;

export { ProgressSmall };

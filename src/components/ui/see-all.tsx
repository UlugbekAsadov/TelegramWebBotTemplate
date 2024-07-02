import { HTMLAttributes } from 'react';

import { ArrowRightIcon } from '@/assets/icons';
import { useLocaleContext } from '@/context/locale.context';
import { cn } from '@/lib/utils';

interface IProps extends HTMLAttributes<HTMLElement> {}

export const SeeAll = ({ className, ...props }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div
      className={cn('bg-primary-foreground w-fit rounded-full shadow-md flex items-center gap-1 py-1 px-2', className)}
      {...props}
    >
      <span className="text-primary font-semibold text-sm">{t('common.see_all')}</span>
      <ArrowRightIcon width={16} height={16} />
    </div>
  );
};

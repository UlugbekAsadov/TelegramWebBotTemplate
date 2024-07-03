import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { ArrowRightIcon } from '@/assets/icons';
import { useLocaleContext } from '@/context/locale.context';
import { cn } from '@/lib/utils';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const SeeAll = ({ className, href, ...props }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <Link
      className={cn(
        'bg-primary-foreground w-fit rounded-full shadow-seeAllBtn flex items-center gap-1 py-1 px-2',
        className
      )}
      href={href || '#'}
      {...props}
    >
      <span className="text-primary font-semibold text-sm">{t('common.see_all')}</span>
      <ArrowRightIcon width={16} height={16} />
    </Link>
  );
};

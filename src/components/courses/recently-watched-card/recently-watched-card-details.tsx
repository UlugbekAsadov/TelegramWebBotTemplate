import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLocaleContext } from '@/context/locale.context';

export const RecentlyWatchedCardDetails = () => {
  const { t } = useLocaleContext();
  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <h2 className="text-card-foreground flex-grow">Marketing</h2>
        <div className="bg-white shadow-primaryShadow py-1 px-2 rounded-full w-10 h-[22px] flex items-center justify-center">
          <span className="text-primary text-xs font-semibold">32%</span>
        </div>
      </div>
      <Progress value={32} className="mt-3" />
      <Link href="/my-courses" className="block w-full ">
        <Button className="w-full mt-6">{t('courses.my_courses')}</Button>
      </Link>
    </div>
  );
};

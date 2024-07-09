import { Button } from '@/components/ui/button';
import { useLocaleContext } from '@/context/locale.context';

export const CourseEnroll = () => {
  const { t } = useLocaleContext();
  return (
    <div className="bg-card sticky bottom-0">
      <div className="flex items-center justify-between gap-2  rounded-t-3xl bg-card py-4 px-6 border-t shadow-enrollComponentShadow">
        <div className="flex flex-col items-start">
          <p className='text-sm text-gray-400'>{t('course.total_price')}</p>
          <p className='text-lg font-medium text-primary'>1,900,000 UZS</p>
        </div>
        <Button className='w-2/4 rounded-full' size="lg">{t('course.enroll_now')}</Button>
      </div>
    </div>
  );
};

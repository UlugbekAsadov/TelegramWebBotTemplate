import { ProgressSmall } from '@/components/ui/progress';
import { useLocaleContext } from '@/context/locale.context';

export const MyCourseCardDetails = () => {
  const { t } = useLocaleContext();
  return (
    <div>
      <div className="flex flex-col items-start  mt-3">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-card-foreground flex-grow">Marketing</h2>
        </div>
        <h2 className="text-sm text-gray-400">Anvar Narzullayev & Muhammad Xalil</h2>
      </div>
      <div className="mt-3">
        <p className="text-sm text-primary">
          32% <span className="lowercase">{t('course.finished')}</span>
        </p>
        <ProgressSmall value={32} className="mt-1" />
      </div>
    </div>
  );
};

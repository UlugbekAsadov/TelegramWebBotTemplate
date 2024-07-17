import { ProgressSmall } from '@/components/ui/progress';
import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';

interface IProps {
  course: ISingleCourse;
  isBought: boolean;
}

export const MyCourseCardDetails = ({ course, isBought }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div>
      <div className="flex flex-col items-start  mt-3">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-card-foreground flex-grow">{course.title}</h2>
        </div>
        <h2 className="text-sm text-gray-400">Anvar Narzullayev & Muhammad Xalil (mock)</h2>
      </div>
      {isBought ? (
        <div className="mt-3">
          <p className="text-sm text-primary">
            32% (mock) <span className="lowercase">{t('course.finished')}</span>
          </p>
          <ProgressSmall value={32} className="mt-1" />
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-primary text-lg font-medium">
            {course.price} {t('common.currency')}
          </h2>
        </div>
      )}
    </div>
  );
};

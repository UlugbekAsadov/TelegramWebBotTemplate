import { Button } from '@/components/ui/button';
import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';

interface IProps {
  course: ISingleCourse;
}

export const CourseEnroll = ({ course }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="bg-card sticky bottom-0">
      <div className="flex items-center justify-between gap-2  rounded-t-3xl bg-card py-4 px-6 border-t shadow-enrollComponentShadow">
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-400">{t('course.total_price')}</p>
          <p className="text-lg font-medium text-primary">{course.price}UZS</p>
        </div>
        <Button className="w-2/4 rounded-full" size="lg">
          {t('course.enroll_now')}
        </Button>
      </div>
    </div>
  );
};

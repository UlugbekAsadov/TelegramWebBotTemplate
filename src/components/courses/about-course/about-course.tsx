import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';

interface IProps {
  course: ISingleCourse;
}

export const AboutCourse = ({ course }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="mt-3">
      <h2 className="text-card-foreground text-lg font-semibold">{t('course.about_course')}:</h2>
      <div className="text-gray-400 text-sm mt-2" dangerouslySetInnerHTML={{ __html: course.description }} />
    </div>
  );
};

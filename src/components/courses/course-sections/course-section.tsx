import { LessonCard } from '@/components/lessons/lesson-card';
import { useLocaleContext } from '@/context/locale.context';

interface IProps {
  title: string;
}

export const CourseSection = ({ title }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 flex-grow">{title}</h3>
        <p className="text-primary">{t('course.duration', { duration: 10 })}</p>
      </div>

      <div className="flex flex-col space-y-2 mt-3">
        <LessonCard variant="bordered" />
        <LessonCard variant="bordered" />
        <LessonCard variant="bordered" />
      </div>
    </div>
  );
};

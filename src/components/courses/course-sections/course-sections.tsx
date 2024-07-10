import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';

import { CourseSection } from './course-section';

interface IProps {
  course: ISingleCourse;
}

export const CourseSections = ({ course }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-medium">
        {t('course.lessons')} <span className="text-primary font-medium">(21 (mock))</span>
      </h2>

      <div className="mt-4">
        <CourseSection title="Section 1 - Introduction" course={course} />
      </div>
    </div>
  );
};

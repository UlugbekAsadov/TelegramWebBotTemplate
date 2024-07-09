import { useLocaleContext } from '@/context/locale.context';

import { CourseSection } from './course-section';

export const CourseSections = () => {
  const { t } = useLocaleContext();
  return (
    <div className='mt-3'>
      <h2 className="text-lg font-medium">
        {t('course.lessons')} <span className="text-primary font-medium">(21)</span>
      </h2>

      <div className="mt-4">
        <CourseSection title="Section 1 - Introduction" />
        <CourseSection title="Section 2 - Introduction" />
        <CourseSection title="Section 3 - Introduction" />
        <CourseSection title="Section 4 - Introduction" />
        <CourseSection title="Section 5 - Introduction" />
      </div>
    </div>
  );
};

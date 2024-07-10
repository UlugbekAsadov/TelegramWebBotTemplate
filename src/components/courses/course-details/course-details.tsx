'use client';
import { CourseSections } from '@/components/courses/course-sections/course-sections';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';

import { AboutCourse } from '../about-course/about-course';

interface IProps {
  course: ISingleCourse;
}

export const CourseDetails = ({ course }: IProps) => {
  const { t } = useLocaleContext();

  return (
    <div className="p-4 pb-2 rounded-t-3xl bg-card -mt-10 flex-grow z-20">
      <h2 className="font-semibold text-2xl text-card-foreground">{course.title}</h2>
      <div className="mt-3 bg-secondary py-2 px-3 rounded-lg w-fit">
        <p className="text-sm text-secondary-foreground font-medium">{course.title}</p>
      </div>
      <Tabs defaultValue="lessons" className="w-full mt-3">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="lessons">
            {t('course.lessons')}
          </TabsTrigger>
          <TabsTrigger className="w-full" value="about_course">
            {t('course.about_course')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lessons">
          <CourseSections course={course} />
        </TabsContent>
        <TabsContent value="about_course">
          <AboutCourse course={course} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

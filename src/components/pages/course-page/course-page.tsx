'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { CourseDetails } from '@/components/courses/course-details/course-details';
import { CourseEnroll } from '@/components/courses/course-enroll/course-enroll';
import { CoursePreview } from '@/components/courses/course-preview/course-preview';
import { ISingleCourse } from '@/lib/interfaces/course.interface';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';

interface IProps {
  courseId: string;
}

export const CoursePage = ({ courseId }: IProps) => {
  const router = useRouter();
  const { data: course } = useQuery<ISingleCourse>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  if (!course) {
    router.push('/404');
    return null;
  }

  return (
    <div className="flex flex-col min-h-dvh ">
      <CoursePreview />
      <CourseDetails course={course} />
      <CourseEnroll course={course} />
    </div>
  );
};

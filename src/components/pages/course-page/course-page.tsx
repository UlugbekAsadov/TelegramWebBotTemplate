'use client';
import { CourseDetails } from '@/components/courses/course-details/course-details';
import { CourseEnroll } from '@/components/courses/course-enroll/course-enroll';
import { CoursePreview } from '@/components/courses/course-preview/course-preview';

export const CoursePage = () => {
  return (
    <div className="flex flex-col min-h-dvh ">
      <CoursePreview />
      <CourseDetails />
      <CourseEnroll />
    </div>
  );
};

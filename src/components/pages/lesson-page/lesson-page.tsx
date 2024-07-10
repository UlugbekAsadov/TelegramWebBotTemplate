'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { Lessons } from '@/components/lessons/lessons';
import VideoPlayer from '@/components/video-player';
import { ISingleCourse } from '@/lib/interfaces/course.interface';
import { ILesson } from '@/lib/interfaces/lesson.interface';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';
import { getLessonQueryFn } from '@/react-query/queries/lesson.query';

interface IProps {
  lessonId: string;
  courseId: string;
}

export const LessonPage = ({ lessonId, courseId }: IProps) => {
  const router = useRouter();
  const { data: lesson } = useQuery<ILesson>({
    queryKey: ['lesson', lessonId],
    queryFn: () => getLessonQueryFn(lessonId),
  });

  const { data: course } = useQuery<ISingleCourse>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  if (!lesson) {
    router.push('/404');
    return null;
  }

  return (
    <div className="bg-white min-h-dvh">
      <VideoPlayer src="https://streamable.com/moo" />
      <div className="px-5">
        <Lessons lessons={course?.lessons || []} />
      </div>
    </div>
  );
};

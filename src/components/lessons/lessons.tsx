import { ILesson } from '@/lib/interfaces/lesson.interface';

import { LessonCard } from './lesson-card';

interface IProps {
  lessons: ILesson[];
}

export const Lessons = ({ lessons }: IProps) => {
  return (
    <div className='mt-4'>
      {lessons.map((lesson, idx) => (
        <LessonCard key={lesson.id} lesson={lesson} idx={idx} />
      ))}
    </div>
  );
};

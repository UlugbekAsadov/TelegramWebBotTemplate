import { ILesson } from './lesson.interface';

export interface ICourse {
  id: number;
  image: string;
  lessonsCount: number;
  title: string;
}

export interface ISingleCourse {
  id: number;
  description: string;
  image: string;
  title: string;
  price: string;
  lessons: ILesson[];
}

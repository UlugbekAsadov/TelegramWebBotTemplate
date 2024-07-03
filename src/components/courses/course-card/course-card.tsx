import Image from 'next/image';

import { CourseDetails } from './course-details';

export const CourseCard = () => {
  return (
    <div className="p-3 rounded-xl bg-card text-card-foreground min-w-card shadow-courseCard">
      <Image src="/mock-images/course-image.png" alt="course-name" width={214} height={143} className="rounded-lg" />
      <CourseDetails />
    </div>
  );
};

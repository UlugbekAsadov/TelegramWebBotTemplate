'use client';
import Image from 'next/image';

import { MyCourseCardDetails } from './my-course-card-details';

export const MyCourseCard = () => {
  return (
    <div className="bg-card py-4 px-3 rounded-lg shadow-courseCard">
      <Image src="/mock-images/my-course-image.png" alt="my_course" width={425} height={250} className="object-cover" />
      <MyCourseCardDetails />
    </div>
  );
};

'use client';
import Image from 'next/image';

import { ISingleCourse } from '@/lib/interfaces/course.interface';

import { MyCourseCardDetails } from './my-course-card-details';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isBought: boolean;
  course: ISingleCourse;
}

export const MyCourseCard = ({ isBought, course, className, ...props }: IProps) => {
  const mockImage = `/mock-images/my-course-image.png`;
  return (
    <Link
      href={`/courses/${course.id}`}
      className={twMerge('bg-card py-4 px-3 rounded-lg shadow-courseCard block', className)}
      {...props}
    >
      <Image
        src={course.image || mockImage}
        alt="my_course"
        width={425}
        height={250}
        className="object-cover rounded-xl"
      />
      <MyCourseCardDetails course={course} isBought={isBought} />
    </Link>
  );
};

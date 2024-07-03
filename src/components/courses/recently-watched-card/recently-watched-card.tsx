'use client';
import Image from 'next/image';

import { RecentlyWatchedCardDetails } from './recently-watched-card-details';

export const RecentlyWatchedCard = () => {
  return (
    <div className="bg-card py-4 px-3 rounded-lg">
      <Image src="/mock-images/my-course-image.png" alt="my_course" width={425} height={250} className="object-cover" />
      <RecentlyWatchedCardDetails />
    </div>
  );
};

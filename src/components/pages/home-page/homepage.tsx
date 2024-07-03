import { Header } from '@/components/header';

import { CategoriesSection } from './sections/categories-section';
import { CoursesSection } from './sections/courses-section';
import { RecentlyWatchedSection } from './sections/recently-watched-section';

export const Homepage = () => {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <RecentlyWatchedSection />
      <CoursesSection sectionTitle="courses.top_courses" />
      <CoursesSection sectionTitle="courses.new_courses" />
    </div>
  );
};

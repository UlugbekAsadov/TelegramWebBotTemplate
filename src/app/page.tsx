import { Header } from '@/components/header';
import { CategoriesSection } from '@/components/home-page/sections/categories-section';
import { CoursesSection } from '@/components/home-page/sections/courses-section';
import { RecentlyWatchedSection } from '@/components/home-page/sections/recently-watched-section';

export default function Home() {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <RecentlyWatchedSection />
      <CoursesSection sectionTitle="courses.top_courses" />
      <CoursesSection sectionTitle="courses.new_courses" />
    </div>
  );
}

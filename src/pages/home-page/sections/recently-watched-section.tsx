import { RecentlyWatchedCard } from '@/components/courses/recently-watched-card/recently-watched-card';

export const RecentlyWatchedSection = () => {
  return (
    <div className="mt-section px-section">
      <div className="bg-card pt-3  rounded-lg shadow-courseCard">
        <h2 className="text-lg font-medium text-card-foreground px-4">Recently watched</h2>
        <RecentlyWatchedCard />
      </div>
    </div>
  );
};

import { PlayIcon } from '@/assets/icons';

export const LessonCard = () => {
  return (
    <div className="w-full p-2.5 flex items-center gap-3 border-b last:border-none cursor-pointer">
      <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center text-secondary-foreground text-lg">
        01
      </div>
      <div className="flex-grow">
        <h2 className="font-medium">Middle section</h2>
        <p className="mt-1 text-sm">14 mins</p>
      </div>
      <PlayIcon />
    </div>
  );
};

import { Clock, MovieIcon } from '@/assets/icons';

export const CourseDetails = () => {
  return (
    <div>
      <p className="font-medium text-card-foreground line-clamp-1">UX/UI design figma course</p>
      <div className="flex items-center gap-2 mt-1">
        <MovieIcon />
        <p className="text-muted-foreground">28 lessons</p>
      </div>
      <div className="bg-secondary text-secondary-foreground flex items-center w-fit py-1.5 px-2 rounded-full text-sm gap-1.5 mt-4">
        <Clock />
        <span>2h 37min</span>
      </div>
    </div>
  );
};

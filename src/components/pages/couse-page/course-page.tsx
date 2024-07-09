import { Lessons } from '@/components/lessons/lessons';
import VideoPlayer from '@/components/video-player/video-player';

export const CoursePage = () => {
  return (
    <div className="bg-white h-dvh overflow-scroll">
      <VideoPlayer className="h-[211px] w-full bg-black sticky top-0" src="http://www.w3schools.com/html/movie.mp4" />
      <div className="px-5">
        <Lessons />
      </div>
    </div>
  );
};

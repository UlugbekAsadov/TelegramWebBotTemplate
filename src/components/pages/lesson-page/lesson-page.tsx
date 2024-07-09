import { Lessons } from '@/components/lessons/lessons';
import VideoPlayer from '@/components/video-player';

export const LessonPage = () => {
  return (
    <div className="bg-white min-h-dvh">
      <VideoPlayer src="http://www.w3schools.com/html/movie.mp4" />
      <div className="px-5">
        <Lessons />
      </div>
    </div>
  );
};

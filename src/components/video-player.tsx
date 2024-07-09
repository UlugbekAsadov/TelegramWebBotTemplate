'use client';
import { forwardRef, VideoHTMLAttributes } from 'react';
import ReactPlayer from 'react-player';

interface IProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export interface IVideoSettings {
  speed: string;
  volume: string;
  isPlaying: boolean;
  fullScreen: boolean;
  currentDuration: number;
  currentProgress: number;
  totalDuration: number;
}

export type VideoSettingsUpdate =
  | { field: 'speed' | 'volume'; value: string }
  | { field: 'isPlaying' | 'fullScreen'; value: boolean }
  | { field: 'currentDuration' | 'currentProgress' | 'totalDuration'; value: number };

export const VideoPlayer = forwardRef<HTMLVideoElement, IProps>(() => {
  const fallback = (
    <div className="w-full h-full bg-black grid place-content-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full h-fit relative group">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://streamable.com/moo"
          width="100%"
          stopOnUnmount
          fallback={fallback}
          height="200px"
        />
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

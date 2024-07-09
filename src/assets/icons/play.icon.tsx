import { SVGProps } from 'react';

export const PlayIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="15.9998" cy="16" rx="13.3333" ry="13.3333" fill="#3E97FF" />
      <path
        d="M20.5516 14.588C21.5939 15.2034 21.5939 16.7965 20.5516 17.412L14.258 21.1277C13.2449 21.7259 12 20.9474 12 19.7158L12 12.2842C12 11.0526 13.2449 10.2741 14.258 10.8723L20.5516 14.588Z"
        fill="white"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const VideoPlayIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M26.0623 14.8753L0.0622579 29.3753L0.0622592 0.375274L26.0623 14.8753Z" fill="#FCFCFF" />
    </svg>
  );
};

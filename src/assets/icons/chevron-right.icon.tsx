import { SVGProps } from 'react';

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 4.16699L12.5 10.0003L7.5 15.8337"
        stroke="#171717"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

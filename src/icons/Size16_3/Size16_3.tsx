/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Size16_3 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`size-16-3 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47284 7.33333 8.00008 7.33333C6.52732 7.33333 5.33341 6.13943 5.33341 4.66667C5.33341 3.19391 6.52732 2 8.00008 2C9.47284 2 10.6667 3.19391 10.6667 4.66667Z"
        stroke="#1E1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
};

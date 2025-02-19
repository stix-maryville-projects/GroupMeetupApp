/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const User = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user ${className}`}
      fill="none"
      height="92"
      viewBox="0 0 92 92"
      width="92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M76.6668 80.5V72.8333C76.6668 68.7667 75.0514 64.8666 72.1758 61.991C69.3002 59.1155 65.4001 57.5 61.3335 57.5H30.6668C26.6002 57.5 22.7001 59.1155 19.8245 61.991C16.949 64.8666 15.3335 68.7667 15.3335 72.8333V80.5M61.3335 26.8333C61.3335 35.3017 54.4685 42.1667 46.0002 42.1667C37.5318 42.1667 30.6668 35.3017 30.6668 26.8333C30.6668 18.365 37.5318 11.5 46.0002 11.5C54.4685 11.5 61.3335 18.365 61.3335 26.8333Z"
        stroke="#AB5113"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7"
      />
    </svg>
  );
};

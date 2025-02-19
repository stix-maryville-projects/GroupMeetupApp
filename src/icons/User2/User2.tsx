/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const User2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`user-2 ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 33 33"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M27.3354 28.6901V25.9812C27.3354 24.5443 26.7646 23.1663 25.7486 22.1502C24.7326 21.1342 23.3545 20.5634 21.9176 20.5634H11.0821C9.6452 20.5634 8.26717 21.1342 7.25114 22.1502C6.23511 23.1663 5.66431 24.5443 5.66431 25.9812V28.6901M21.9176 9.72784C21.9176 12.72 19.492 15.1456 16.4999 15.1456C13.5077 15.1456 11.0821 12.72 11.0821 9.72784C11.0821 6.73568 13.5077 4.31006 16.4999 4.31006C19.492 4.31006 21.9176 6.73568 21.9176 9.72784Z"
        stroke="#AB5113"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
};

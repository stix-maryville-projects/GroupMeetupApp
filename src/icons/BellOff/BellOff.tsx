/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BellOff = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`bell-off ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_21_49)">
        <path
          className="path"
          d="M27.46 42C27.1084 42.6062 26.6037 43.1093 25.9965 43.4591C25.3892 43.8088 24.7008 43.9929 24 43.9929C23.2992 43.9929 22.6108 43.8088 22.0035 43.4591C21.3963 43.1093 20.8916 42.6062 20.54 42M37.26 26C36.3703 22.7428 35.9461 19.3761 36 16C36.0032 13.8261 35.4159 11.6922 34.3007 9.82618C33.1855 7.96015 31.5843 6.43211 29.6682 5.40528C27.7522 4.37844 25.5931 3.89139 23.4218 3.99613C21.2504 4.10088 19.1483 4.7935 17.34 6M12.52 12.52C12.1725 13.6472 11.9972 14.8204 12 16C12 30 6 34 6 34H34M2 2L46 46"
          stroke="#AB5113"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_21_49">
          <rect className="rect" fill="white" height="48" width="48" />
        </clipPath>
      </defs>
    </svg>
  );
};

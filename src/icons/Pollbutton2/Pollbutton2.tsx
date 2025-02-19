/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Pollbutton2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`pollbutton-2 ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_26_170)">
        <rect
          className="rect"
          fill="url(#paint0_linear_26_170)"
          height="48"
          rx="5"
          width="48"
          x="4"
        />
      </g>

      <path
        className="path"
        d="M38 39V23.7887M17 39V18.7183M27.2857 39V9"
        stroke="#AB5113"
        strokeLinecap="round"
        strokeWidth="5"
      />

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="56"
          id="filter0_d_26_170"
          width="56"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" dy="4" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_26_170"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_26_170"
            mode="normal"
            result="shape"
          />
        </filter>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_26_170"
          x1="28"
          x2="28"
          y1="0"
          y2="48"
        >
          <stop className="stop" stopColor="#FCEED1" />

          <stop className="stop" offset="1" stopColor="#FFDF9C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

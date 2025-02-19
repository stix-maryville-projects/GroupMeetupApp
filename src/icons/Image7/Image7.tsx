/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Image7 = ({
  color = "#AB5113",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`image-7 ${className}`}
      fill="none"
      height="130"
      viewBox="0 0 129 130"
      width="129"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M27.0333 113.241H102.167C108.095 113.241 112.9 108.432 112.9 102.499V27.3019C112.9 21.369 108.095 16.5595 102.167 16.5595H27.0333C21.1055 16.5595 16.3 21.369 16.3 27.3019V102.499C16.3 108.432 21.1055 113.241 27.0333 113.241ZM27.0333 113.241L86.0667 54.1579L112.9 81.0139M53.8667 46.1011C53.8667 50.5507 50.2625 54.1579 45.8167 54.1579C41.3708 54.1579 37.7667 50.5507 37.7667 46.1011C37.7667 41.6515 41.3708 38.0443 45.8167 38.0443C50.2625 38.0443 53.8667 41.6515 53.8667 46.1011Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
};

Image7.propTypes = {
  color: PropTypes.string,
};

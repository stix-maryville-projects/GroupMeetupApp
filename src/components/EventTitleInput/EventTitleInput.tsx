/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const EventTitleInput = ({ className }: Props): JSX.Element => {
  return (
    <div className={`event-title-input ${className}`}>
      <div className="text-wrapper-2">Event Title</div>
    </div>
  );
};

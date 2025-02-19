/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { X } from "../../icons/X";
import "./style.css";

interface Props {
  className: any;
}

export const Delete = ({ className }: Props): JSX.Element => {
  return (
    <div className={`delete ${className}`}>
      <X className="size-48-2" color="#AB5113" />
    </div>
  );
};

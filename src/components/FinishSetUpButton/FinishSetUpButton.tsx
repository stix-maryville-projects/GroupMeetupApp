/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
  className: any;
  text: string;
  divClassName: any;
}

export const FinishSetUpButton = ({
  className,
  text = "Finish Set Up",
  divClassName,
}: Props): JSX.Element => {
  return (
    <Link className={`finish-set-up-button ${className}`} to="/upcomingevents">
      <div className={`finish-set-up ${divClassName}`}>{text}</div>
    </Link>
  );
};

FinishSetUpButton.propTypes = {
  text: PropTypes.string,
};

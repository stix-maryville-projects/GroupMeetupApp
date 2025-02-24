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
  to: string;
}

export const HomeButton = ({ className, to }: Props): JSX.Element => {
  return (
    <Link className={`home-button ${className}`} to={to}>
      <div className="overlap-group">
        <img className="line" alt="Line" src="/img/line-3.svg" />

        <img className="img" alt="Line" src="/img/line-4.svg" />
      </div>
    </Link>
  );
};

HomeButton.propTypes = {
  to: PropTypes.string,
};

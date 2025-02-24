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

export const MessageSquare = ({ className, to }: Props): JSX.Element => {
  return <Link className={`message-square ${className}`} to={to} />;
};

MessageSquare.propTypes = {
  to: PropTypes.string,
};

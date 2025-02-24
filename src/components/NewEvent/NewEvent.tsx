/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const NewEvent = ({ property1, className }: Props): JSX.Element => {
  return (
    <Link className={`new-event ${className}`} to="/new-event-creation">
      <div className={`div property-1-${property1}`}>New Event</div>
    </Link>
  );
};

NewEvent.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

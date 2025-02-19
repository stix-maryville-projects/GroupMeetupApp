/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Image7 } from "../../icons/Image7";
import "./style.css";

interface Props {
  className: any;
  text: string;
  text1: string;
}

export const Image = ({
  className,
  text = "Event Title<br/>",
  text1 = "Short event description that should only fill a couple lines.",
}: Props): JSX.Element => {
  return (
    <Link className={`image ${className}`} to="/new-event-creation">
      <p className="event-title-short">
        <span className="span">{text}</span>

        <span className="text-wrapper-15">
          <br />
        </span>

        <span className="text-wrapper-16">{text1}</span>
      </p>

      <div className="image-wrapper">
        <Image7 className="image-7" color="#AB5113" />
      </div>
    </Link>
  );
};

Image.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};

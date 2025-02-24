/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Image3 } from "../../icons/Image3";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  text: string;
  text1: string;
}

export const Image = ({
  property1,
  className,
  text = "Event Title<br/>",
  text1 = "Short event description that should only fill a couple lines.",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`image ${className}`}
      to="/new-event-creation"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className="event-title-short">
        <span className="span">{text}</span>

        <span className="text-wrapper-8">
          <br />
        </span>

        <span className="text-wrapper-9">{text1}</span>
      </p>

      <div className={`image-wrapper property-1-3-${state.property1}`}>
        <Image3 className="image-3" color="#AB5113" />
      </div>
    </Link>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Image.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

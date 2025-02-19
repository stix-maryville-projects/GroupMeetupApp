/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const AcceptDecline = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`accept-decline ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="accept-invite">
        {state.property1 === "default" && <>Accept Invite</>}

        {state.property1 === "variant-2" && <>Decline Invite</>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

AcceptDecline.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

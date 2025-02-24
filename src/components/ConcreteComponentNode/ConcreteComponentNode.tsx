/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Image3 } from "../../icons/Image3";
import { Size16 } from "../../icons/Size16";
import { Size20 } from "../../icons/Size20";
import { Size24 } from "../../icons/Size24";
import { Size32 } from "../../icons/Size32";
import { Size40 } from "../../icons/Size40";
import "./style.css";

interface Props {
  size:
    | "sixteen"
    | "twenty-four"
    | "forty-eight"
    | "twenty"
    | "thirty-two"
    | "forty";
}

export const ConcreteComponentNode = ({ size }: Props): JSX.Element => {
  return (
    <>
      {size === "forty-eight" && <Image3 className="size" color="#1E1E1E" />}

      {size === "sixteen" && <Size16 className="size-16" />}

      {size === "twenty" && <Size20 className="size-20" />}

      {size === "twenty-four" && <Size24 className="size-24" />}

      {size === "thirty-two" && <Size32 className="size-32" />}

      {size === "forty" && <Size40 className="size-40" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  size: PropTypes.oneOf([
    "sixteen",
    "twenty-four",
    "forty-eight",
    "twenty",
    "thirty-two",
    "forty",
  ]),
};

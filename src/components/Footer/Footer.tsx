/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  line: string;
  img: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
}

export const Footer = ({
  className,
  line = "/img/line-1.svg",
  img = "/img/line-2.svg",
  line1 = "/img/line-1.svg",
  line2 = "/img/line-2.svg",
  line3 = "/img/line-1.svg",
  line4 = "/img/line-2.svg",
  line5 = "/img/line-1.svg",
  line6 = "/img/line-2.svg",
}: Props): JSX.Element => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap">
        <img className="line" alt="Line" src={line} />

        <img className="img" alt="Line" src={img} />
      </div>

      <div className="overlap-group">
        <img className="line" alt="Line" src={line1} />

        <img className="img" alt="Line" src={line2} />
      </div>

      <div className="div">
        <img className="line" alt="Line" src={line3} />

        <img className="img" alt="Line" src={line4} />
      </div>

      <div className="overlap-group-2">
        <img className="line" alt="Line" src={line5} />

        <img className="img" alt="Line" src={line6} />
      </div>

      <div className="text-wrapper">Contact Us</div>

      <p className="XXX-XXX-XXXX">
        (XXX) XXX-XXXX
        <br />
        randomEmail@email.com
        <br />
        <br />
        9999 Address Street <br />
        Address, Address ZipCode
      </p>
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  line5: PropTypes.string,
  line6: PropTypes.string,
};

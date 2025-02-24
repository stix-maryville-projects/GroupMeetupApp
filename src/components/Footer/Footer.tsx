/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  lineClassName: any;
  line: string;
  lineClassNameOverride: any;
  img: string;
  imgClassName: any;
  line1: string;
  imgClassNameOverride: any;
  line2: string;
  lineClassName1: any;
  line3: string;
  lineClassName2: any;
  line4: string;
  lineClassName3: any;
  line5: string;
  lineClassName4: any;
  line6: string;
}

export const Footer = ({
  className,
  lineClassName,
  line = "/img/line-3.svg",
  lineClassNameOverride,
  img = "/img/image.svg",
  imgClassName,
  line1 = "/img/line-3.svg",
  imgClassNameOverride,
  line2 = "/img/image.svg",
  lineClassName1,
  line3 = "/img/line-3.svg",
  lineClassName2,
  line4 = "/img/image.svg",
  lineClassName3,
  line5 = "/img/line-3.svg",
  lineClassName4,
  line6 = "/img/image.svg",
}: Props): JSX.Element => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap-group-3">
        <div className="overlap">
          <img className={`line-2 ${lineClassName}`} alt="Line" src={line} />

          <img
            className={`line-3 ${lineClassNameOverride}`}
            alt="Line"
            src={img}
          />
        </div>

        <div className="overlap-2">
          <img className={`line-2 ${imgClassName}`} alt="Line" src={line1} />

          <img
            className={`line-3 ${imgClassNameOverride}`}
            alt="Line"
            src={line2}
          />
        </div>

        <div className="overlap-3">
          <img className={`line-2 ${lineClassName1}`} alt="Line" src={line3} />

          <img className={`line-3 ${lineClassName2}`} alt="Line" src={line4} />
        </div>

        <div className="overlap-4">
          <img className={`line-2 ${lineClassName3}`} alt="Line" src={line5} />

          <img className={`line-3 ${lineClassName4}`} alt="Line" src={line6} />
        </div>

        <div className="text-wrapper-7">Contact Us</div>

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

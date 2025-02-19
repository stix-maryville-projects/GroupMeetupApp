/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Search1 } from "../../icons/Search1";
import { DistanceInput } from "../DistanceInput";
import { MessageSquare } from "../MessageSquare";
import { Notifications } from "../Notifications";
import { ZipCodeInput } from "../ZipCodeInput";
import "./style.css";

interface Props {
  className: any;
  to: string;
  to1: string;
}

export const NavigationBar = ({ className, to, to1 }: Props): JSX.Element => {
  return (
    <div className={`navigation-bar ${className}`}>
      <Notifications
        className="design-component-instance-node"
        property1="default"
      />
      <Search1 className="search" color="#AB5113" />
      <ZipCodeInput
        className="zip-code-input-instance"
        divClassName="design-component-instance-node-2"
      />
      <DistanceInput
        className="distance-input-instance"
        divClassName="design-component-instance-node-2"
      />
      <MessageSquare className="message-square-2" to={to} />
      <Link to={to1}>
        <img
          className="home-button-2"
          alt="Home button"
          src="/img/homebutton.svg"
        />
      </Link>
    </div>
  );
};

NavigationBar.propTypes = {
  to: PropTypes.string,
  to1: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "../MessageSquare";
import { Notifications } from "../Notifications";
import "./style.css";

interface Props {
  className: any;
  text: string;
  homeButton: string;
  to: string;
  to1: string;
}

export const NavigationBarW = ({
  className,
  text = "New Event",
  homeButton = "/img/homebutton.svg",
  to,
  to1,
}: Props): JSX.Element => {
  return (
    <div className={`navigation-bar-w ${className}`}>
      <Notifications className="notifications-instance" property1="default" />
      <div className="new-event">{text}</div>

      <MessageSquare className="message-square-instance" to={to} />
      <Link to={to1}>
        <img className="home-button" alt="Home button" src={homeButton} />
      </Link>
    </div>
  );
};

NavigationBarW.propTypes = {
  text: PropTypes.string,
  homeButton: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};

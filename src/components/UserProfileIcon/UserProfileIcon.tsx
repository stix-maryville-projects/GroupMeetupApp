/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { User } from "../../icons/User";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element;
}

export const UserProfileIcon = ({
  className,
  icon = <User className="user-instance" />,
}: Props): JSX.Element => {
  return <div className={`user-profile-icon ${className}`}>{icon}</div>;
};

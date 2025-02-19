/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const InvitePanel = ({ className }: Props): JSX.Element => {
  return (
    <div className={`invite-panel ${className}`}>
      <div className="overlap-2">
        <div className="rectangle" />

        <div className="text-wrapper-8">New Invited</div>

        <div className="rectangle-2" />

        <div className="text-wrapper-9">Enter</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper-10">Invited</div>
      </div>

      <div className="rectangle-wrapper">
        <div className="rectangle-3" />
      </div>

      <div className="overlap-3">
        <div className="rectangle-4" />

        <div className="text-wrapper-11">friendUsername</div>
      </div>

      <div className="overlap-4">
        <div className="rectangle-4" />

        <div className="text-wrapper-11">otherFriendUsername</div>
      </div>

      <div className="overlap-group-3">
        <div className="rectangle-4" />

        <div className="text-wrapper-11">newFriend</div>
      </div>

      <div className="rectangle-5" />

      <div className="rectangle-6" />

      <div className="rectangle-7" />
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavigationPanel = (): JSX.Element => {
  return (
    <div className="navigation-panel">
      <div className="navigation-panel-wrapper">
        <div className="div-7">
          <div className="text-wrapper-41">Log Out</div>

          <Link className="text-wrapper-42" to="/new-event-creation">
            New Event
          </Link>

          <Link className="text-wrapper-43" to="/home-screen">
            Home
          </Link>

          <Link className="text-wrapper-44" to="/upcomingevents">
            Upcoming Events
          </Link>

          <Link className="text-wrapper-45" to="/profile">
            Profile
          </Link>

          <Link to="/navigationpanel">
            <img
              className="home-button-3"
              alt="Home button"
              src="/img/homebutton.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

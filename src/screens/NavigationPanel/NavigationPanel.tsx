import React from "react";
import { Link } from "react-router-dom";
import { Home } from "../../components/Home";
import { LogOut } from "../../components/LogOut";
import { NewEvent } from "../../components/NewEvent";
import { Profile } from "../../components/Profile";
import { UpcomingEvents } from "../../components/UpcomingEvents";
import "./style.css";

export const NavigationPanel = (): JSX.Element => {
  return (
    <div className="navigation-panel">
      <div className="navigation-panel-wrapper">
        <div className="div-2">
          <Link to="/navigationpanel">
            <img
              className="home-button-3"
              alt="Home button"
              src="/img/homebutton.svg"
            />
          </Link>

          <div className="overlap-group-4">
            <Home className="home-instance" property1="default" />
            <NewEvent className="new-event-instance" property1="default" />
            <UpcomingEvents
              className="upcoming-events-instance"
              property1="default"
            />
          </div>

          <Profile className="profile-instance" property1="default" />
          <LogOut className="log-out-instance" />
        </div>
      </div>
    </div>
  );
};

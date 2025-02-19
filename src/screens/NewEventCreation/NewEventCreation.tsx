import React from "react";
import { DateInput } from "../../components/DateInput";
import { DescriptionInput } from "../../components/DescriptionInput";
import { EventTitleInput } from "../../components/EventTitleInput";
import { FinishSetUpButton } from "../../components/FinishSetUpButton";
import { Footer } from "../../components/Footer";
import { InvitePanel } from "../../components/InvitePanel";
import { LocationInput } from "../../components/LocationInput";
import { NavigationBarW } from "../../components/NavigationBarW";
import { OccasionInput } from "../../components/OccasionInput";
import { TimeInput } from "../../components/TimeInput";
import { Pollbutton1 } from "../../icons/Pollbutton1";
import { Pollbutton2 } from "../../icons/Pollbutton2";
import { Pollbutton3 } from "../../icons/Pollbutton3";
import "./style.css";

export const NewEventCreation = (): JSX.Element => {
  return (
    <div className="new-event-creation">
      <div className="div-3">
        <Footer className="footer-instance" />
        <EventTitleInput className="event-title-input-instance" />
        <DescriptionInput className="description-input-instance" />
        <LocationInput className="location-input-instance" />
        <DateInput className="date-input-instance" />
        <div className="overlap-5">
          <TimeInput className="time-input-instance" />
          <TimeInput className="time-input-3" divClassName="time-input-2" />
        </div>

        <OccasionInput className="occasion-input-instance" />
        <Pollbutton1 className="poll-button" />
        <Pollbutton2 className="pollbutton-2" />
        <Pollbutton3 className="pollbutton-3" />
        <InvitePanel className="invite-panel-instance" />
        <FinishSetUpButton className="finish-set-up-button-instance" />
        <NavigationBarW
          className="navigation-bar-w-page-title"
          to="/messagepanel"
          to1="/navigationpanel"
        />
      </div>
    </div>
  );
};

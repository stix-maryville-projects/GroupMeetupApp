import React from "react";
import { AcceptDecline } from "../../components/AcceptDecline";
import { Footer } from "../../components/Footer";
import { NavigationBarW } from "../../components/NavigationBarW";
import { Pollbutton7 } from "../../icons/Pollbutton7";
import { Pollbutton8 } from "../../icons/Pollbutton8";
import { Pollbutton9 } from "../../icons/Pollbutton9";
import "./style.css";

export const Eventview = (): JSX.Element => {
  return (
    <div className="eventview">
      <div className="div-10">
        <NavigationBarW
          className="navigation-bar-w-3"
          text="Event Title"
          to="/messagepanel"
        />
        <div className="invite-panel-2">
          <div className="overlap-38">
            <div className="overlap-group-9">
              <div className="text-wrapper-55">Invited</div>
            </div>

            <div className="overlap-39">
              <div className="rectangle-23" />
            </div>

            <div className="overlap-40">
              <div className="rectangle-24" />

              <div className="text-wrapper-56">friendUsername</div>
            </div>

            <div className="overlap-41">
              <div className="rectangle-24" />

              <div className="text-wrapper-56">otherFriendUsername</div>
            </div>

            <div className="overlap-42">
              <div className="rectangle-24" />

              <div className="text-wrapper-56">newFriend</div>
            </div>

            <div className="rectangle-25" />

            <div className="rectangle-26" />

            <div className="rectangle-27" />
          </div>
        </div>

        <Footer
          className="footer-5"
          img="/img/line-2-2.svg"
          line="/img/line-1-2.svg"
          line1="/img/line-1-2.svg"
          line2="/img/line-2-2.svg"
          line3="/img/line-1-2.svg"
          line4="/img/line-2-2.svg"
          line5="/img/line-1-2.svg"
          line6="/img/line-2-2.svg"
        />
        <div className="text-wrapper-57">Occasion</div>

        <div className="group-3">
          <div className="overlap-43">
            <div className="text-wrapper-58">Location</div>

            <Pollbutton7 className="pollbutton-7" />
          </div>
        </div>

        <div className="group-4">
          <div className="text-wrapper-59">Date</div>

          <Pollbutton8 className="pollbutton-8" />
        </div>

        <div className="group-5">
          <div className="text-wrapper-60">Time</div>

          <Pollbutton9 className="pollbutton-9" />
        </div>

        <div className="description-input-4">
          <div className="overlap-44">
            <div className="text-wrapper-61">Description...</div>
          </div>
        </div>

        <div className="accept-decline-wrapper">
          <AcceptDecline
            className="accept-decline-instance"
            property1="default"
          />
        </div>
      </div>
    </div>
  );
};

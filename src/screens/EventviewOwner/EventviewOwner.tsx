import React from "react";
import { Link } from "react-router-dom";
import { DescriptionInput } from "../../components/DescriptionInput";
import { FinishSetUpButton } from "../../components/FinishSetUpButton";
import { Footer } from "../../components/Footer";
import { NavigationBarW } from "../../components/NavigationBarW";
import { Pollbutton4 } from "../../icons/Pollbutton4";
import { Pollbutton5 } from "../../icons/Pollbutton5";
import { Pollbutton6 } from "../../icons/Pollbutton6";
import "./style.css";

export const EventviewOwner = (): JSX.Element => {
  return (
    <div className="eventview-owner">
      <div className="div-9">
        <NavigationBarW
          className="navigation-bar-w-2"
          text="Event Title"
          to="/messagepanel"
        />
        <div className="overlap-wrapper">
          <div className="overlap-31">
            <div className="overlap-32">
              <div className="text-wrapper-49">Invited</div>
            </div>

            <div className="overlap-33">
              <div className="rectangle-18" />
            </div>

            <div className="overlap-34">
              <div className="rectangle-19" />

              <div className="text-wrapper-50">friendUsername</div>
            </div>

            <div className="overlap-group-8">
              <div className="rectangle-19" />

              <div className="text-wrapper-50">otherFriendUsername</div>
            </div>

            <div className="overlap-35">
              <div className="rectangle-19" />

              <div className="text-wrapper-50">newFriend</div>
            </div>

            <div className="rectangle-20" />

            <div className="rectangle-21" />

            <div className="rectangle-22" />
          </div>
        </div>

        <Footer
          className="footer-4"
          img="/img/line-2-2.svg"
          line="/img/line-1-2.svg"
          line1="/img/line-1-2.svg"
          line2="/img/line-2-2.svg"
          line3="/img/line-1-2.svg"
          line4="/img/line-2-2.svg"
          line5="/img/line-1-2.svg"
          line6="/img/line-2-2.svg"
        />
        <div className="text-wrapper-51">Occasion</div>

        <div className="group">
          <div className="overlap-36">
            <div className="text-wrapper-52">Location</div>

            <Pollbutton4 className="pollbutton-4" />
          </div>
        </div>

        <div className="group-2">
          <div className="text-wrapper-53">Date</div>

          <Pollbutton5 className="pollbutton-5" />
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-37">
            <div className="text-wrapper-54">Time</div>

            <Pollbutton6 className="pollbutton-6" />
          </div>
        </div>

        <DescriptionInput
          className="description-input-3"
          divClassName="description-input-2"
        />
        <FinishSetUpButton
          className="finish-set-up-button-6"
          divClassName="finish-set-up-button-5"
          text="Confirm Event"
        />
        <Link to="/new-event-creation">
          <img
            className="finish-set-up-button-7"
            alt="Finish set up button"
            src="/img/finishsetupbutton.png"
          />
        </Link>
      </div>
    </div>
  );
};

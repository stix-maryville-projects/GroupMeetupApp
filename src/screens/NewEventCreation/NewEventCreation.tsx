import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "../../components/HomeButton";
import { MessageSquare } from "../../components/MessageSquare";
import { Notifications } from "../../components/Notifications";
import "./style.css";

export const NewEventCreation = (): JSX.Element => {
  return (
    <div className="new-event-creation">
      <div className="div-7">
        <footer className="footer-5">
          <div className="overlap-19">
            <img className="line-6" alt="Line" src="/img/line-1.svg" />

            <img className="line-7" alt="Line" src="/img/line-2.svg" />
          </div>

          <div className="overlap-20">
            <img className="line-6" alt="Line" src="/img/line-1.svg" />

            <img className="line-7" alt="Line" src="/img/line-2.svg" />
          </div>

          <div className="overlap-21">
            <img className="line-6" alt="Line" src="/img/line-1.svg" />

            <img className="line-7" alt="Line" src="/img/line-2.svg" />
          </div>

          <div className="overlap-group-8">
            <img className="line-6" alt="Line" src="/img/line-1.svg" />

            <img className="line-7" alt="Line" src="/img/line-2.svg" />
          </div>

          <div className="text-wrapper-30">Contact Us</div>

          <p className="XXX-XXX-XXXX-3">
            (XXX) XXX-XXXX
            <br />
            randomEmail@email.com
            <br />
            <br />
            9999 Address Street <br />
            Address, Address ZipCode
          </p>
        </footer>

        <div className="event-title-input">
          <div className="text-wrapper-31">Event Title</div>
        </div>

        <div className="description-input-2">
          <div className="text-wrapper-32">Description...</div>
        </div>

        <div className="location-input">
          <div className="text-wrapper-31">Location</div>
        </div>

        <div className="date-input">
          <div className="text-wrapper-33">Date</div>
        </div>

        <div className="overlap-22">
          <div className="time-input">
            <div className="text-wrapper-34">Time</div>
          </div>

          <div className="time-input-2">
            <div className="text-wrapper-35">Time</div>
          </div>
        </div>

        <div className="occasion-input">
          <div className="text-wrapper-36">Occasion</div>
        </div>

        <Link to="/pollpanel">
          <img
            className="poll-button-4"
            alt="Poll button"
            src="/img/pollbutton-4.svg"
          />
        </Link>

        <Link to="/pollpanel">
          <img
            className="poll-button-5"
            alt="Poll button"
            src="/img/pollbutton-5.svg"
          />
        </Link>

        <Link to="/pollpanel">
          <img
            className="poll-button-6"
            alt="Poll button"
            src="/img/pollbutton-6.svg"
          />
        </Link>

        <div className="invite-panel-2">
          <div className="overlap-23">
            <div className="rectangle-13" />

            <div className="text-wrapper-37">New Invited</div>

            <div className="rectangle-14" />

            <div className="text-wrapper-38">Enter</div>
          </div>

          <div className="overlap-24">
            <div className="text-wrapper-39">Invited</div>
          </div>

          <div className="overlap-25">
            <div className="rectangle-15" />
          </div>

          <div className="overlap-26">
            <div className="rectangle-16" />

            <div className="text-wrapper-40">friendUsername</div>
          </div>

          <div className="overlap-27">
            <div className="rectangle-16" />

            <div className="text-wrapper-40">otherFriendUsername</div>
          </div>

          <div className="overlap-28">
            <div className="rectangle-16" />

            <div className="text-wrapper-40">newFriend</div>
          </div>

          <div className="rectangle-17" />

          <div className="rectangle-18" />

          <div className="rectangle-19" />
        </div>

        <Link className="finish-set-up-button-3" to="/upcomingevents">
          <div className="text-wrapper-41">Finish Set Up</div>
        </Link>

        <div className="navigation-bar-w-2">
          <Notifications className="notifications-3" property1="default" />
          <div className="text-wrapper-42">New Event</div>

          <MessageSquare className="message-square-3" to="/messagepanel" />
          <HomeButton className="home-button-instance" to="/navigationpanel" />
        </div>
      </div>
    </div>
  );
};

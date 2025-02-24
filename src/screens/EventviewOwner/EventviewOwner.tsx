import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "../../components/MessageSquare";
import { Notifications } from "../../components/Notifications";
import "./style.css";

export const EventviewOwner = (): JSX.Element => {
  return (
    <div className="eventview-owner">
      <div className="div-8">
        <div className="navigation-bar-w-5">
          <Notifications className="notifications-6" property1="default" />
          <div className="new-event-5">Event Title</div>

          <MessageSquare className="message-square-6" to="/messagepanel" />
          <Link to="/navigationpanel">
            <img
              className="home-button-7"
              alt="Home button"
              src="/img/homebutton-7.png"
            />
          </Link>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group-11">
            <div className="overlap-53">
              <div className="text-wrapper-62">Invited</div>
            </div>

            <div className="overlap-54">
              <div className="rectangle-24" />
            </div>

            <div className="overlap-55">
              <div className="rectangle-25" />

              <div className="text-wrapper-63">friendUsername</div>
            </div>

            <div className="overlap-56">
              <div className="rectangle-25" />

              <div className="text-wrapper-63">otherFriendUsername</div>
            </div>

            <div className="overlap-57">
              <div className="rectangle-25" />

              <div className="text-wrapper-63">newFriend</div>
            </div>

            <div className="rectangle-26" />

            <div className="rectangle-27" />

            <div className="rectangle-28" />
          </div>
        </div>

        <footer className="footer-8">
          <div className="overlap-58">
            <img className="line-13" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-14" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-59">
            <img className="line-13" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-14" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-60">
            <img className="line-13" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-14" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-61">
            <img className="line-13" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-14" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="text-wrapper-64">Contact Us</div>

          <p className="XXX-XXX-XXXX-6">
            (XXX) XXX-XXXX
            <br />
            randomEmail@email.com
            <br />
            <br />
            9999 Address Street <br />
            Address, Address ZipCode
          </p>
        </footer>

        <div className="text-wrapper-65">Occasion</div>

        <div className="overlap-wrapper">
          <div className="overlap-62">
            <div className="text-wrapper-66">Location</div>

            <Link to="/pollpanel">
              <img
                className="poll-button-7"
                alt="Poll button"
                src="/img/pollbutton-7.svg"
              />
            </Link>
          </div>
        </div>

        <div className="group-4">
          <div className="text-wrapper-67">Date</div>

          <Link to="/pollpanel">
            <img
              className="poll-button-8"
              alt="Poll button"
              src="/img/pollbutton-8.svg"
            />
          </Link>
        </div>

        <div className="group-5">
          <div className="overlap-63">
            <div className="text-wrapper-68">Time</div>

            <Link to="/pollpanel">
              <img
                className="poll-button-9"
                alt="Poll button"
                src="/img/pollbutton-9.svg"
              />
            </Link>
          </div>
        </div>

        <div className="description-input-3">
          <div className="text-wrapper-69">Description...</div>
        </div>

        <Link className="finish-set-up-button-4" to="/upcomingevents">
          <div className="finish-set-up-3">Confirm Event</div>
        </Link>

        <Link to="/new-event-creation">
          <img
            className="finish-set-up-button-5"
            alt="Finish set up button"
            src="/img/finishsetupbutton.png"
          />
        </Link>
      </div>
    </div>
  );
};

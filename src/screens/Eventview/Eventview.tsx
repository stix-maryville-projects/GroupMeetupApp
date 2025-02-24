import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "../../components/MessageSquare";
import { Notifications } from "../../components/Notifications";
import "./style.css";

export const Eventview = (): JSX.Element => {
  return (
    <div className="eventview">
      <div className="div-6">
        <div className="navigation-bar-w">
          <Notifications className="notifications-2" property1="default" />
          <div className="new-event-2">Event Title</div>

          <MessageSquare className="message-square-2" to="/messagepanel" />
          <Link to="/navigationpanel">
            <img
              className="home-button-4"
              alt="Home button"
              src="/img/homebutton-4.svg"
            />
          </Link>
        </div>

        <div className="invite-panel">
          <div className="overlap-group-7">
            <div className="overlap-8">
              <div className="text-wrapper-21">Invited</div>
            </div>

            <div className="overlap-9">
              <div className="rectangle-8" />
            </div>

            <div className="overlap-10">
              <div className="rectangle-9" />

              <div className="text-wrapper-22">friendUsername</div>
            </div>

            <div className="overlap-11">
              <div className="rectangle-9" />

              <div className="text-wrapper-22">otherFriendUsername</div>
            </div>

            <div className="overlap-12">
              <div className="rectangle-9" />

              <div className="text-wrapper-22">newFriend</div>
            </div>

            <div className="rectangle-10" />

            <div className="rectangle-11" />

            <div className="rectangle-12" />
          </div>
        </div>

        <footer className="footer-4">
          <div className="overlap-13">
            <img className="line-4" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-5" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-14">
            <img className="line-4" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-5" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-15">
            <img className="line-4" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-5" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-16">
            <img className="line-4" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-5" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="text-wrapper-23">Contact Us</div>

          <p className="XXX-XXX-XXXX-2">
            (XXX) XXX-XXXX
            <br />
            randomEmail@email.com
            <br />
            <br />
            9999 Address Street <br />
            Address, Address ZipCode
          </p>
        </footer>

        <div className="text-wrapper-24">Occasion</div>

        <div className="group">
          <div className="overlap-17">
            <div className="text-wrapper-25">Location</div>

            <Link to="/pollpanel">
              <img
                className="poll-button"
                alt="Poll button"
                src="/img/pollbutton-1.svg"
              />
            </Link>
          </div>
        </div>

        <div className="group-2">
          <div className="text-wrapper-26">Date</div>

          <Link to="/pollpanel">
            <img
              className="poll-button-2"
              alt="Poll button"
              src="/img/pollbutton-2.svg"
            />
          </Link>
        </div>

        <div className="group-3">
          <div className="text-wrapper-27">Time</div>

          <Link to="/pollpanel">
            <img
              className="poll-button-3"
              alt="Poll button"
              src="/img/pollbutton-3.svg"
            />
          </Link>
        </div>

        <div className="description-input">
          <div className="overlap-18">
            <div className="text-wrapper-28">Description...</div>
          </div>
        </div>

        <div className="accept-decline-wrapper">
          <div className="accept-decline">
            <div className="text-wrapper-29">Accept Invite</div>
          </div>
        </div>
      </div>
    </div>
  );
};

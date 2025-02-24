import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "../../components/MessageSquare";
import { Notifications } from "../../components/Notifications";
import "./style.css";

export const UpcomingEventsScreen = (): JSX.Element => {
  return (
    <div className="upcoming-events-screen">
      <div className="upcoming-events-2">
        <div className="navigation-bar-w-3">
          <Notifications className="notifications-4" property1="default" />
          <div className="new-event-3">Upcoming Events</div>

          <MessageSquare className="message-square-4" to="/messagepanel" />
          <Link to="/navigationpanel">
            <img
              className="home-button-5"
              alt="Home button"
              src="/img/homebutton.svg"
            />
          </Link>
        </div>

        <div className="overlap-29">
          <div className="event-descriptor">
            <div className="overlap-30">
              <div className="text-wrapper-43">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-group-9">
              <Link className="rectangle-20" to="/eventview-u40owneru41" />

              <div className="text-wrapper-44">View Event</div>
            </div>
          </div>

          <div className="event-descriptor-2">
            <div className="overlap-30">
              <div className="text-wrapper-43">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-group-9">
              <Link className="rectangle-20" to="/eventview-u40owneru41" />

              <div className="text-wrapper-44">View Event</div>
            </div>
          </div>

          <div className="event-descriptor-3">
            <div className="overlap-30">
              <div className="text-wrapper-43">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-31">
              <Link to="/eventview-u40owneru41">
                <img
                  className="rectangle-21"
                  alt="Rectangle"
                  src="/img/rectangle-29.png"
                />
              </Link>

              <div className="text-wrapper-45">View Event</div>
            </div>
          </div>

          <div className="other-stuff">
            <div className="overlap-32">
              <div className="rectangle-22" />
            </div>

            <div className="overlap-33">
              <div className="text-wrapper-46">Search Event</div>
            </div>

            <div className="overlap-34">
              <div className="text-wrapper-47">Filter</div>
            </div>

            <img className="icon" alt="Icon" src="/img/icon.svg" />
          </div>
        </div>

        <div className="event-descriptor-4">
          <div className="overlap-30">
            <div className="text-wrapper-43">Event Title</div>

            <p className="this-is-where-the">
              This is where the description of the event will go. Can go all the
              way
              to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
            </p>
          </div>

          <div className="overlap-group-9">
            <Link className="rectangle-20" to="/eventview-u40participantu41" />

            <div className="text-wrapper-44">Pending...</div>
          </div>
        </div>

        <footer className="footer-6">
          <div className="overlap-35">
            <img className="line-8" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-9" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-36">
            <img className="line-8" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-9" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-37">
            <img className="line-8" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-9" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-38">
            <img className="line-8" alt="Line" src="/img/line-1.svg" />

            <img className="line-9" alt="Line" src="/img/line-2.svg" />
          </div>

          <div className="text-wrapper-48">Contact Us</div>

          <p className="XXX-XXX-XXXX-4">
            (XXX) XXX-XXXX
            <br />
            randomEmail@email.com
            <br />
            <br />
            9999 Address Street <br />
            Address, Address ZipCode
          </p>
        </footer>
      </div>
    </div>
  );
};

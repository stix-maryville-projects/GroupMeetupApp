import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { NavigationBarW } from "../../components/NavigationBarW";
import "./style.css";

export const UpcomingEvents = (): JSX.Element => {
  return (
    <div className="upcoming-events">
      <div className="div-5">
        <NavigationBarW
          className="navigation-bar-w-instance"
          text="Upcoming Events"
          to="/messagepanel"
          to1="/navigationpanel"
        />
        <div className="overlap-11">
          <div className="event-descriptor">
            <div className="overlap-12">
              <div className="text-wrapper-24">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-group-6">
              <Link className="rectangle-8" to="/eventview-u40owneru41" />

              <div className="text-wrapper-25">View Event</div>
            </div>
          </div>

          <div className="event-descriptor-2">
            <div className="overlap-12">
              <div className="text-wrapper-24">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-group-6">
              <Link className="rectangle-8" to="/eventview-u40owneru41" />

              <div className="text-wrapper-25">View Event</div>
            </div>
          </div>

          <div className="event-descriptor-3">
            <div className="overlap-12">
              <div className="text-wrapper-24">Event Title</div>

              <p className="this-is-where-the">
                This is where the description of the event will go. Can go all
                the way
                to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
              </p>
            </div>

            <div className="overlap-13">
              <Link to="/eventview-u40owneru41">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src="/img/rectangle-29.png"
                />
              </Link>

              <div className="text-wrapper-26">View Event</div>
            </div>
          </div>

          <div className="other-stuff">
            <div className="overlap-14">
              <div className="rectangle-10" />
            </div>

            <div className="overlap-15">
              <div className="text-wrapper-27">Search Event</div>
            </div>

            <div className="overlap-16">
              <div className="text-wrapper-28">Filter</div>
            </div>

            <img className="icon" alt="Icon" src="/img/icon.svg" />
          </div>
        </div>

        <div className="event-descriptor-4">
          <div className="overlap-12">
            <div className="text-wrapper-24">Event Title</div>

            <p className="this-is-where-the">
              This is where the description of the event will go. Can go all the
              way
              to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here.
            </p>
          </div>

          <div className="overlap-group-6">
            <Link className="rectangle-8" to="/eventview-u40participantu41" />

            <div className="text-wrapper-25">Pending...</div>
          </div>
        </div>

        <Footer
          className="footer-2"
          img="/img/line-2-2.svg"
          line="/img/line-1-2.svg"
          line1="/img/line-1-2.svg"
          line2="/img/line-2-2.svg"
          line3="/img/line-1-2.svg"
          line4="/img/line-2-2.svg"
        />
      </div>
    </div>
  );
};

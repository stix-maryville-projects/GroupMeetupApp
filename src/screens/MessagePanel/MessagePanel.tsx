import React from "react";
import { EventChat } from "../../components/EventChat";
import { UserProfileIcon } from "../../components/UserProfileIcon";
import { User1 } from "../../icons/User1";
import "./style.css";

export const MessagePanel = (): JSX.Element => {
  return (
    <div className="message-panel">
      <div className="message-panel-wrapper">
        <div className="div-4">
          <div className="overlap-6">
            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="text-wrapper-16">Events</div>

            <div className="text-wrapper-17">Event Title</div>
          </div>

          <div className="overlap-7">
            <EventChat className="event-chat-instance" />
            <EventChat className="event-chat-2" />
            <EventChat className="event-chat-3" />
            <EventChat className="event-chat-4" />
          </div>

          <div className="overlap-group-5">
            <button className="finish-set-up-button">
              <div className="finish-set-up">Send</div>
            </button>

            <div className="div-wrapper">
              <div className="text-wrapper-18">New Message</div>
            </div>
          </div>

          <UserProfileIcon
            className="user-profile-icon-instance"
            icon={<User1 className="user-1" />}
          />
          <div className="rectangle-4" />

          <UserProfileIcon
            className="user-profile-icon-2"
            icon={<User1 className="user-1" />}
          />
          <div className="rectangle-5" />

          <UserProfileIcon
            className="user-profile-icon-3"
            icon={<User1 className="user-1" />}
          />
          <UserProfileIcon
            className="user-profile-icon-4"
            icon={<User1 className="user-1" />}
          />
          <div className="rectangle-6" />

          <div className="rectangle-7" />
        </div>
      </div>
    </div>
  );
};

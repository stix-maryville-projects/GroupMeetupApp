import React from "react";
import { EventChat } from "../../components/EventChat";
import { UserProfileIcon } from "../../components/UserProfileIcon";
import { User2 } from "../../icons/User2";
import "./style.css";

export const MessagePanel = (): JSX.Element => {
  return (
    <div className="message-panel">
      <div className="message-panel-wrapper">
        <div className="div-8">
          <div className="overlap-28">
            <div className="rectangle-12" />

            <div className="rectangle-13" />

            <div className="text-wrapper-46">Events</div>

            <div className="text-wrapper-47">Event Title</div>
          </div>

          <div className="overlap-29">
            <EventChat className="event-chat-instance" />
            <EventChat className="event-chat-2" />
            <EventChat className="event-chat-3" />
            <EventChat className="event-chat-4" />
          </div>

          <div className="overlap-group-7">
            <button className="finish-set-up-wrapper">
              <div className="finish-set-up-2">Send</div>
            </button>

            <div className="overlap-30">
              <div className="text-wrapper-48">New Message</div>
            </div>
          </div>

          <UserProfileIcon
            className="user-profile-icon-2"
            icon={<User2 className="user-2" />}
          />
          <div className="rectangle-14" />

          <UserProfileIcon
            className="user-profile-icon-3"
            icon={<User2 className="user-2" />}
          />
          <div className="rectangle-15" />

          <UserProfileIcon
            className="user-profile-icon-4"
            icon={<User2 className="user-2" />}
          />
          <UserProfileIcon
            className="user-profile-icon-5"
            icon={<User2 className="user-2" />}
          />
          <div className="rectangle-16" />

          <div className="rectangle-17" />
        </div>
      </div>
    </div>
  );
};

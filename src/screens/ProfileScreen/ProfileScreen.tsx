import React from "react";
import { Link } from "react-router-dom";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { MessageSquare } from "../../components/MessageSquare";
import { Notifications } from "../../components/Notifications";
import { UserProfileIcon } from "../../components/UserProfileIcon";
import { User } from "../../icons/User";
import "./style.css";

export const ProfileScreen = (): JSX.Element => {
  return (
    <div className="profile-screen">
      <div className="profile-2">
        <div className="navigation-bar-w-4">
          <Notifications className="notifications-5" property1="default" />
          <div className="new-event-4">Profile</div>

          <MessageSquare className="message-square-5" to="/messagepanel" />
          <Link to="/navigationpanel">
            <img
              className="home-button-6"
              alt="Home button"
              src="/img/homebutton-4.svg"
            />
          </Link>
        </div>

        <footer className="footer-7">
          <div className="overlap-39">
            <img className="line-10" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-11" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-40">
            <img className="line-10" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-11" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-41">
            <img className="line-10" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-11" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="overlap-group-10">
            <img className="line-10" alt="Line" src="/img/line-1-2.svg" />

            <img className="line-11" alt="Line" src="/img/line-2-2.svg" />
          </div>

          <div className="text-wrapper-49">Contact Us</div>

          <p className="XXX-XXX-XXXX-5">
            (XXX) XXX-XXXX
            <br />
            randomEmail@email.com
            <br />
            <br />
            9999 Address Street <br />
            Address, Address ZipCode
          </p>
        </footer>

        <div className="overlap-42">
          <div className="rectangle-23" />
        </div>

        <UserProfileIcon
          className="user-profile-icon-5"
          icon={<User className="icon-instance-node" />}
        />
        <div className="text-wrapper-50">Change Profile Picture</div>

        <div className="overlap-43">
          <div className="text-wrapper-51">Name/Username</div>
        </div>

        <div className="overlap-44">
          <div className="text-wrapper-52">Email</div>
        </div>

        <div className="overlap-45">
          <div className="text-wrapper-52">Address</div>
        </div>

        <div className="overlap-46">
          <div className="text-wrapper-53">DOB</div>
        </div>

        <div className="overlap-47">
          <div className="text-wrapper-53">Phone</div>
        </div>

        <div className="text-wrapper-54">Friend Link</div>

        <div className="overlap-48">
          <div className="overlap-49">
            <img className="line-12" alt="Line" src="/img/line-10.svg" />

            <div className="text-wrapper-55">Photos</div>

            <div className="image-17">
              <ConcreteComponentNode size="forty-eight" />
            </div>
          </div>

          <div className="image-18">
            <ConcreteComponentNode size="forty-eight" />
          </div>
        </div>

        <div className="image-19">
          <ConcreteComponentNode size="forty-eight" />
        </div>

        <div className="image-20">
          <ConcreteComponentNode size="forty-eight" />
        </div>

        <div className="image-21">
          <ConcreteComponentNode size="forty-eight" />
        </div>

        <div className="overlap-50">
          <div className="overlap-51">
            <div className="text-wrapper-56">Friends</div>
          </div>

          <div className="overlap-52">
            <div className="text-wrapper-57">friendUserName</div>

            <div className="text-wrapper-58">otherFriendUserName</div>

            <div className="text-wrapper-59">newFriend</div>

            <div className="text-wrapper-60">newFriendUserName</div>

            <div className="text-wrapper-61">
              thatOnePersonYouThoughtWasCool
            </div>
          </div>

          <Link className="finish-set-up-button-wrapper" to="/add-friend">
            <div className="finish-set-up-wrapper">
              <div className="finish-set-up-2">Add New Friend</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

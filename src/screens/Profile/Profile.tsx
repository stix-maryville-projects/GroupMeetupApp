import React from "react";
import { Link } from "react-router-dom";
import { FinishSetUpButton } from "../../components/FinishSetUpButton";
import { Footer } from "../../components/Footer";
import { NavigationBarW } from "../../components/NavigationBarW";
import { UserProfileIcon } from "../../components/UserProfileIcon";
import { Image7 } from "../../icons/Image7";
import "./style.css";

export const Profile = (): JSX.Element => {
  return (
    <div className="profile">
      <div className="div-6">
        <NavigationBarW
          className="navigation-bar-w-page-title-instance"
          homeButton="/img/homebutton-3.svg"
          text="Profile"
          to="/messagepanel"
          to1="/navigationpanel"
        />
        <Footer
          className="footer-3"
          img="/img/line-2-2.svg"
          line="/img/line-1-2.svg"
          line1="/img/line-1-2.svg"
          line2="/img/line-2-2.svg"
          line3="/img/line-1-2.svg"
          line4="/img/line-2-2.svg"
          line5="/img/line-1-2.svg"
          line6="/img/line-2-2.svg"
        />
        <div className="overlap-17">
          <div className="rectangle-11" />
        </div>

        <UserProfileIcon className="user-profile-icon-instance" />
        <div className="text-wrapper-29">Change Profile Picture</div>

        <div className="overlap-18">
          <div className="text-wrapper-30">Name/Username</div>
        </div>

        <div className="overlap-19">
          <div className="text-wrapper-31">Email</div>
        </div>

        <div className="overlap-20">
          <div className="text-wrapper-31">Address</div>
        </div>

        <div className="overlap-21">
          <div className="text-wrapper-32">DOB</div>
        </div>

        <div className="overlap-22">
          <div className="text-wrapper-32">Phone</div>
        </div>

        <div className="text-wrapper-33">Friend Link</div>

        <div className="overlap-23">
          <div className="overlap-24">
            <img className="line-2" alt="Line" src="/img/line-10.svg" />

            <div className="text-wrapper-34">Photos</div>

            <div className="image-7-wrapper">
              <Image7 className="image-3" color="#AB5113" />
            </div>
          </div>

          <div className="image-3-wrapper">
            <Image7 className="image-3" color="#AB5113" />
          </div>
        </div>

        <div className="image-2">
          <Image7 className="image-3" color="#AB5113" />
        </div>

        <div className="image-4">
          <Image7 className="image-3" color="#AB5113" />
        </div>

        <div className="image-5">
          <Image7 className="image-3" color="#AB5113" />
        </div>

        <div className="overlap-25">
          <div className="overlap-26">
            <div className="text-wrapper-35">Friends</div>
          </div>

          <div className="overlap-27">
            <div className="text-wrapper-36">friendUserName</div>

            <div className="text-wrapper-37">otherFriendUserName</div>

            <div className="text-wrapper-38">newFriend</div>

            <div className="text-wrapper-39">newFriendUserName</div>

            <div className="text-wrapper-40">
              thatOnePersonYouThoughtWasCool
            </div>
          </div>

          <Link className="finish-set-up-button-wrapper" to="/add-friend">
            <FinishSetUpButton
              className="finish-set-up-button-4"
              text="Add New Friend"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

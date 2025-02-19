import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Image } from "../../components/Image";
import { NavigationBar } from "../../components/NavigationBar";
import { Image7 } from "../../icons/Image7";
import "./style.css";

export const HomeScreen = (): JSX.Element => {
  return (
    <div className="home-screen">
      <div className="div-11">
        <div className="overlap-45">
          <div className="overlap-46">
            <div className="overlap-47">
              <NavigationBar
                className="header"
                to="/messagepanel"
                to1="/navigationpanel"
              />
              <div className="text-wrapper-62">Events Near You</div>
            </div>

            <div className="overlap-48">
              <div className="rectangle-28" />
            </div>
          </div>

          <Image className="image-instance" />
          <Image className="image-6" />
          <Image className="image-8" />
          <Image className="image-9" />
          <Image className="image-10" />
          <Image className="image-11" />
        </div>

        <Footer
          className="footer-6"
          img="/img/line-2.svg"
          line="/img/line-1.svg"
          line1="/img/line-1.svg"
          line2="/img/line-2.svg"
          line3="/img/line-1.svg"
          line4="/img/line-2.svg"
          line5="/img/line-1.svg"
          line6="/img/line-2.svg"
        />
        <div className="text-wrapper-63">Fun Places To Go</div>

        <Image
          className="image-12"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Link className="image-13" to="/new-event-creation">
          <p className="p">
            <span className="text-wrapper-64">
              Location Title
              <br />
            </span>

            <span className="text-wrapper-65">
              <br />
            </span>

            <span className="text-wrapper-66">Short</span>

            <span className="text-wrapper-65">&nbsp;</span>

            <span className="text-wrapper-66">
              location description that should only fill a couple lines.
            </span>
          </p>

          <div className="overlap-49">
            <Image7 className="size-48-3" color="#AB5113" />
          </div>
        </Link>

        <Image
          className="image-14"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-15"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-16"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-17"
          text={
            <>
              Event Title
              <br />
            </>
          }
          text1="Short event description that should only fill a couple lines."
        />
      </div>
    </div>
  );
};

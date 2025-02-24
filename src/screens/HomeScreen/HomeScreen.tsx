import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Image } from "../../components/Image";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const HomeScreen = (): JSX.Element => {
  return (
    <div className="home-screen">
      <div className="div-3">
        <div className="overlap-5">
          <NavigationBar
            className="header"
            to="/messagepanel"
            to1="/navigationpanel"
          />
          <div className="text-wrapper-11">Events Near You</div>
        </div>

        <Footer
          className="footer-instance"
          img="/img/line-2-1.png"
          imgClassName="footer-2"
          imgClassNameOverride="footer-3"
          line="/img/line-1-1.png"
          line1="/img/line-1-1.png"
          line2="/img/line-2-1.png"
          line3="/img/line-1-1.png"
          line4="/img/line-2-1.png"
          line5="/img/line-1-1.png"
          line6="/img/line-2-1.png"
          lineClassName="footer-2"
          lineClassName1="footer-2"
          lineClassName2="footer-3"
          lineClassName3="footer-2"
          lineClassName4="footer-3"
          lineClassNameOverride="footer-3"
        />
        <div className="text-wrapper-12">Fun Places To Go</div>

        <Image className="image-instance" property1="default" />
        <Image className="image-2" property1="default" />
        <Image className="image-4" property1="default" />
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>

        <Image className="image-5" property1="default" />
        <Image className="image-6" property1="default" />
        <Image
          className="image-7"
          property1="default"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <div className="image-8">
          <p className="p">
            <span className="text-wrapper-13">
              Location Title
              <br />
            </span>

            <span className="text-wrapper-14">
              <br />
            </span>

            <span className="text-wrapper-15">Short</span>

            <span className="text-wrapper-14">&nbsp;</span>

            <span className="text-wrapper-15">
              location description that should only fill a couple lines.
            </span>
          </p>

          <div className="image-instance-wrapper">
            <ConcreteComponentNode size="forty-eight" />
          </div>
        </div>

        <Image
          className="image-9"
          property1="default"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-10"
          property1="default"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-11"
          property1="default"
          text={
            <>
              Location Title
              <br />
            </>
          }
          text1="Short location description that should only fill a couple lines."
        />
        <Image
          className="image-12"
          property1="default"
          text={
            <>
              Event Title
              <br />
            </>
          }
          text1="Short event description that should only fill a couple lines."
        />
        <Image
          className="image-13"
          property1="default"
          text={
            <>
              Event Title
              <br />
            </>
          }
          text1="Short event description that should only fill a couple lines."
        />
        <Image
          className="image-14"
          property1="default"
          text={
            <>
              Event Title
              <br />
            </>
          }
          text1="Short event description that should only fill a couple lines."
        />
        <Image
          className="image-15"
          property1="default"
          text={
            <>
              Event Title
              <br />
            </>
          }
          text1="Short event description that should only fill a couple lines."
        />
        <Image
          className="image-16"
          property1="default"
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

import { FunctionComponent, useCallback } from "react";
import NavigationBarWpageTitle from "../components/NavigationBarWpageTitle";
import InvitePanel1 from "../components/InvitePanel1";
import Footer from "../components/Footer";
import GroupComponent from "../components/GroupComponent";
import DescriptionInput from "../components/DescriptionInput";
import FinishSetUpButton from "../components/FinishSetUpButton";
import { useNavigate } from "react-router-dom";
import Component1 from "../components/Component1";
import styles from "./EventViewOwner.module.css";

const EventViewOwner: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFinishSetUpButtonContainerClick = useCallback(() => {
    navigate("/new-event-creation");
  }, [navigate]);

  return (
    <div className={styles.eventviewOwner}>
      <NavigationBarWpageTitle newEvent="Showcase Event Title" />
      <InvitePanel1 />
      <Footer
        contactUs="Contact Us!"
        showEllipseDiv={false}
        showLineIcon={false}
        lineIconVisible={false}
        ellipseDivVisible={false}
        lineIconVisible1={false}
        lineIconVisible2={false}
        ellipseDivVisible1={false}
        lineIconVisible3={false}
        lineIconVisible4={false}
        ellipseDivVisible2={false}
        lineIconVisible5={false}
        lineIconVisible6={false}
      />
      <div className={styles.letsHangOut}>Let’s hang out!</div>
      <GroupComponent myHouse="My house" />
      <GroupComponent
        myHouse="3/10"
        groupDivLeft="448px"
        groupDivWidth="142px"
        myHouseWidth="86px"
      />
      <GroupComponent
        myHouse="9pm"
        groupDivLeft="708px"
        groupDivWidth="144px"
        myHouseWidth="96px"
      />
      <DescriptionInput placeholder="Description for our first event!" />
      <FinishSetUpButton property1="Default" finishSetUp="Confirm Event" />
      <div
        className={styles.finishsetupbutton}
        onClick={onFinishSetUpButtonContainerClick}
      >
        <Component1 property1="Default" />
      </div>
    </div>
  );
};

export default EventViewOwner;

import { FunctionComponent } from "react";
import NavigationBarWpageTitle from "../components/NavigationBarWpageTitle";
import EventDescriptor from "../components/EventDescriptor";
import Footer from "../components/Footer";
import styles from "./UpcomingEvents.module.css";

const UpcomingEvents: FunctionComponent = () => {
  return (
    <div className={styles.upcomingevents}>
      <NavigationBarWpageTitle newEvent="Upcoming Events" />
      <EventDescriptor />
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
        footerTop="800px"
        lineIconTop="62.36%"
        lineIconBottom="17.11%"
        lineIconTop1="62.36%"
        lineIconBottom1="17.11%"
        lineIconTop2="62.36%"
        lineIconBottom2="17.11%"
        lineIconTop3="62.36%"
        lineIconBottom3="17.11%"
      />
      <div className={styles.upcomingeventsChild} />
      <div className={styles.upcomingeventsItem} />
      <img className={styles.icon} alt="" src="/icon.svg" />
      <div className={styles.otherstuff}>
        <div className={styles.title}>Search Event</div>
        <div className={styles.filter}>Filter</div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

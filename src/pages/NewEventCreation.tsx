import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import DescriptionInput from "../components/DescriptionInput";
import LocationInput from "../components/LocationInput";
import DateInput from "../components/DateInput";
import OccasionInput from "../components/OccasionInput";
import PollButton from "../components/PollButton";
import FinishSetUpButton from "../components/FinishSetUpButton";
import NavigationBarWpageTitle from "../components/NavigationBarWpageTitle";
import InvitePanel from "../components/InvitePanel";
import styles from "./NewEventCreation.module.css";

const NewEventCreation: FunctionComponent = () => {
  return (
    <div className={styles.newEventCreation}>
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
      <div className={styles.eventtitleinputframed}>
        <div className={styles.eventtitleinput}>
          <div className={styles.eventtitleinputChild} />
          <div className={styles.eventTitle}>Event Title</div>
        </div>
      </div>
      <DescriptionInput
        placeholder="Description..."
        descriptionInputTop="441px"
        descriptionInputLeft="120px"
        descriptionInputWidth="1053px"
        descriptionInputHeight="263px"
      />
      <LocationInput />
      <DateInput />
      <OccasionInput />
      <PollButton
        property1="Default"
        pollButtonTop="320px"
        pollButtonLeft="450px"
      />
      <PollButton
        property1="Default"
        pollButtonTop="320px"
        pollButtonLeft="1125px"
      />
      <PollButton
        property1="Default"
        pollButtonTop="320px"
        pollButtonLeft="788px"
      />
      <FinishSetUpButton
        property1="Default"
        finishSetUp="Finish Set Up"
        finishSetUpButtonTop="614px"
        finishSetUpButtonLeft="1324px"
        finishSetUpButtonWidth="400px"
        finishSetUpWidth="94.75%"
        finishSetUpLeft="2.5%"
        finishSetUpFontSize="32px"
      />
      <NavigationBarWpageTitle newEvent="New Event" />
      <InvitePanel property1="Default" />
      <div className={styles.aminputDontRename}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Event Title</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename1}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Location</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename2}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Date</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename3}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Time</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default NewEventCreation;

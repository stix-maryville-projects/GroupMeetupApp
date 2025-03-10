import { FunctionComponent } from "react";
import FinishSetUpButton1 from "./FinishSetUpButton1";
import EventChat from "./EventChat";
import styles from "./MessagePanel.module.css";

export type MessagePanelType = {
  className?: string;
};

const MessagePanel: FunctionComponent<MessagePanelType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.messagepanel, className].join(" ")}>
      <div className={styles.messagepanelChild} />
      <div className={styles.messagepanelItem} />
      <div className={styles.messagepanelInner} />
      <div className={styles.events}>Events</div>
      <div className={styles.eventTitle}>Event Title</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.finishsetupbutton}>
        <FinishSetUpButton1 />
      </div>
      <div className={styles.messagepanelChild1} />
      <div className={styles.newMessage}>New Message</div>
      <EventChat property1="Default" />
      <img
        className={styles.userprofileicon}
        alt=""
        src="/userprofileicon1.svg"
      />
      <div className={styles.messagepanelChild2} />
      <img
        className={styles.userprofileicon1}
        alt=""
        src="/userprofileicon1.svg"
      />
      <div className={styles.messagepanelChild3} />
      <img
        className={styles.userprofileicon2}
        alt=""
        src="/userprofileicon1.svg"
      />
      <img
        className={styles.userprofileicon3}
        alt=""
        src="/userprofileicon1.svg"
      />
      <div className={styles.messagepanelChild4} />
      <div className={styles.messagepanelChild5} />
    </div>
  );
};

export default MessagePanel;

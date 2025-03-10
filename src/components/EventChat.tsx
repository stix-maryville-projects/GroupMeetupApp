import { FunctionComponent } from "react";
import styles from "./EventChat.module.css";

export type EventChatType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const EventChat: FunctionComponent<EventChatType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.eventchat, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.eventchatChild} />
      <div className={styles.eventTitle}>Event Title</div>
    </div>
  );
};

export default EventChat;

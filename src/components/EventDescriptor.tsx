import { FunctionComponent } from "react";
import Component3 from "./Component3";
import styles from "./EventDescriptor.module.css";

export type EventDescriptorType = {
  className?: string;
};

const EventDescriptor: FunctionComponent<EventDescriptorType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.eventdescriptor, className].join(" ")}>
      <div className={styles.eventdescriptorChild} />
      <div className={styles.eventTitle}>Showcase Event Title</div>
      <div className={styles.thisIsWhere}>Description for our first event!</div>
      <Component3 property1="Default" />
    </div>
  );
};

export default EventDescriptor;

import { FunctionComponent } from "react";
import styles from "./NewEvent.module.css";

export type NewEventType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const NewEvent: FunctionComponent<NewEventType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.newEvent1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.newEvent}>Create A New Event</div>
    </div>
  );
};

export default NewEvent;

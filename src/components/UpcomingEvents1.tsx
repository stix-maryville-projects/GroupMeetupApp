import { FunctionComponent } from "react";
import styles from "./UpcomingEvents1.module.css";

export type UpcomingEvents1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const UpcomingEvents1: FunctionComponent<UpcomingEvents1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.upcomingEvents1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.upcomingEvents}>Upcoming Events</div>
    </div>
  );
};

export default UpcomingEvents1;

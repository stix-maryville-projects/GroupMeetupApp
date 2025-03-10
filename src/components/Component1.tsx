import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.component4, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component4Child} />
      <div className={styles.editEvent}>Edit Event</div>
    </div>
  );
};

export default Component1;

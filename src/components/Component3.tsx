import { FunctionComponent } from "react";
import styles from "./Component3.module.css";

export type Component3Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.component5, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component5Child} />
      <div className={styles.viewEvent}>View Event</div>
    </div>
  );
};

export default Component3;

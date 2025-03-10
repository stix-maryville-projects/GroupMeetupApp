import { FunctionComponent } from "react";
import styles from "./Component2.module.css";

export type Component2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.component1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component1Child} />
      <div className={styles.enter}>Enter</div>
    </div>
  );
};

export default Component2;

import { FunctionComponent } from "react";
import styles from "./OccasionInput.module.css";

export type OccasionInputType = {
  className?: string;
};

const OccasionInput: FunctionComponent<OccasionInputType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.occasioninput, className].join(" ")}>
      <div className={styles.occasioninputChild} />
      <div className={styles.occasion}>Occasion</div>
      <div className={styles.aminputDontRename}>
        <div className={styles.focusFrame} />
        <div className={styles.placeholder}>Occasion</div>
        <div className={styles.text} />
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default OccasionInput;

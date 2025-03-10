import { FunctionComponent } from "react";
import styles from "./FinishSetUpButton1.module.css";

export type FinishSetUpButton1Type = {
  className?: string;
};

const FinishSetUpButton1: FunctionComponent<FinishSetUpButton1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.finishsetupbutton, className].join(" ")}>
      <div className={styles.finishsetupbuttonChild} />
      <div className={styles.finishSetUp}>Send</div>
    </div>
  );
};

export default FinishSetUpButton1;

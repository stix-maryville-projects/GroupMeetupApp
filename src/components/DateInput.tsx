import { FunctionComponent } from "react";
import styles from "./DateInput.module.css";

export type DateInputType = {
  className?: string;
};

const DateInput: FunctionComponent<DateInputType> = ({ className = "" }) => {
  return (
    <div className={[styles.dateinput, className].join(" ")}>
      <div className={styles.dateinputChild} />
      <div className={styles.date}>Date</div>
    </div>
  );
};

export default DateInput;

import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.friendLink}>Friend Link</div>
      <div className={styles.nameusername}>Name/Username</div>
      <div className={styles.email}>Email</div>
      <div className={styles.address}>Address</div>
      <div className={styles.phone}>Phone</div>
      <div className={styles.dob}>DOB</div>
    </div>
  );
};

export default GroupComponent1;

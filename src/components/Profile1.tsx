import { FunctionComponent } from "react";
import styles from "./Profile1.module.css";

export type Profile1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Profile1: FunctionComponent<Profile1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.profile1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.profile}>Profile</div>
    </div>
  );
};

export default Profile1;

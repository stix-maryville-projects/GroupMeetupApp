import { FunctionComponent } from "react";
import styles from "./LogOut.module.css";

export type LogOutType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const LogOut: FunctionComponent<LogOutType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.logOut1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.logOut}>Log Out</div>
    </div>
  );
};

export default LogOut;

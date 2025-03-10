import { FunctionComponent } from "react";
import styles from "./LocationInput.module.css";

export type LocationInputType = {
  className?: string;
};

const LocationInput: FunctionComponent<LocationInputType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.locationinput, className].join(" ")}>
      <div className={styles.locationinputChild} />
      <div className={styles.location}>Location</div>
    </div>
  );
};

export default LocationInput;

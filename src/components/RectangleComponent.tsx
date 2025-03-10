import { FunctionComponent } from "react";
import styles from "./RectangleComponent.module.css";

export type RectangleComponentType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const RectangleComponent: FunctionComponent<RectangleComponentType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.instanceChild} />
      <div className={styles.addNewFriend}>Add New Friend</div>
    </div>
  );
};

export default RectangleComponent;

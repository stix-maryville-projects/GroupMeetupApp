import { FunctionComponent } from "react";
import RectangleComponent1 from "./RectangleComponent1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.instanceParent, className].join(" ")}>
      <RectangleComponent1 property1="Default" showRectangleDiv />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv
        rectangleDivTop="74px"
      />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv={false}
        rectangleDivTop="125px"
      />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv={false}
        rectangleDivTop="175px"
      />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv={false}
        rectangleDivTop="225px"
      />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv={false}
        rectangleDivTop="275px"
      />
      <RectangleComponent1
        property1="Default"
        showRectangleDiv={false}
        rectangleDivTop="325px"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.friendusername}>Kayla Noble</div>
        <div className={styles.otherfriendusername}>Gabrielle Novak</div>
        <div className={styles.newfriend}>newFriend</div>
        <div className={styles.thatoneguy}>thatOneGuy</div>
        <div className={styles.cooldude3000}>coolDude3000</div>
        <div className={styles.niceguy}>niceGuy</div>
        <div className={styles.wiseguy}>wiseGuy</div>
      </div>
    </div>
  );
};

export default FrameComponent;

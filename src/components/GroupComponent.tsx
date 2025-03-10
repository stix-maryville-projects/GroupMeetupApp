import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PollButton from "./PollButton";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  myHouse?: string;

  /** Style props */
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  myHouseWidth?: CSSProperties["width"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  myHouse,
  groupDivLeft,
  groupDivWidth,
  myHouseWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: groupDivLeft,
      width: groupDivWidth,
    };
  }, [groupDivLeft, groupDivWidth]);

  const myHouseStyle: CSSProperties = useMemo(() => {
    return {
      width: myHouseWidth,
    };
  }, [myHouseWidth]);

  return (
    <div
      className={[styles.myHouseParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.myHouse} style={myHouseStyle}>
        {myHouse}
      </div>
      <PollButton property1="Default" />
    </div>
  );
};

export default GroupComponent;

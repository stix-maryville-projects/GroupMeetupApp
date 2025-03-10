import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RectangleComponent1.module.css";

export type RectangleComponent1Type = {
  className?: string;
  showRectangleDiv?: boolean;

  /** Variant props */
  property1?: string;

  /** Style props */
  rectangleDivTop?: CSSProperties["top"];
};

const RectangleComponent1: FunctionComponent<RectangleComponent1Type> = ({
  className = "",
  property1 = "Default",
  showRectangleDiv,
  rectangleDivTop,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  return (
    showRectangleDiv && (
      <div
        className={[styles.rectangleWrapper, className].join(" ")}
        data-property1={property1}
        style={rectangleDivStyle}
      >
        <div className={styles.instanceChild} />
      </div>
    )
  );
};

export default RectangleComponent1;

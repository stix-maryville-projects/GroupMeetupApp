import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FinishSetUpButton.module.css";

export type FinishSetUpButtonType = {
  className?: string;
  finishSetUp?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  finishSetUpButtonTop?: CSSProperties["top"];
  finishSetUpButtonLeft?: CSSProperties["left"];
  finishSetUpButtonWidth?: CSSProperties["width"];
  finishSetUpWidth?: CSSProperties["width"];
  finishSetUpLeft?: CSSProperties["left"];
  finishSetUpFontSize?: CSSProperties["fontSize"];
};

const FinishSetUpButton: FunctionComponent<FinishSetUpButtonType> = ({
  className = "",
  property1 = "Default",
  finishSetUp,
  finishSetUpButtonTop,
  finishSetUpButtonLeft,
  finishSetUpButtonWidth,
  finishSetUpWidth,
  finishSetUpLeft,
  finishSetUpFontSize,
}) => {
  const finishSetUpButtonStyle: CSSProperties = useMemo(() => {
    return {
      top: finishSetUpButtonTop,
      left: finishSetUpButtonLeft,
      width: finishSetUpButtonWidth,
    };
  }, [finishSetUpButtonTop, finishSetUpButtonLeft, finishSetUpButtonWidth]);

  const finishSetUpStyle: CSSProperties = useMemo(() => {
    return {
      width: finishSetUpWidth,
      left: finishSetUpLeft,
      fontSize: finishSetUpFontSize,
    };
  }, [finishSetUpWidth, finishSetUpLeft, finishSetUpFontSize]);

  return (
    <div
      className={[styles.finishsetupbutton, className].join(" ")}
      data-property1={property1}
      style={finishSetUpButtonStyle}
    >
      <div className={styles.finishsetupbuttonChild} />
      <div className={styles.finishSetUp} style={finishSetUpStyle}>
        {finishSetUp}
      </div>
    </div>
  );
};

export default FinishSetUpButton;

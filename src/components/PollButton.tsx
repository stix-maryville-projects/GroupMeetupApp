import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PollButton.module.css";

export type PollButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  pollButtonTop?: CSSProperties["top"];
  pollButtonLeft?: CSSProperties["left"];
};

const PollButton: FunctionComponent<PollButtonType> = ({
  className = "",
  property1 = "Default",
  pollButtonTop,
  pollButtonLeft,
}) => {
  const pollButtonStyle: CSSProperties = useMemo(() => {
    return {
      top: pollButtonTop,
      left: pollButtonLeft,
    };
  }, [pollButtonTop, pollButtonLeft]);

  return (
    <div
      className={[styles.pollbutton, className].join(" ")}
      data-property1={property1}
      style={pollButtonStyle}
    >
      <div className={styles.pollbuttonChild} />
      <img className={styles.pollbuttonItem} alt="" src="/line-9.svg" />
    </div>
  );
};

export default PollButton;

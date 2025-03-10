import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DescriptionInput.module.css";

export type DescriptionInputType = {
  className?: string;
  placeholder?: string;

  /** Style props */
  descriptionInputTop?: CSSProperties["top"];
  descriptionInputLeft?: CSSProperties["left"];
  descriptionInputWidth?: CSSProperties["width"];
  descriptionInputHeight?: CSSProperties["height"];
};

const DescriptionInput: FunctionComponent<DescriptionInputType> = ({
  className = "",
  placeholder,
  descriptionInputTop,
  descriptionInputLeft,
  descriptionInputWidth,
  descriptionInputHeight,
}) => {
  const descriptionInputStyle: CSSProperties = useMemo(() => {
    return {
      top: descriptionInputTop,
      left: descriptionInputLeft,
      width: descriptionInputWidth,
      height: descriptionInputHeight,
    };
  }, [
    descriptionInputTop,
    descriptionInputLeft,
    descriptionInputWidth,
    descriptionInputHeight,
  ]);

  return (
    <div
      className={[styles.descriptioninput, className].join(" ")}
      style={descriptionInputStyle}
    >
      <div className={styles.aminputDontRename}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>{placeholder}</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default DescriptionInput;

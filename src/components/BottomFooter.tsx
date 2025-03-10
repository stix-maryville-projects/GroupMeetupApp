import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;

  /** Style props */
  imageLeft?: CSSProperties["left"];
  imageTop?: CSSProperties["top"];
  imageBorderRadius?: CSSProperties["borderRadius"];
  imageBorder?: CSSProperties["border"];
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
  imageLeft,
  imageTop,
  imageBorderRadius,
  imageBorder,
}) => {
  const imageStyle: CSSProperties = useMemo(() => {
    return {
      left: imageLeft,
      top: imageTop,
      borderRadius: imageBorderRadius,
      border: imageBorder,
    };
  }, [imageLeft, imageTop, imageBorderRadius, imageBorder]);

  return (
    <div className={[styles.image, className].join(" ")} style={imageStyle}>
      <div className={styles.eventTitleShortContainer}>
        <span className={styles.eventTitleShortContainer1}>
          <p className={styles.eventTitle}>Event Title</p>
          <p className={styles.eventTitle}>&nbsp;</p>
          <p className={styles.shortEventDescription}>
            Short event description that should only fill a couple lines.
          </p>
        </span>
      </div>
      <div className={styles.imageChild} />
      <img className={styles.imageIcon} alt="" src="/image.svg" />
    </div>
  );
};

export default BottomFooter;

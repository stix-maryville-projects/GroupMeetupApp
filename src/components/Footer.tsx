import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  contactUs?: string;
  showEllipseDiv?: boolean;
  showLineIcon?: boolean;
  lineIconVisible?: boolean;
  ellipseDivVisible?: boolean;
  lineIconVisible1?: boolean;
  lineIconVisible2?: boolean;
  ellipseDivVisible1?: boolean;
  lineIconVisible3?: boolean;
  lineIconVisible4?: boolean;
  ellipseDivVisible2?: boolean;
  lineIconVisible5?: boolean;
  lineIconVisible6?: boolean;

  /** Style props */
  footerTop?: CSSProperties["top"];
  lineIconTop?: CSSProperties["top"];
  lineIconBottom?: CSSProperties["bottom"];
  lineIconTop1?: CSSProperties["top"];
  lineIconBottom1?: CSSProperties["bottom"];
  lineIconTop2?: CSSProperties["top"];
  lineIconBottom2?: CSSProperties["bottom"];
  lineIconTop3?: CSSProperties["top"];
  lineIconBottom3?: CSSProperties["bottom"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  contactUs,
  showEllipseDiv,
  showLineIcon,
  lineIconVisible,
  ellipseDivVisible,
  lineIconVisible1,
  lineIconVisible2,
  ellipseDivVisible1,
  lineIconVisible3,
  lineIconVisible4,
  ellipseDivVisible2,
  lineIconVisible5,
  lineIconVisible6,
  footerTop,
  lineIconTop,
  lineIconBottom,
  lineIconTop1,
  lineIconBottom1,
  lineIconTop2,
  lineIconBottom2,
  lineIconTop3,
  lineIconBottom3,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: footerTop,
    };
  }, [footerTop]);

  const lineIconStyle: CSSProperties = useMemo(() => {
    return {
      top: lineIconTop,
      bottom: lineIconBottom,
    };
  }, [lineIconTop, lineIconBottom]);

  const lineIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: lineIconTop1,
      bottom: lineIconBottom1,
    };
  }, [lineIconTop1, lineIconBottom1]);

  const lineIcon2Style: CSSProperties = useMemo(() => {
    return {
      top: lineIconTop2,
      bottom: lineIconBottom2,
    };
  }, [lineIconTop2, lineIconBottom2]);

  const lineIcon3Style: CSSProperties = useMemo(() => {
    return {
      top: lineIconTop3,
      bottom: lineIconBottom3,
    };
  }, [lineIconTop3, lineIconBottom3]);

  return (
    <div className={[styles.footer, className].join(" ")} style={footerStyle}>
      <div className={styles.footerChild} />
      {showEllipseDiv && <div className={styles.footerItem} />}
      {showLineIcon && (
        <img className={styles.footerInner} alt="" src style={lineIconStyle} />
      )}
      {lineIconVisible && <img className={styles.lineIcon} alt="" src />}
      {ellipseDivVisible && <div className={styles.ellipseDiv} />}
      {lineIconVisible1 && (
        <img
          className={styles.footerChild1}
          alt=""
          src
          style={lineIcon1Style}
        />
      )}
      {lineIconVisible2 && <img className={styles.footerChild2} alt="" src />}
      {ellipseDivVisible1 && <div className={styles.footerChild3} />}
      {lineIconVisible3 && (
        <img
          className={styles.footerChild4}
          alt=""
          src
          style={lineIcon2Style}
        />
      )}
      {lineIconVisible4 && <img className={styles.footerChild5} alt="" src />}
      {ellipseDivVisible2 && <div className={styles.footerChild6} />}
      {lineIconVisible5 && (
        <img
          className={styles.footerChild7}
          alt=""
          src
          style={lineIcon3Style}
        />
      )}
      {lineIconVisible6 && <img className={styles.footerChild8} alt="" src />}
      <div className={styles.contactUs}>{contactUs}</div>
      <div className={styles.xxxXxxXxxxRandomemailemaiContainer}>
        <span className={styles.xxxXxxXxxxRandomemailemaiContainer1}>
          <p className={styles.xxxXxxXxxx}>(XXX) XXX-XXXX</p>
          <p className={styles.xxxXxxXxxx}>FundaeEventPlanning@gmail.com</p>
          <p className={styles.xxxXxxXxxx}>&nbsp;</p>
          <p className={styles.xxxXxxXxxx}>{`9999 Fundae Street `}</p>
          <p className={styles.xxxXxxXxxx}>Saint Louis, MO 63141</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;

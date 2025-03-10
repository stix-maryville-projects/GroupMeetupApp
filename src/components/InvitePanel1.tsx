import { FunctionComponent } from "react";
import styles from "./InvitePanel1.module.css";

export type InvitePanel1Type = {
  className?: string;
};

const InvitePanel1: FunctionComponent<InvitePanel1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.invitepanel, className].join(" ")}>
      <div className={styles.invitepanelChild} />
      <div className={styles.invitepanelItem} />
      <div className={styles.invited}>Invited</div>
      <div className={styles.invitepanelInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.invitepanelChild1} />
      <div className={styles.invitepanelChild2} />
      <div className={styles.invitepanelChild3} />
      <div className={styles.invitepanelChild4} />
      <div className={styles.kaylaNoble}>Kayla Noble</div>
      <div className={styles.gabrielleNovak}>Gabrielle Novak</div>
    </div>
  );
};

export default InvitePanel1;

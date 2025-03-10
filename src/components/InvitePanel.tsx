import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import Component2 from "./Component2";
import styles from "./InvitePanel.module.css";

export type InvitePanelType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const InvitePanel: FunctionComponent<InvitePanelType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.invitepanel, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.invitepanelChild} />
      <FrameComponent />
      <div className={styles.invitepanelItem} />
      <div className={styles.invitepanelInner} />
      <div className={styles.invited}>Invited</div>
      <div className={styles.newInvited}>New Invited</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.invitepanelChild1} />
      <Component2 property1="Default" />
    </div>
  );
};

export default InvitePanel;

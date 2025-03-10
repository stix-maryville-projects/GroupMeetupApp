import { FunctionComponent, useState, useCallback } from "react";
import MessagePanel from "./MessagePanel";
import PortalPopup from "./PortalPopup";
import NavigationPanel from "./NavigationPanel";
import styles from "./NavigationBarWpageTitle.module.css";

export type NavigationBarWpageTitleType = {
  className?: string;
  newEvent?: string;
};

const NavigationBarWpageTitle: FunctionComponent<
  NavigationBarWpageTitleType
> = ({ className = "", newEvent }) => {
  const [isMessagePanelOpen, setMessagePanelOpen] = useState(false);
  const [isNavigationPanelOpen, setNavigationPanelOpen] = useState(false);

  const openMessagePanel = useCallback(() => {
    setMessagePanelOpen(true);
  }, []);

  const closeMessagePanel = useCallback(() => {
    setMessagePanelOpen(false);
  }, []);

  const openNavigationPanel = useCallback(() => {
    setNavigationPanelOpen(true);
  }, []);

  const closeNavigationPanel = useCallback(() => {
    setNavigationPanelOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.navigationBarWpageTitle, className].join(" ")}>
        <div className={styles.navigationBarWpageTitleChild} />
        <img
          className={styles.notificationsIcon}
          alt=""
          src="/notifications.svg"
        />
        <img className={styles.searchIcon} alt="" src="/search.svg" />
        <div className={styles.zipcodeinput}>
          <div className={styles.zipcodeinputChild} />
          <div className={styles.zipCode}>Zip Code</div>
        </div>
        <div className={styles.distanceinput}>
          <div className={styles.zipcodeinputChild} />
          <div className={styles.distance}>Distance</div>
        </div>
        <div className={styles.newEvent}>{newEvent}</div>
        <img
          className={styles.messageSquareIcon}
          alt=""
          src="/message-square.svg"
          onClick={openMessagePanel}
        />
        <img
          className={styles.homebuttonIcon}
          alt=""
          src="/homebutton.svg"
          onClick={openNavigationPanel}
        />
      </div>
      {isMessagePanelOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMessagePanel}
        >
          <MessagePanel onClose={closeMessagePanel} />
        </PortalPopup>
      )}
      {isNavigationPanelOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavigationPanel}
        >
          <NavigationPanel onClose={closeNavigationPanel} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavigationBarWpageTitle;

import { FunctionComponent, useState, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import NewEvent from "./NewEvent";
import UpcomingEvents1 from "./UpcomingEvents1";
import Profile1 from "./Profile1";
import LogOut from "./LogOut";
import styles from "./NavigationPanel.module.css";

export type NavigationPanelType = {
  className?: string;
};

const NavigationPanel: FunctionComponent<NavigationPanelType> = ({
  className = "",
}) => {
  const [isNavigationPanelOpen, setNavigationPanelOpen] = useState(false);

  const openNavigationPanel = useCallback(() => {
    setNavigationPanelOpen(true);
  }, []);

  const closeNavigationPanel = useCallback(() => {
    setNavigationPanelOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.navigationpanel, className].join(" ")}>
        <img
          className={styles.homebuttonIcon}
          alt=""
          src="/homebutton.svg"
          onClick={openNavigationPanel}
        />
        <NewEvent property1="Default" />
        <UpcomingEvents1 property1="Default" />
        <Profile1 property1="Default" />
        <LogOut property1="Default" />
      </div>
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

export default NavigationPanel;

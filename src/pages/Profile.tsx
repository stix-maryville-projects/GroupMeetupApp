import { FunctionComponent } from "react";
import NavigationBarWpageTitle from "../components/NavigationBarWpageTitle";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import GroupComponent1 from "../components/GroupComponent1";
import RectangleComponent from "../components/RectangleComponent";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <NavigationBarWpageTitle newEvent="Profile" />
      <Footer
        contactUs="Contact Us"
        showEllipseDiv
        showLineIcon
        lineIconVisible
        ellipseDivVisible
        lineIconVisible1
        lineIconVisible2
        ellipseDivVisible1
        lineIconVisible3
        lineIconVisible4
        ellipseDivVisible2
        lineIconVisible5
        lineIconVisible6
        footerTop="1455px"
        lineIconTop="82.89%"
        lineIconBottom="-3.43%"
        lineIconTop1="82.89%"
        lineIconBottom1="-3.43%"
        lineIconTop2="82.89%"
        lineIconBottom2="-3.43%"
        lineIconTop3="82.89%"
        lineIconBottom3="-3.43%"
      />
      <img className={styles.profileChild} alt="" src />
      <img
        className={styles.userprofileicon}
        alt=""
        src="/userprofileicon.svg"
      />
      <div className={styles.changeProfilePicture}>Change Profile Picture</div>
      <img className={styles.profileItem} alt="" src="/line-10.svg" />
      <div className={styles.photos}>Photos</div>
      <BottomFooter />
      <BottomFooter
        imageLeft="540px"
        imageTop="840px"
        imageBorderRadius="unset"
        imageBorder="unset"
      />
      <BottomFooter
        imageLeft="935px"
        imageTop="840px"
        imageBorderRadius="unset"
        imageBorder="unset"
      />
      <BottomFooter
        imageLeft="1321px"
        imageTop="840px"
        imageBorderRadius="unset"
        imageBorder="unset"
      />
      <BottomFooter
        imageLeft="145px"
        imageTop="1148px"
        imageBorderRadius="5px"
        imageBorder="1px solid #000"
      />
      <BottomFooter
        imageLeft="540px"
        imageTop="1147px"
        imageBorderRadius="unset"
        imageBorder="unset"
      />
      <GroupComponent1 />
      <div className={styles.profileInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.friends}>Friends</div>
      <div className={styles.kaylaNoble}>
        <span className={styles.kaylaNobleTxtContainer}>
          <ul className={styles.kaylaNoble1}>
            <li>Kayla Noble</li>
          </ul>
        </span>
      </div>
      <div className={styles.gabrielleNovak}>
        <span className={styles.kaylaNobleTxtContainer}>
          <ul className={styles.kaylaNoble1}>
            <li>Gabrielle Novak</li>
          </ul>
        </span>
      </div>
      <RectangleComponent property1="Default" />
      <div className={styles.aminputDontRename}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Lauer Stix</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename1}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>lauerstix@gmail.com</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename2}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Address</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename3}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>Phone</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.aminputDontRename4}>
        <div className={styles.focusFrame} />
        <div className={styles.text} />
        <div className={styles.placeholder}>DOB</div>
        <div className={styles.caretIndicator}>
          <div className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

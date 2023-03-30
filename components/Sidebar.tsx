import styles from "../styles/Sidebar.module.css";
import Image from "next/image";
import logo from "./assets/logo.svg";
import homeIcon from "./assets/fi_home.svg";
import Link from "next/link";
import videoIcon from "./assets/fi_video.svg";
import libraryIcon from "./assets/fi_library.svg";
import peopleIcon from "./assets/fi_people.svg";
import broadActivityIcon from "./assets/fi_broad_activity_feed.svg";
import heartIcon from "./assets/fi_heart.svg";
import contactCardIcon from "./assets/fi_contact_card.svg";
import helpIcon from "./assets/fi_chat_help.svg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <figure className={styles.logoFigure}>
        <Image className={styles.logo} src={logo} alt="Evaheld Logo" />
      </figure>
      <hr className={styles.hr} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={homeIcon} alt={"icon"} />
            </div>
            Home
          </a>
        </li>
        <li className={styles.link}>
          <Link href="/" className={`${styles.active} ${styles.anchor}`}>
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={videoIcon} alt={"icon"} />
            </div>
            Create Content
          </Link>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.invertedColourIcon} src={libraryIcon} alt={"icon"} />
            </div>
            My Content
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={peopleIcon} alt="icon" />
            </div>
            Visitor Tributes
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={broadActivityIcon} alt="icon" />
            </div>
            Memorial Profile
          </a>
        </li>
      </ul>
      <hr className={styles.hr} />
      <h6 className={styles.heading}>ACCOUNT DETAILS</h6>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={heartIcon} alt="icon" />
            </div>
            My Account
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={contactCardIcon} alt="icon" />
            </div>
            My Profile
          </a>
        </li>
      </ul>
      <hr className={styles.hr} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={helpIcon} alt="icon" />
            </div>
            Get Support
          </a>
        </li>
        </ul>
    </aside>
  );
}

export default Sidebar;
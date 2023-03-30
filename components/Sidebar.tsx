import styles from "../styles/Sidebar.module.css";
import Image from "next/image";
import logo from "./assets/logo.svg";
import homeIcon from "./assets/fi_home.svg";
import Link from "next/link";

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
              <Image className={styles.icon} src={homeIcon} alt={"icon"} />
            </div>
            Create Content
          </Link>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={homeIcon} alt={"icon"} />
            </div>
            My Content
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={homeIcon} alt="icon" />
            </div>
            Visitor Tributes
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={homeIcon} alt="icon" />
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
              <Image className={styles.icon} src={homeIcon} alt="icon" />
            </div>
            My Account
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.anchor} href="#">
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={homeIcon} alt="icon" />
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
              <Image className={styles.icon} src={homeIcon} alt="icon" />
            </div>
            Get Support
          </a>
        </li>
        </ul>
    </aside>
  );
}

export default Sidebar;

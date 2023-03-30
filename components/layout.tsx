import Image from "next/image";
import { ReactNode } from "react";
import styles from "../styles/Content.module.css";
import Sidebar from "../components/Sidebar"

type ContentLayoutProps = {
  children: ReactNode;
  route: string;
  heading: string;
  subheading: string;
  icon: string;
};

function ContentLayout({ children, route, heading, subheading, icon }: ContentLayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <div className={styles.headerContainer}>
            <div className={styles.mainHeader}>
              <div className={styles.headerText}>
                <div>
                  <Image className={styles.icon} src={icon} alt="icon"/>
                  <span className={styles.headerText}>
                    Home
                    &nbsp;&nbsp;
                    /
                    &nbsp;&nbsp;
                    {route}
                  </span>
                </div>
                <div>
                  <Image className={styles.icon} src={icon} alt="icon"/>
                  <span className={styles.headerText}>Client user</span>
                </div>
              </div>
              <div className={styles.subHeader}>
                <figure className={styles.headingIconWrapper}>
                  <Image className={styles.headingIcon} src={icon} alt="icon"/>
                </figure>
                <div className={styles.headingWrapper}>
                  <h4 className={styles.heading}>{heading}</h4>
                  <p className={styles.headingPara}>{subheading}</p>
                </div>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export default ContentLayout;

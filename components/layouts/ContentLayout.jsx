import Image from "next/image";
import React from "react";
import styles from "../../styles/Content.module.css";
import Sidebar from "../Sidebar";

function ContentLayout({ children, route, heading, subheading, icon }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <div className={styles.rectangleContainer}>
            <div className={styles.purpleRectangle}>
              <div className={styles.headerText}>
                <div>
                  <Image className={styles.icon} src={icon} />
                  <span className={styles.rectangleText}>
                    Home
                    &nbsp;&nbsp;
                    /
                    &nbsp;&nbsp;
                    {route}
                  </span>
                </div>
                <div>
                  <Image className={styles.icon} src={icon} />
                  <span className={styles.rectangleText}>Client user</span>
                </div>
              </div>
              <div className={styles.whiteRectangle}>
                <figure className={styles.headingIconWrapper}>
                  <Image className={styles.headingIcon} src={icon} />
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

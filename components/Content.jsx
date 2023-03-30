import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Content.module.css";
import homeIcon from "./assets/fi_home.svg";

function Content() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentBox}>
        <div className={styles.headingContainer}>
          <figure className={styles.iconContainer}>
            <Image className={styles.contentIcon} src={homeIcon} />
          </figure>
          <h4>Create Video Content</h4>
        </div>
        <p className={styles.para}>
          Film or upload content with your mobile, tablet or desktop service.
        </p>
        <hr className={styles.hr} />
        <div className={styles.buttonMaskWrapper}>
          <Link href="/create-video/film" className={styles.buttonMask}>
            Film
          </Link>
          <Link href="/create-video/upload" className={styles.buttonMask}>
            Upload
          </Link>
        </div>
      </div>
      {/* TODO: Make reusable component: 

      <div className={styles.contentBox}>
        <div className={styles.headingContainer}>
          <figure className={styles.iconContainer}>
            <Image className={styles.contentIcon} src={homeIcon} />
          </figure>
          <h4>Record Audio Content</h4>
        </div>
        <p className={styles.para}>
          Film or upload content with your mobile, tablet or desktop service.
        </p>
        <hr className={styles.hr} />
        <div className={styles.buttonMaskWrapper}>
          <Link href="/film" className={styles.buttonMask}>
            Film
          </Link>
          <Link href="/film" className={styles.buttonMask}>
            Upload
          </Link>
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.headingContainer}>
          <figure className={styles.iconContainer}>
            <Image className={styles.contentIcon} src={homeIcon} />
          </figure>
          <h4>Create Written Content</h4>
        </div>
        <p className={styles.para}>
          Film or upload content with your mobile, tablet or desktop service.
        </p>
        <hr className={styles.hr} />
        <div className={styles.buttonMaskWrapper}>
          <Link href="/create-video/film" className={styles.buttonMask}>
            Film
          </Link>
          <Link href="/create-video/upload" className={styles.buttonMask}>
            Upload
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Content;

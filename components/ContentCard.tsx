import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Content.module.css";

interface linkProps {
  anchor: string;
  content: string;
}

interface ContentCardProps {
  icon: string;
  heading: string;
  subheading: string;
  links: linkProps[];
}

function ContentCard({ icon, heading, subheading, links }: ContentCardProps) {
  return (
    <div className={styles.contentBox}>
      <div className={styles.headingContainer}>
        <figure className={styles.iconContainer}>
          <Image className={styles.contentIcon} src={icon} alt={"icon"} />
        </figure>
        <h4>{heading}</h4>
      </div>
      <p className={styles.para}>{subheading}</p>
      <hr className={styles.hr} />
      <div className={styles.buttonMaskWrapper}>
        {links.map((link: { anchor: string; content: string }) => (
          <Link href={link.anchor} className={styles.buttonMask} key={link.content}>
            {link.content}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContentCard;

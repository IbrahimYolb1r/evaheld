import styles from "../styles/Content.module.css";
import homeIcon from "./assets/fi_home.svg";
import ContentCard from "./ContentCard";

interface ContentData {
  heading: string;
  subheading: string;
  links: { anchor: string; content: string }[];
}

const contentData: ContentData[] = [
  {
    heading: "Create Video Content",
    subheading:
      "Film or upload content with your mobile, tablet or desktop service.",
    links: [
      {
        anchor: "/create-video/film",
        content: "Film",
      },
      {
        anchor: "/create-video/upload",
        content: "Upload",
      },
    ],
  },
  {
    heading: "Record Audio Content",
    subheading:
      "Record audio content with your mobile, tablet or desktop service.",
    links: [
      {
        anchor: "/create-video/film",
        content: "Record",
      },
      {
        anchor: "/create-video/upload",
        content: "Upload",
      },
    ],
  },
  {
    heading: "Create Written Content",
    subheading:
      "Create written content with your mobile, tablet or desktop service.",
    links: [
      {
        anchor: "/create-video/film",
        content: "Write",
      },
      {
        anchor: "/create-video/upload",
        content: "Upload",
      },
    ],
  },
];

function Content() {
  return (
    <div className={styles.contentContainer}>
      {contentData.map((data) => (
        <ContentCard key={data.heading} icon={homeIcon} {...data} />
      ))}
    </div>
  );
}

export default Content;

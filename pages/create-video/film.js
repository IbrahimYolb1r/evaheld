import { Inter } from "next/font/google";
import ContentLayout from "../../components/layout";
import videoIcon from "../../components/assets/fi_video.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout
      heading={"Film Video Content"}
      route={"Create Video"}
      subheading={
        "To get started filming a video, click on the Start Filming button below, After you have finished filming, click save and you will automatically be able to choose the recipient and other preferences for your content"
      }
      icon={videoIcon}
    >
      film
    </ContentLayout>
  );
}

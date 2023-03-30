import { Inter } from "next/font/google";
import ContentLayout from "../../components/layout";
import videoIcon from "../../components/assets/fi_video.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout
      heading={"Upload Video Content"}
      route={"Create Video"}
      subheading={
        "To get started, click on the Upload Video button and choose a video file."
      }
      icon={videoIcon}
    >
      upload
    </ContentLayout>
  );
}

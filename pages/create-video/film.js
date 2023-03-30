import { Inter } from "next/font/google";
import Content from "@/components/Content";
import ContentLayout from "@/components/layouts/ContentLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout
      heading={"Film Video Content"}
      route={"Create Video"}
      subheading={
        "To get started filming a video, click on the Start Filming button below, After you have finished filming, click save and you will automatically be able to choose the recipient and other preferences for your content"
      }
    >
      film
    </ContentLayout>
  );
}

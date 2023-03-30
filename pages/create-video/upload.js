import { Inter } from "next/font/google";
import Content from "@/components/Content";
import ContentLayout from "@/components/layouts/ContentLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout
      heading={"Upload Video Content"}
      route={"Create Video"}
      subheading={
        "To get started, click on the Upload Video button and choose a video file."
      }
    >
      upload
    </ContentLayout>
  );
}

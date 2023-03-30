import { Inter } from "next/font/google";
import Content from "../components/Content";
import ContentLayout from "../components/layout";
import homeIcon from "../components/assets/fi_home.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout
      route={"Create Messages"}
      heading={"What kind of message would you like to create today?"}
      subheading={
        "To get started, choose the type of content you'd like to create"
      }
      icon={homeIcon}
    >
      <Content />
    </ContentLayout>
  );
}

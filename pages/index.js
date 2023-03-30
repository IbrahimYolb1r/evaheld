import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import styles from "@/styles/Home.module.css";
import ContentLayout from "@/components/layouts/ContentLayout";
import homeIcon from "@/components/assets/fi_home.svg"

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

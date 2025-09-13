import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/sections/Navbar";
import MainPage from "@/pages/MainPage";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <MainPage/>
    </div>
  );
}

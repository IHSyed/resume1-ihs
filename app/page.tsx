"use client";

import { Header } from "./components/Header";
//import { Practice } from "./components/Practice";
import { Brief } from "./components/Brief";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Contacts from "./components/Contacts";
import Link from "next/link";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div>
      <>
        <Header />
        <Brief />
        <SocialIcons />
        <About />
        <Expertise />
        <Contacts />
        <BackToTop />
      </>
    </div>
  );
}

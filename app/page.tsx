import { Header } from "./components/Header";
//import { Practice } from "./components/Practice";
import { Brief } from "./components/Brief";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <>
      <Header />
      <Brief />
      <SocialIcons />
      <About />

      </>
    
    </div>
    
  );
}
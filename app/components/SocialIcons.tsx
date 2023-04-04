import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div>
      <Link href={"https://linkedin.com/in/iqbal-hussain-6100b52a"}>
        <div className="ml-[-66px] hover:ml-0 duration-200 flex items-center text=lg gap-2 fixed text-white bg-gray-600 w-32 py-3 px-5 top-[30vh] p-5 rounded-r-lg">
          Linkedin
          <FaLinkedin size={30} />
        </div>
      </Link>

      <Link href={"https://github.com/IHSyed"}>
        <div className="ml-[-66px] hover:ml-0 duration-200 flex items-center text=lg gap-2 fixed text-white bg-gray-600 w-32 py-3 px-5 top-[40vh] p-5 rounded-r-lg">
          Github
          <AiFillGithub size={30} />
        </div>
      </Link>

      <Link href={"https://twitter.com/IqbalHussainSy3"}>
        <div className="ml-[-66px] hover:ml-0 duration-200 flex items-center text=lg gap-2 fixed text-white bg-gray-600 w-32 py-3 px-5 top-[50vh] p-5 rounded-r-lg">
          Twitter
          <FaTwitter size={30} />
        </div>
      </Link>
    </div>
  );
}

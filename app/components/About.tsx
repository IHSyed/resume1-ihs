"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import BackToTop from "./BackToTop";

export default function About() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        className="flex items-center max-w-4xl mx-auto leading-4 h-screen text-justify"
        id="about"
      >
        <div className="px-10 mt-10">
          <h1 className="text-4xl mt-7 mb-10 text-center bg-sky-300">
            Brief Introduction
          </h1>

          <p className="pt-5 mx-40 text-justify ">
            I would like to take this opportunity to introduce myself. I am an
            energetic, despite being advanced in age, creative individual who
            enjoys learning along the way and enhancing my performance. I like
            to take on new challenges upon myself and enjoy the learning
            experiences that come along with them. An outgoing talkative person
            who takes heed o listening during making negotiations and closing.
            An individual who manages to get all my homework done before I sit
            in a conversation.
          </p>

          <p className="pt-5 mx-40 text-justify ">
            Since 1995 I have been dealing with various European Manufacturers
            of HV Cables and HV Cable Accessories, for material supplies
            covering various HV Project requirements.
          </p>

          <p className="pt-5 mx-40 text-justify ">
            My educational background and experience spanning over 41 years is
            stated in my CV. I chose to retire from Saudi Cable Company after
            spending 32 wonderful years with them, at the end of 2016.
          </p>

          <p className="pt-5 mx-40 text-justify ">
            I have been involved in HV/EHV Projects since 1998, including
            detailed design calculations of the underground transmission
            systems, execution planning, installation, testing and Commissioning
            of 132 kV Systems. including various 220 kV and 66 kV Projects in
            Baharin and a major EPC Contract in Qatar involving 220 kV and 132
            kV Cable Systems
          </p>
        </div>
      </div>
    </div>
  );
}
{
  /*return(
      <div className={"scrollToTop"}>

        <button
  
          type="button"
          onClick = {BackToTop}
          className="fixed bottom-5 right-7 z-50 cursor-pointer p-4"
        >
          Back to Top
          <FaArrowUp />
        </button>
      </div>
      )*/
}
<div>
  <h2>
    <Link href={"/page"}> Back to Top </Link>
  </h2>
</div>;

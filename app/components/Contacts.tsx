import React from "react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { ImMobile } from "react-icons/im";

export default function Contacts() {
  return (
    <div>
      <div
        className="flex items-center max-w-4xl mx-auto leading-8 mb-10"
        id="contacts"
      >
        <div className="px-10 mt-32 mx-auto">
          <h1 className="text-4xl mt-10 mb-10 text-center bg-sky-300">
            Contact Details
          </h1>

          <div className="border-solid border-blue-500">
            <div className="flex p-2 pt-5 w-80 bg-transparent border-4 rounded-md focus:outline-none text-blue">
              <BsFillFilePersonFill size={30} />
              <p className="mx-5 text-xl font-bold">IQBAL HUSSAIN SYED</p>
            </div>

            <div className="flex p-2 pt-3 w-80 bg-transparent border-4 rounded-md focus:outline-none text-blue">
              <BsFillEnvelopeAtFill className="mr-5" size={30} />
              <a className="mr-5" href="mailto: ihsyedscc@gmail.com">
                ihsyedscc@gmail.com
              </a>
            </div>

            <div className="flex p-2 pt-3 w-80 bg-transparent border-4 rounded-md focus:outline-none text-blue">
              <ImMobile size={30} />
              <p className=" ml-6">+92 304 386 6803</p>
            </div>

            <div className="flex p-2 pt-3 w-80 bg-transparent border-4 rounded-md focus:outline-none text-blue">
              <AiFillHome size={30} />
              <address className="ml-6">
                <p> M1-7, Canyon Views</p>
                <p className="mr-16"> EMAAR</p>
                <p className="mr-16"> Islamabad Expressway</p>
                <p className="mr-16"> Islamabad - 45900</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

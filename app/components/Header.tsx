"use client"

//import React from 'react'
import {GiHamburgerMenu} from "react-icons/Gi"
import {RxCross2} from "react-icons/rx"
import React, {useState} from "react"
import Link from "next/link"
import About from "./About"


export const Header = () => {

    const [toggle, setToggle] = useState(false);
    return(
    <section className='bg-blue-600 text-white'>
        <div className='flex justify-between items-center'>
            <h1 className='font-sign m-7 text-4xl'> Iqbal Hussain Syed</h1>
            <ul className='m-7 md:flex hidden'>
              {/* md:flex hidden will hide the NavBar on Small Screen*/} 
                <li className='mx-5 text-2xl font-sign hover:scale-150 duration-200 '> Home</li>
                <li className='mx-5 text-2xl font-sign hover:scale-150 duration-200 '> 
                <Link href = "./about">
                  About
                  </Link>
                  </li>
                <Link href={"/experience"}><li className='mx-5 text-2xl font-sign hover:scale-150 duration-200'> Experience</li></Link>
                <Link href={"/expertise>"}><li className='mx-5 text-2xl font-sign hover:scale-150 duration-200'> Expertise</li></Link>
                <Link href={"/contact>"}><li className='mx-5 text-2xl font-sign hover:scale-150 duration-200'> Contact</li></Link>
            </ul>
            <div className='pr-5 md:hidden'
            onClick= {() => {
              setToggle(!toggle); 
            }} >

              {toggle ? <GiHamburgerMenu size ={30} /> : <RxCross2  size={30} />}

              {/* The above statement is equivalent to
              if (toggle == true) {
                <GiHambirgerMenu size {30}/>
              }

              else {
                <RxCross2 size {30}
              } */}
            </div>

            {/* Overlay Starts here */}
            {/* Copy the UL from above over here, then give a ClassName to the div under */}
            {/*<div>



            </div>*/}
            {/*Overlay Ends Here */}
        </div>
    </section>

  )
}

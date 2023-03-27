import React from 'react'
//import Image from 'next/image'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
{/* Md or other abbreviation to be included when importing from React-Icons */}

export const Brief = () => {
  return (

    <section className='max-w-4xl mx-auto flex md:flex-row flex-col items-center mt-14'>

        {/* Left Portion Starts Here */}
        <div className='p-5 max-w-lg'>
            <h1> I am a Retiree</h1>
            <p className='pt-5 pb-4'>Highly experienced in EHV/HV Underground Transmission Design, Execution, Testing and Commissioning of EPC Contracts</p>

            <button className='group flex items-center   bg-gradient-to-r from-cyan-500 to-blue-300 py-4 px-4 rounded-xl'> Curriculum Vitae 
            <MdOutlineKeyboardArrowRight size={"25"} className= "group-hover:rotate-90 duration-300" />
            </button>

            {/* Above Copied from React-Icons*/}
        </div>
        {/* Left Portion Ends Here */}

        {/* Right Portion Begins Here */}

        <div>
            {/*<Image src= {"/image.jpg"} alt='IH Syed' width={100} height={200} />*/}
            <img src='/image.jpg' className='md:w-full w-1/2 mx-auto rounded-full' />

        {/* Right Portion Ends Here */}
        </div>
    </section>

  )
}

import React from 'react'
import Image from 'next/image'

export const Brief = () => {
  return (

    <section>

        {/* Left Portion Starts Here */}
        <div>
            <h1> I am a Retiree</h1>
            <p>Brief Introduction to be inserted here</p>

            <button className='bg-gradient-to-r from-indigo-600 py-2 px-4 rounded-xl'> Profile </button>
        </div>
        {/* Left Portion Ends Here */}

        {/* Right Portion Begins Here */}

        <div>
            <Image src= {"/image.jpg"}alt='IH Syed' width={"100"} height={"100"}/>
        </div>

        {/* Right Portion Ends Here */}

    </section>

  )
}

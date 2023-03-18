import React from 'react'

export const Header = () => {
  return (
    <section className='bg-blue-600 text-white'>
        <div className='flex justify-between'>
            <h1 className='font-sign m-7 text-4xl'> Iqbal Hussain Syed</h1>
            <ul className='m-7 flex'>
                <li className='mx-5 text-2xl font-sign'> Home</li>
                <li className='mx-5 text-2xl font-sign'> About</li>
                <li className='mx-5 text-2xl font-sign'> Experience</li>
                <li className='mx-5 text-2xl font-sign'> Expertise</li>
                <li className='mx-5 text-2xl font-sign'> Contact</li>
            </ul>

        </div>
    </section>

  )
}

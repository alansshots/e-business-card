import React from 'react'

import Background from '../assets/E-Cards.png';

function Banner() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#013941] tracking-widest mt-10 text-7xl'>DIGITAL BUSINESS CARD</h1>
        <div>
            <img src={Background} className='mt-[-30px]' alt="digital business cards blured"/>           
            <div className='absolute top-[8rem] left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
                <div className='cursor-pointer text-center bg-[#013941] py-2 px-10 mx-2 text-3xl font-normal text-white rounded-full'>EXPLORE OPTIONS</div>
            </div>
        </div>
    </div>
  )
}

export default Banner
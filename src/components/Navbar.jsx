import React from 'react'

function Navbar() {
  return (
    <div id='Navbar' className='flex flex-row justify-between items-center border-b border-gray-300 shadow-md px-10 py-4'>
        <div>
            LOGO
        </div>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center justify-between'>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Personal</a>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Business</a>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Parents</a>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='cursor-pointer text-center bg-[#14B8A6] py-1 px-5 mx-2 text-xl font-normal text-white rounded-full'>Sign In</div>
                <div className='cursor-pointer text-center bg-[#013941] py-1 px-5 mx-2 text-xl font-normal text-white rounded-full'>Sign Up</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo-dark.png'

function Navbar() {
  return (
    <div id='Navbar' className='flex flex-row justify-between items-center border-b border-gray-300 shadow-md px-2 md:px-10 py-4'>
        <div>
            <Link to='/' className='cursor-pointer flex flex-row justify-center items-center'>
                <img src={Logo} alt="logo" className='h-6 md:h-10'/>
            </Link>
        </div>
        <div className='flex flex-row justify-between items-center'>
            {/* <div className='flex flex-row items-center justify-between'>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Personal</a>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Business</a>
                <a className='cursor-pointer p-2 mx-2 font-normal'>Parents</a>
            </div> */}
            <div className='flex flex-row items-center justify-center'>
                <Link to='/sign-in' className='cursor-pointer hover:scale-95 duration-200 text-center bg-[#14B8A6] py-1 px-6 mx-2 text-sm md:text-xl font-normal text-white rounded-full'>Sign In</Link>
                <Link to='/sign-up' className='cursor-pointer hover:scale-95 duration-200 text-center bg-[#013941] py-1 px-6 mx-2 text-sm md:text-xl font-normal text-white rounded-full'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
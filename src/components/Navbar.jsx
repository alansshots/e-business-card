import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    // <div id='Navbar' className='flex flex-row justify-between items-center border-b border-gray-300 shadow-md px-2 md:px-10 py-4'>
    //     <div>
    //         <Link to='/' className='cursor-pointer flex flex-row justify-center items-center'>
    //             <img src={Logo} alt="logo" className='h-6 md:h-10'/>
    //         </Link>
    //     </div>
    //     <div className='flex flex-row justify-between items-center'>
    //         {/* <div className='flex flex-row items-center justify-between'>
    //             <a className='cursor-pointer p-2 mx-2 font-normal'>Personal</a>
    //             <a className='cursor-pointer p-2 mx-2 font-normal'>Business</a>
    //             <a className='cursor-pointer p-2 mx-2 font-normal'>Parents</a>
    //         </div> */}
    //         <div className='flex flex-row items-center justify-center'>
    //             <Link to='/sign-in' className='cursor-pointer hover:scale-95 duration-200 text-center bg-[#14B8A6] py-1 px-6 mx-2 text-sm md:text-xl font-normal text-white rounded-full'>Sign In</Link>
    //             <Link to='/sign-up' className='cursor-pointer hover:scale-95 duration-200 text-center bg-[#013941] py-1 px-6 mx-2 text-sm md:text-xl font-normal text-white rounded-full'>Sign Up</Link>
    //         </div>
    //     </div>
    // </div>
    <>
     <div className="fixed top-0 w-full z-30 bg-[#101014] md:opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col border-b-2 border-gray-50 max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
            <Link to='/' className='cursor-pointer flex flex-row justify-center items-center'>
                <img src={Logo} alt="logo" className='h-6 md:h-10'/>
             </Link>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/"
                  className="font-medium text-gray-100 hover:text-gray-400 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-gray-100 hover:text-gray-400 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="inline-flex cursor-pointer hover:scale-95 items-center px-4 py-2 mt-2 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-[#113941]"
                >
                  <span className="justify-center">Download</span>
                  <svg
                    className="w-3 h-3 fill-current text-[#fff] flex ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
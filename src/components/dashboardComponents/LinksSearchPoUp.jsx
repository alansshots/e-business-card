import React from 'react'
import { Link } from 'react-router-dom'

import {Search, ArrowRight, X } from 'react-feather';
import GitHub from '../../assets/GitHubLogo.png';

function LinksSearchPoUp({onClose}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-2/3 h-4/5 overflow-y-auto relative p-6">
      <button className="absolute top-0 left-0 mt-4 ml-4 text-md text-[#013941] cursor-pointer" onClick={onClose}><X/></button>
        <div className="flex flex-col justify-center items-center">            
        <div id="SearchBar" className='w-1/2'>
        <div className='flex flex-row justify-around items-center bg-white border-2 border-gray-50   rounded-3xl p-2 mt-4 shadow-md transition duration-200 hover:shadow-xl'>
            <Search className='text-black mx-2'/>
            <input
            type="text" className='text-black w-full border-transparent outline-none focus:border-transparent focus:ring-0'/>
            </div>
        </div>
        {/* Links */}
        <div className='mt-10 text-left'>
        {/* Contact */}
        <div className='text-left w-full mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Contact</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>Instagram</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>Facebook</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>WatsApp</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>WeChat</p>
              </div> 
                     
          </div>
        </div>
        {/* Social */}
        <div className='text-left w-full mt-4 mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Social</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>Mail</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div>  

          </div>
        </div>
        {/* Business */}
        <div className='text-left w-full mt-4 mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Business</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div>   
              
          </div>
        </div>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default LinksSearchPoUp
import React from 'react'
import { Link } from 'react-router-dom'

import GitHub from '../../assets/GitHubLogo.png';

function LinksSearchPoUp({onClose}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center items-center">            
        Search Field
        <div className='w-full flex flex-wrap flex-row justify-start items-center mt-5 ml-3'>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>

              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a>
              
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-20 w-20  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
          </div>
        </div>
        <button className="mt-4 text-md text-[#013941] cursor-pointer" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default LinksSearchPoUp
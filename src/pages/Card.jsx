import React from 'react'

import { Link } from 'react-router-dom';

import Background from '../assets/bgprofile.jpg';
import GitHub from '../assets/GitHubLogo.png';
import Profile from '../assets/profile.jpg';


function Card() {
  return (
    <>
        <div className='flex flex-row justify-center items-center'>
          <div className='sm:w-[500px]'>
            <div className='relative'>
              <div  style={{ clipPath: 'ellipse(85% 67% at 78% 22%)'}} className='bg-[#013941] h-72 w-full sm:rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute bg-cover bg-cenwter w-full h-full' style={{ backgroundImage: `url(${Background})` }}></div>
              </div>
            <div className='absolute left-0 bottom-0'>    
                <img className='h-32 w-32 ml-2 mb-5 border-4 border-white rounded-full' src={Profile} alt="" />     
                <div className='absolute -right-7 bottom-1 z-10'>  
                  <img className='h-16 w-16 mb-5 border-4 border-white rounded-full' src={Profile} alt="" />     
                </div>
            </div>
          </div>
          <div className='px-2'>
          <div className='text-left px-1'>
            <h2 className='text-2xl mb-2 font-semibold'>Alen Gospodinov</h2>
            <div className='w-full text-gray-600'>
              <p>Works at Company Name</p>
              <p>Aachen, Germany</p>
              <p>Computer Engineering student at RWTH Aachen University </p>
              <p>Software Engineer | Automation Systems</p>
            </div>
          </div>
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
          </div>
          
          <div className='mb-10 flex flex-col items-center justify-center'>
            <div className='mt-10 w-4/5 text-center bg-[#013941] py-3 px-5 mx-2 text-2xl font-semibold text-white shadow-xl rounded-full'>Add Contact</div>
            <Link to='/sign-up' className='mt-10  w-1/2 text-center bg-white text-black mx-2 shadow-xl border-2 border-black text-sm rounded-full'>Create your own E-card</Link>
          </div>
          
          </div>
          </div>
        </div>
    </>
  )
}

export default Card
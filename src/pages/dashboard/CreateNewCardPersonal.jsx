import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Plus } from 'react-feather';

import LinkSearch from '../../components/dashboardComponents/LinksSearchPoUp'

import Background from '../../assets/bgprofile.jpg';
import GitHub from '../../assets/GitHubLogo.png';
import Profile from '../../assets/profile.jpg';

function CreateNewCardPersonal() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // Function to toggle the visibility of the popup
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 flex flex-row items-center justify-around w-full'>
          <div className='w-full mx-10'>
            <div className='flex flex-row justify-between items-center'>
            {/* Photos */}
            <div class="flex flex-col items-center justify-center">
              <p className='mb-1 text-gray-600'>Profile Picture</p>
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500">SVG, PNG</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 
            <div class="flex flex-col items-center justify-center w-3/5">
            <p className='mb-1 text-gray-600'>Cover Photo</p>
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>  
            </div>
            {/* User Info */}

            <form className='mt-10'>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div className='text-left'>
                        <label for="first_name" class="block mb-0.5 ml-0.5  text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className='text-left'>
                        <label for="location" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Location</label>
                        <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>    
                    <div className='text-left'>
                        <label for="phone" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Phone</label>
                        <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>  
                </div>
                <div class="mb-6 text-left">
                    <label for="Bio" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Bio</label>
                    <input type="text" id="Bio" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>

                <div className='text-left '>
                  <p className='font-semibold'>Links</p>
                  <div className='w-full flex flex-wrap flex-row justify-start items-start mt-5'>
                      <a onClick={togglePopUp} className='mr-8 mb-2 flex flex-col flex-center items-center'>
                        <Plus className='h-20 w-20 p-3 hover:scale-95 duration-200 cursor-pointer bg-white rounded-xl border-2 border-gray-50 shadow-xl'/>
                      </a> 
                  </div>
                </div>

                <div className='text-left'>
                  <button type='button' className="mt-5 my-5 py-2 w-1/4 shadow-md bg-[#14B8A6] text-white text-xl rounded-full focus:outline-none focus:ring ">
                    Save
                  </button>
                </div>

            </form>
          </div>
        {/* Preview */}
        <div className='border-2 border-gray-300 rounded-3xl shadow-2xl mr-10'>
          <div className='flex flex-row justify-center items-center'>
          <div className='w-full'>
            <div className='relative'>
              <div  style={{ clipPath: 'ellipse(85% 67% at 78% 22%)'}} className='bg-[#013941] h-48 sm:rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute bg-cover bg-cenwter w-full h-full' style={{ backgroundImage: `url(${Background})` }}></div>
              </div>
            <div className='absolute left-0 bottom-0'>    
                <img className='h-20 w-20 ml-2 mb-5 border-4 border-white rounded-full' src={Profile} alt="" />     
            </div>
          </div>
          <div className='px-2'>
          <div className='text-left px-1'>
            <h2 className='text-xl mb-2 font-semibold'>Alen Gospodinov</h2>
            <div className='w-full text-sm text-gray-600'>
              <p>Aachen, Germany</p>
              <p>Computer Engineering student at RWTH Aachen University </p>
            </div>
          </div>
            <div className='w-full flex flex-wrap flex-row justify-start items-center mt-5 ml-3'>
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
              <a className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </a> 
          </div>
          
          <div className='mb-5 flex flex-col items-center justify-center'>
            <div className='mt-5 w-4/5 text-center bg-[#013941] py-1 px-2 mx-2 text-md font-semibold text-white shadow-xl rounded-full'>Add Contact</div>
          </div>
          
          </div>
          </div>
        </div>
        </div>
        </div>
        
        {isPopUpOpen && <LinkSearch onClose={togglePopUp} />}
    </div>
  )
}

export default CreateNewCardPersonal
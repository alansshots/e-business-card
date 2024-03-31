import React from 'react'
import { useState } from 'react';

import Card from '../Card';

function CreateNewCardPersonal() {
  return (
    <>
        <div className='flex flex-row items-center justify-around '>
          <div className='w-full mx-10'>
            <div className='flex flex-row items-center'>
            {/* Photos */}
            <div class="flex items-center justify-center w-full">
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
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-4/5 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
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
                        <label for="first_name" class="block mb-0.5 ml-0.5  text-sm font-medium text-gray-900">First name</label>
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

                <div className='text-left'>
                  <button type='button' className="mt-5 py-2 w-1/4 shadow-md bg-[#14B8A6] text-white text-xl rounded-full focus:outline-none focus:ring ">
                    Save
                  </button>
                </div>

            </form>
          </div>
          <div>
          {/* <p className='font-light'>Save changes to see Preview</p>  */}
          <div className='border-2 border-gray-300 rounded-3xl shadow-2xl scale-[70%]'>
            <Card/>
          </div>
          </div>
        </div>
    </>
  )
}

export default CreateNewCardPersonal
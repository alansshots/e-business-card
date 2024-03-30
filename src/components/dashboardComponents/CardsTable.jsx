import React from 'react'
import { PlusCircle, Edit2, Share2 } from 'react-feather'

function CardsTable() {
  return (
    <>
    <div class="pt-6 px-4">
        <div class="">
            <div class="bg-white shadow rounded-3xl mb-4 p-4 sm:p-6 h-full">
                 <div class="flex items-center justify-between mb-4">
                    <h3 class="text-2xl font-semibold text-[#013941]">Cards Table</h3>
                    <div className='flex flex-row items-center justify-center cursor-pointer p-2 px-4 rounded-full shadow-xl  bg-[#14B8A6] text-white '>
                    <PlusCircle/> <span className='ml-1'>New Card</span>
                    </div>
                 </div>
                 <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200">
                       <li class="py-3 sm:py-4">
                          <div class="flex flex-row justify-between items-center ">
                             <div class="flex flex-row items-center justify-center">
                                <img class="h-12 w-12 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image"/>
                                <h2 className='ml-5'>Alen Gospodinov</h2>   
                             </div>                            
                             <div class="flex flex-row justify-center items-center">
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full flex flex-row justify-cener items-center'>
                                 <span><Edit2 className='h-4 w-4'/></span>
                                 <span className='ml-2 pb-0.5'>Edit</span>
                                 </div>
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full flex flex-row justify-center items-center'>
                                 <Share2 className='h-4 w-4'/>
                                 <span className='ml-2 pb-0.5'>Share Link</span>
                                 </div>
                                 <div className='border-2 mx-1 px-2 py-0.5 rounded-full flex flex-row justify-center items-center'>
                                 <Share2 className='h-4 w-4'/>
                                 <span className='ml-2 pb-0.5'>QR Code</span>
                                 </div>

                             </div>
                          </div>
                       </li>
                       <li class="py-3 sm:py-4">
                          <div class="flex flex-row justify-between items-center ">
                             <div class="flex flex-row items-center justify-center">
                                <img class="h-12 w-12 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image"/>
                                <h2 className='ml-5'>Alen Gospodinov</h2>   
                             </div>                            
                             <div class="flex flex-row justify-center items-center">
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full flex flex-row'>
                                 <span><Edit2 className='h-4 w-4'/></span>
                                 <span className='ml-2'>Edit</span>
                                 </div>
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full'><span>QR Code</span></div>
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full'><span>Share Link</span></div>

                             </div>
                          </div>
                       </li>
                       <li class="py-3 sm:py-4">
                          <div class="flex flex-row justify-between items-center ">
                             <div class="flex flex-row items-center justify-center">
                                <img class="h-12 w-12 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image"/>
                                <h2 className='ml-5'>Alen Gospodinov</h2>   
                             </div>                            
                             <div class="flex flex-row justify-center items-center">
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full flex flex-row'>
                                 <span><Edit2 className='h-4 w-4'/></span>
                                 <span className='ml-2'>Edit</span>
                                 </div>
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full'><span>QR Code</span></div>
                                <div className='border-2 mx-1 px-2 py-0.5 rounded-full'><span>Share Link</span></div>

                             </div>
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default CardsTable
import React from 'react'

import { User, Copy, ShoppingBag, FastForward } from 'react-feather'

function DashNav() {
  return (
    <>
        <aside id="sidebar" class="fixed shadow-xl z-20 h-full top-0 left-0 pt-6 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
        <div class="flex items-center justify-start mb-5 mx-2 ">
          <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
            <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
            <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo"/>
            <span class="self-center whitespace-nowrap">Company Name</span>
          </a>
         </div>
         <div class="relative flex-1 flex flex-col min-h-0 shadow-xl bg-white pt-0 border-t-2 border-[#013941]">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                     {/* <li>
                        <a href="#" class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                           <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                           </svg>
                           <span class="ml-3">Dashboard</span>
                        </a>
                     </li> */}
                     <li>
                        <a class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <Copy className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Cards</span>
                        </a>
                     </li>
                     <li>
                        <a class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <ShoppingBag className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Accessories</span>
                        </a>
                     </li>
                     <li>
                        <a class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <User className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Account</span>
                        </a>
                     </li>
                  </ul>
                  <div class="space-y-2 pt-2">
                  <ul>
                     <li>
                        <a class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <FastForward className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Upgrade Plan </span>
                        </a>
                     </li>
                  </ul>
                 </div>
               </div>
            </div>
         </div>
      </aside>
    </>
  )
}

export default DashNav
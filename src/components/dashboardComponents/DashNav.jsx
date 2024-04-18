import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseClient';
import { User, Copy, ShoppingBag, FastForward, LogOut } from 'react-feather'
import Logo from '../../assets/logo.png'

function DashNav() {
   const [isHovered, setIsHovered] = useState(false);
   const [dropdown, setDropdown] = useState(false)
   const [userId, setUserId] = useState(null);
   const [user, setUser] = useState(null);
   const navigate = useNavigate();
   const jwt = localStorage.getItem('accessToken');    

   useEffect(() => {
      async function getUserData() {
        const { data, error } = await supabase.auth.getUser(jwt);
        if (data?.user) {
          setUserId(data.user.id);
          fetchUser(); 
        }
      }
    
      const fetchUser = async () => {
        // Wait for userId to be set
        if (userId) {
          const { data: user, error } = await supabase
            .from('users')
            .select()
            .eq('id', userId);
    
          if (user) {
            setUser(user[0]);
          }
        }
      };
    
      if (jwt) {
        // First, get user data from auth
        getUserData();
        
        // Then, fetch user data from the database
      }
    }, [jwt, userId]); 
 
   async function signOutUser() {
     await supabase.auth.signOut();
     setUser(null);
     localStorage.setItem('accessToken', null);
     navigate('/');
     window.location.reload();
   }
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
          <div class="text-xl font-bold flex items-center lg:ml-2.5">
            <img src={Logo} class="h-6 mr-2" alt="Windster Logo"/>
            <span class="self-center whitespace-nowrap">Colorblock</span>
          </div>
         </div>
         <div class="relative flex-1 flex flex-col min-h-0 shadow-xl bg-white pt-0 border-t-2 border-[#013941]">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                     {/* <li>
                        <Link to="" class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <Copy className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Cards</span>
                        </Link>
                     </li> */}
                     <li>
                        <Link to="/dashboard/my-card" class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <Copy className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">My Card</span>
                        </Link>
                     </li>
                     <li>
                        <Link class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <ShoppingBag className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Accessories</span>
                        </Link>
                     </li>
                  </ul>
                  <div class="space-y-2 pt-2">
                  {/* <ul>
                     <li>
                        <Link class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                           <FastForward className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                           <span class="ml-3 flex-1 whitespace-nowrap">Upgrade Plan </span>
                        </Link>
                     </li>
                  </ul> */}
                 </div>
               </div>
               <div className='px-3'>
               {jwt && user && (
                  <Link onClick={signOutUser} class="cursor-pointer text-base text-gray-900 font-normal rounded-lg hover:bg-[#EFFAF5] flex items-center p-2 group ">
                     <LogOut className="w-6 h-6 text-[#013941] flex-shrink-0 transition duration-75"/>
                     <div className='flex flex-col items-center justify-center w-full'> 
                        <span class="ml-3 flex-1 whitespace-nowrap">Sign out</span>
                        <span className='text-xs'>{user.email}</span>
                         </div>
                  </Link>
                        )}

                        {!jwt || !user ? (
                        <>
                           <div>
                              <p className='text-xs mb-2'>Please sign in/ sign up to use the dashboard</p>
                           </div>
                           <div className='flex flex-row items-center justify-center'>
                              <Link to='/sign-in' className='cursor-pointer text-center bg-[#14B8A6] py-0.5 px-2 mx-2 text-md font-normal text-white rounded-full'>Sign In</Link>
                              <Link to='/sign-up' className='cursor-pointer text-center bg-[#013941] py-0.5 px-2 mx-2 text-md font-normal text-white rounded-full'>Sign Up</Link>
                           </div>   
                        </>
                  ) : null} 
               </div>
            </div>
         </div>
      </aside>
    </>
  )
}

export default DashNav
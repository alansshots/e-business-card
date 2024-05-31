import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Pricing() {
  return (
    <section id="Pricing" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 md:py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className='text-[#013941] mt-10 text-6xl'>PRICING</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever you want we have a plan for you.</p>
        </div>
        <div class="flex flex-row justify-center items-center">
    <div className='flex flex-col md:flex-row justify-around items-center'>
        <div type="button" class="blur-sm flex mr-1 items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl">
            <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                    </path>
                </svg>
            </div>
            <div>
                <div class="text-xs">
                    Download on the
                </div>
                <div class="-mt-1 font-sans text-xl font-semibold">
                    App Store
                </div>
            </div>
        </div>
        <a href="https://expo.dev/accounts/alansshots/projects/colorblock/builds/97f074ca-a97d-474b-b40b-97c56ed20f93" class="flex ml-1 items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl">
            <div class="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                    </path>
                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                    </path>
                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                    </path>
                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                    </path>
                </svg>
            </div>
            <div>
                <div class="text-xs">
                    GET IT ON
                </div>
                <div class="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                </div>
            </div>
        </a>
    </div>
        </div>
        <div className="mt-10 flex justify-center flex-wrap w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-4 xl:w-1/4 md:w-1/2 w-full"
          >
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free Forever</h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Full Card Functionality, noting spared
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Unlimited Card Links 
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Add Contact Button 
              </p> 
              <Link to='sign-up'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center mt-auto text-white bg-[#013941] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#14B8A6] duration-200 rounded"
              >
                Sign Up
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </motion.button>
              </Link>
              <p className="text-xs text-gray-500 mt-3"></p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-4 xl:w-1/4 md:w-1/2 w-full"
          >
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden opacity-50">
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Coming Soon</h1>
              <p className="flex items-center text-gray-600 mb-2 blur-md">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 blur-sm">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2 blur-sm">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hexagon neutra unicorn
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex blur-md items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded"
              >
                Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </motion.button>
              <p className="text-xs text-gray-500 mt-3 blur-sm">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-4 xl:w-1/4 md:w-1/2 w-full"
          >
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden opacity-50">
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Coming Soon</h1>
              <p className="flex items-center text-gray-600 mb-2 blur-md">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 blur-sm">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2 blur-sm">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hexagon neutra unicorn
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex blur-md items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded"
              >
                Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </motion.button>
              <p className="text-xs text-gray-500 mt-3 blur-sm">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
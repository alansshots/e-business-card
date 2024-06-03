import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Footer() {
  return (
        

<footer class="bg-[#101014]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} class="h-8 md:ml-5" alt="Colorblock Logo" />
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap">Kartaa</span> */}
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
                {/* <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li> */}
                <li>
                    <a href="https://policies.google.com/privacy?hl=en-US" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                {/* <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Accessories</a>
                </li> */}
            </ul>
        </div>
        <hr class="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-400 sm:text-center ">© 2024 <a class="hover:underline">Colorblock™</a>. All Rights Reserved.</span>
    </div>
</footer>

  )
}

export default Footer
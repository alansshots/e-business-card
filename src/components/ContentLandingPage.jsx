import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../assets/E-Cards.png';
import PersonalCardBanner from '../assets/PersonalCardBanner.png'
import Path from '../assets/path.png';
import { User } from 'react-feather';

function ContentLandingPage() {
  return (
    <section className="text-white body-font bg-[#101014]">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-5xl text-4xl items-center font-semibold xl:w-2/2 text-white">
            Create and Share digital Cards 
            <span className='ml-3 text-[#14B8A6]'>
            effortlessly.
            </span>
          </h1>
          {/* <image 
            source={Path}
            className='bg-[#000]'
          /> */}
          <p className="mb-4 xl:w-3/4 text-gray-300 text-lg">
          Speed up contact sharing with ease. A digital card offers convenience, sustainability, customization, and seamless integration enhancing networking effectiveness.
          </p>
          <div className="flex justify-center cursor-pointer">
            <a
              className="items-center px-5 py-3 mt-2 hover:scale-95 text-white transition duration-500 ease-in-out transform rounded-lg bg-[#113941]"
            >
              <span className="justify-center font-semibold">See More</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src={PersonalCardBanner}
          ></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl font-semibold">
              Trusted by top-tier product companies
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex flex-col justify-center items-center justify-center">
              <h2 className='text-[#14B8A6] mb-2 text-5xl font-semibold'>20K</h2>
              <User className='text-3xl w-14 h-14'/>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold">
          How does it work?.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-300 text-center">
          Get Started. Personalize Your Card. Begin Sharing :)
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          {/* <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          ></img> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/itBBsQRv0EU?si=NSXif5y7w3zw18XU&amp;controls=0"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-semibold ">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-300">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold "
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-[#113941]"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ContentLandingPage
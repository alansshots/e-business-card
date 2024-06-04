import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../assets/E-Cards.png';
import PersonalCardBanner from '../assets/PersonalCardBanner.png'
import Path from '../assets/path.png';
import { User } from 'react-feather';
import Video from '../assets/video.mp4'

import supabase from '../../src/config/supabaseClient';

function ContentLandingPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const { data, error } = await supabase.from('users').select('id');
        if (error) {
          throw error;
        }
        setUserCount(data.length);
      } catch (error) {
        console.error('Error fetching user count:', error.message);
      }
    };

    fetchUserCount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('emails').insert([{ email }]);
      if (error) {
        throw error;
        setError(true);
        setSuccess(false)
      }
      setSuccess(true);
    } catch (error) {
      console.error('Error inserting data:', error.message);
      setError(false);
      setSuccess(true)
    }
  };
  return (
    <section className="text-white body-font bg-[#101014]">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 xl:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-10 md:mb-40 items-center text-center">
          <div className='relative'>
            <h1 className="mb-5 sm:text-5xl text-2xl items-center font-semibold xl:w-2/2 text-white">
              Create and Share digital Cards 
              <span className='ml-3 text-[#14B8A6]'>
              effortlessly.
              </span>
            </h1>
            <img src={Path} className='md:w-72 w-36 absolute left-20 ml-14 md:ml-0 md:left-40 bottom-3 md:bottom-0.5'/>
          </div>
          <p className="mb-4 xl:w-3/4 text-gray-300 text-lg">
          Speed up contact sharing with ease. A digital card offers convenience, sustainability, customization, and seamless integration enhancing networking effectiveness.
          </p>
          <div className="flex justify-center cursor-pointer">
            <a
            href='#video'
              className="items-center px-4 py-2 md:px-5 md:py-3 mt-2 hover:scale-95 text-white transition duration-500 ease-in-out transform rounded-lg bg-[#013941]"
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
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="mb-8 text-2xl font-semibold">
              Trusted by Many
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-16 mb-12 text-center lg:grid-cols-1">
            <div className="flex flex-col justify-center items-center justify-center">
              <h2 className='text-[#14B8A6] mb-2 text-5xl font-semibold'>{userCount}</h2>
              <User className='text-3xl w-14 h-14'/>
            </div>
          </div>
        </div>
      </section>
      <div id='video' className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-4xl md:text-6xl Avenir font-semibold">
          How does it work ?
        </h1>
        <h1 className="mb-8 text-xl md:text-2xl text-gray-300 text-center">
          Get Started. Personalize Your Card. Begin Sharing :)
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
           <video src={Video} width="750" height="500" controls loop autoPlay muted />
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-4xl md:text-6xl font-semibold ">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-xl md:text-2xl text-gray-300">
              Enter your email address and get our newsletters straight away.
            </h1>
            <form onSubmit={handleSubmit}>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-1/4 mb-2 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold "
            ></input>{" "}
            <button
              type="submit"
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg bg-[#013941]"
            >
              <span className="justify-center">Subscribe</span>
            </button>
          </form>
          {error && <p className="text-red-500">Please try again later.</p>}
          {success && <p className="text-green-500">Subscription successful!</p>}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ContentLandingPage
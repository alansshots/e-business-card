import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../assets/E-Cards.png';

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[#013941] tracking-widest mt-10 text-7xl">DIGITAL PERSONAL CARD</h1>
      <div className="relative">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={Background}
          className="mt-[-30px]"
          alt="digital business cards blurred"
        />
        <a href="#Pricing">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[8rem] left-0 right-0 bottom-0 flex flex-col justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-center bg-[#013941] py-2 px-10 mx-2 text-3xl font-normal text-white rounded-full"
          >
            EXPLORE OPTIONS
          </motion.div>
        </motion.div>
        </a>


      </div>
    </div>
  )
}

export default Banner
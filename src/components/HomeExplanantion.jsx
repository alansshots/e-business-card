import React from 'react'
import { motion } from 'framer-motion';

function HomeExplanantion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='flex flex-col items-center justify-center'
    >
      <h1 className='text-[#013941] mt-10 text-6xl'>WHY DO I NEED ONE?</h1>
      <p className='max-w-4xl my-5 text-2xl'>Speed up contact sharing with ease. A digital card offers convenience, sustainability, affordability, customization, and seamless integration with digital tools, enhancing networking effectiveness.</p>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Bu5FudtXcn0?si=siJtuknhLYJ3EE-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </motion.div>
  )
}

export default HomeExplanantion
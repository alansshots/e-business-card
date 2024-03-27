import React from 'react'

function HomeSteps() {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
        <h1 className='text-[#013941] mt-10 text-6xl'>HOW DOES IT WORK</h1>
        <div className='w-4/5 flex flex-row items-center justify-between mt-10'>
            <div className='bg-[#EFFAF5] flex flex-col items-start w-[300px] h-[180px] rounded-xl'>
                <div className='bg-[#013941] text-white w-16 h-16 rounded-xl flex flex-center justify-center items-center text-5xl'><span>1</span></div>
                <p className='mx-4 my-4 w-4/5 text-md font-semibold text-left'>Set up your free digital business card online here or through our mobile app.</p>
            </div>
            <div className='bg-[#EFFAF5] flex flex-col items-start w-[300px] h-[180px] rounded-xl'>
                <div className='bg-[#013941] text-white w-16 h-16 rounded-xl flex flex-center justify-center items-center text-5xl'><span>2</span></div>
                <p className='mx-4 my-4 w-4/5 text-md font-semibold text-left'>Share your digital business card by tapping phones or let other scan your QR code.</p>
            </div>
            <div className='bg-[#EFFAF5] flex flex-col items-start w-[300px] h-[180px] rounded-xl'>
                <div className='bg-[#013941] text-white w-16 h-16 rounded-xl flex flex-center justify-center items-center text-5xl'><span>3</span></div>
                <p className='mx-4 my-4 w-4/5 text-md font-semibold text-left'>Set up your free digital business card online here or through our mobile app</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSteps
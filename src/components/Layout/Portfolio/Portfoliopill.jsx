import React from 'react'

const Portfoliopill = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4 px-4 md:px-6 mb-6 md:mb-8'>
        <h2 className='lg:text-3xl text-2xl poppins-regular antialiased'>Curious about our work?</h2>
        <div className='flex flex-wrap gap-3 items-center'>
        <span className='lg:text-2xl font-medium px-4 py-1.5 rounded-full border-2 border-[#D4AA43] text-[#D4AA43] text-[12px] md:text-base transition-colors duration-300 cursor-pointer'>Modular Kitchens</span>
        <span className='lg:text-2xl font-medium border-2 px-4 py-1.5 border-[#D4AA43] text-[#D4AA43] text-[12px] md:text-base transition-colors duration-300 cursor-pointer '>Living Rooms</span>
        <span className='lg:text-2xl font-medium border-2 rounded-[100%] px-4 py-1.5  border-[#D4AA43] text-[#D4AA43]  text-[12px] md:text-base transition-colors duration-300 cursor-pointer  '>Bedrooms</span>
        </div>
    </div>
  )
}

export default Portfoliopill
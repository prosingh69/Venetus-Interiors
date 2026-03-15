import React from 'react'
import dark from "../assets/darkTheme.jpg"
import Hero from '../components/Hero/Hero'
import TrustBelt from '../components/TrustBelt/TrustBelt' 

const Home = () => {
  return (
    <>
      <div className='relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] flex items-center bg-[#4A5E68] my-2 border-0 rounded-[3rem] overflow-hidden'>
         <img src={dark} alt="Home Interior" className='absolute inset-0 h-full w-full object-cover z-0' />
         <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-0 bg-linear-to-l from-black/15 via-black/5 to-transparent z-10 pointer-events-none"></div>
         <div className="lg:hidden absolute inset-0 bg-linear-to-t from-black/25 via-black/5 to-transparent z-10 pointer-events-none"></div>
         
         <div className="relative z-20 h-full w-full">
            <Hero />
         </div>
      </div>

      <TrustBelt />
    </>
  )
}

export default Home
import React from 'react'
import LeadForm from '../UI/Form/LeadForm'

const Hero = () => {
    return (

        <section
            aria-labelledby="hero-heading"
            className='relative w-full h-full z-10 flex flex-col lg:flex-row items-center lg:justify-between px-6 md:px-24 py-10 lg:py-0'
        >

            <div className="w-full lg:w-1/2 mt-5 lg:-mt-20 lg:-ml-17 ">

                <h1 className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6 max-w-4xl">
                    <span className="text-sm md:text-lg md:text-nowrap font-bold lg:tracking-[0.2em] tracking-[0.15rem] uppercase text-[#D4AA43] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Trusted experts for your new home interiors
                    </span>
                    <span className="text-6xl md:text-7xl xl:text-nowrap font-bold tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                        <span className="block xl:inline whitespace-nowrap">Designed With </span>
                        <span>Zero Stress.</span>
                    </span>
                </h1>

            </div>


            <div className="w-full md:w-auto lg:flex lg:justify-end">
                <LeadForm />
            </div>

        </section>
    )
}

export default Hero
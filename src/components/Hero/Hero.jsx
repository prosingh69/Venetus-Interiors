import React from 'react'
import LeadForm from '../UI/Form/LeadForm'

const Hero = () => {
    return (

        <section
            aria-labelledby="hero-heading"
            className='absolute inset-0 z-10 flex items-center justify-between px-10 md:px-24'
        >

            <div className="w-full md:w-1/2 -mt-20 -ml-17">

                <h1 className="flex flex-col text-left mb-6 max-w-4xl">
                    <span className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase text-[#D4AA43] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Trusted experts for your new home interiors
                    </span>
                    <span className="text-5xl md:text-7xl font-bold tracking-tight text-white text-nowrap drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                        Designed With Zero Stress.
                    </span>
                </h1>

            </div>


            <div className="w-full md:w-auto flex justify-end">
                <LeadForm />
            </div>

        </section>
    )
}

export default Hero
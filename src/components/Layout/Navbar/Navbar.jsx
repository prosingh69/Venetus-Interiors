import React, { useState, useEffect } from 'react';
import NavbarLink from './NavbarLink';
import Button from '../../UI/Button/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <header className='flex justify-between lg:grid lg:grid-cols-[0.5fr_1fr_1fr] items-center rounded-full bg-[#161413] backdrop-blur-md p-2 pl-4 lg:pl-6 text-[#EBEBEB] z-40 relative border-2 border-[#394951]/70'>

                
                <div className="order-1 lg:order-3 flex items-center justify-start lg:justify-end">
                    <div className="hidden lg:block">
                        <Button
                            onClick={() => console.log("Estimate Clicked!")}
                            className="rounded-full px-6 py-2 font-bold text-[1.1rem] text-white bg-[#D4AA43] hover:bg-[#c29837] hover:shadow-[0_0_25px_rgba(212,170,67,0.3)] ubuntu-medium"
                        >
                            Get Free Estimate
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-amber-50 hover:text-white transition-colors focus:outline-none pl-1"
                    >
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="7" r="1.5" fill="currentColor" />
                            <path d="M10 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                            <path d="M10 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="5" cy="17" r="1.5" fill="currentColor" />
                            <path d="M10 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                
                <div className='order-2 lg:order-1 flex items-center lg:text-[1.2rem] text-xl font-bold text-amber-50 text-nowrap pr-1 lg:pr-0'>
                    <img src="null" alt="Logo" className=" w-8 h-8 mr-2 ml-2 lg:ml-1 lg:mr-0 lg:w-auto lg:h-auto order-2 lg:order-1 " />
                    <h1 className=' flex items-center gap-1 h-8 leading-0 border-r-2 lg:border-r-0 lg:border-l-2 border-[#394951]/80 lg:pl-3 pr-2 lg:ml-2 order-1 lg:order-2'>
                        <span className="text-[#D4AA43]">Venetus </span> <span className="text-white">Interiors</span>
                    </h1>
                </div>

                
                <div className="hidden lg:block lg:order-2">
                    <NavbarLink isMobile={false} />
                </div>
            </header>

         
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            
            <div
                className={`fixed top-0 left-0 h-dvh w-65 sm:w-[320px] bg-[#12100E]/90 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col p-6 pb-10 border-r border-white/5 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end mb-4 shrink-0">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-amber-50 hover:text-white focus:outline-none transition-transform hover:scale-110"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="grow overflow-y-auto flex flex-col items-center pt-8">
                    <NavbarLink isMobile={true} closeMenu={() => setIsOpen(false)} />
                </div>

                <div className="w-full mt-auto pt-4 flex justify-center shrink-0">
                    <Button
                        onClick={() => console.log("Estimate Clicked!")}
                        className="rounded-full px-6 py-2 font-bold text-[1.1rem] text-black bg-[#D4AA43] hover:bg-[#c29837] hover:shadow-[0_0_25px_rgba(212,170,67,0.6)] ubuntu-medium w-full"
                    >
                        Get Free Estimate
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
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

            <header className='flex justify-between lg:grid lg:grid-cols-[0.5fr_1fr_1fr] items-center h-[3.7rem] rounded-full bg-[#161413] backdrop-blur-md px-4 lg:px-1 text-[#EBEBEB] z-40 relative border-2 border-[#394951]/70'>

                <div className='flex items-center lg:text-[1.1rem] font-bold text-amber-50 text-nowrap'>
                    <img src="null" alt="Logo" className="w-8 h-8 mr-2 lg:mr-0 lg:w-auto lg:h-auto" />
                    <h1 className='border-l-2 border-[#394951]/80 pl-3 ml-2'>
                        <span className="text-[#D4AA43]">Venetus</span> <span className="text-white">Interiors</span>
                    </h1>
                </div>

                <div className="hidden lg:block">
                    <NavbarLink isMobile={false} />
                </div>


                <div className="flex items-center justify-end lg:pr-2">

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
                        className="lg:hidden text-amber-50 hover:text-white transition-colors focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>


            <div
                className={`fixed top-0 right-0 h-dvh w-65 sm:w-[320px] bg-[#12100E]/90 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col p-6 pb-10 border-l border-white/5 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
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
import React from 'react';
import Button from '../Button/Button';

const LeadForm = () => {
    return (

        <div className="w-full lg:max-w-md p-6 lg:mt-10 lg:mb-6 mt-5 rounded-2xl bg-black/40 backdrop-blur-md border border-[#394951]/60 shadow-2xl">

            <h3 className="text-2xl font-bold text-white mb-2 text-nowrap">
                Book Your Free Site Visit
            </h3>
            <p className="text-gray-300 text-sm mb-6">
                Let our experts visit your site and bring your vision to life.
            </p>

            <form className="flex flex-col gap-4">


                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-[#394951]/30 border border-[#394951]/60 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AA43] focus:bg-[#394951]/50 transition-all duration-300"
                    required
                />

                <input
                    type="tel"
                    placeholder="WhatsApp / Phone Number"
                    className="w-full px-5 py-3.5 rounded-xl bg-[#394951]/30 border border-[#394951]/60 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AA43] focus:bg-[#394951]/50 transition-all duration-300"
                    required
                />

                <div className="relative">
                    <select
                        className="w-full px-5 py-3.5 rounded-xl bg-[#394951]/30 border border-[#394951]/60 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AA43] focus:bg-[#394951]/50 transition-all duration-300 appearance-none cursor-pointer"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled className="bg-[#1a1a1a] text-gray-400">Select Property Type</option>
                        <option value="2bhk" className="bg-[#1a1a1a] text-white">2 BHK</option>
                        <option value="3bhk" className="bg-[#1a1a1a] text-white">3 BHK</option>
                        <option value="villa" className="bg-[#1a1a1a] text-white">Villa</option>
                        <option value="commercial" className="bg-[#1a1a1a] text-white">Commercial Space</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Site Location (e.g., Indiranagar)"
                    className="w-full px-5 py-3.5 rounded-xl bg-[#394951]/30 border border-[#394951]/60 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AA43] focus:bg-[#394951]/50 transition-all duration-300"
                    required
                />

                <Button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-[#D4AA43] text-black text-[1.3rem] hover:bg-[#c29837] hover:shadow-[0_0_20px_rgba(212,170,67,0.2)] font-bold"
                >
                    Book Free Site Visit
                </Button>

                <p className="text-center text-xs text-gray-400 mt-1 flex items-center justify-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    100% Privacy Guaranteed. No spam.
                </p>

            </form>
        </div>
    );
};

export default LeadForm;
import React, { useState, useRef } from 'react';
import Button from '../Button/Button';


const PortfolioCard = ({ Title, Para, BeforeImg, AfterImg, reverse = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const xPos = clientX - containerRect.left;
    const newPosition = Math.max(0, Math.min(100, (xPos / containerRect.width) * 100));
    setSliderPosition(newPosition);
  };

  const showBeforeLabel = sliderPosition > 10;
  const showAfterLabel = sliderPosition < 90;

  return (
    
    <div className={` flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} max-w-full mx-auto border border-neutral-800 rounded-[48px] md:rounded-[60px] p-4 md:p-7 bg-[#161616] gap-5 shadow-2xl font-sans mb-8`}>

      <div className="order-2 lg:order-1 flex flex-col shrink-0 w-full lg:w-87.5 gap-3 lg:gap-5">

        <div className="border border-neutral-800 bg-[#121212] rounded-[20px] md:rounded-[32px] py-4 flex items-center justify-center h-auto lg:h-24 transition-colors hover:border-neutral-700">
          <h2 className="text-2xl font-bold whitespace-nowrap text-white tracking-wide poppins-bold">
            {Title}
          </h2>
        </div>

        <div className="border border-neutral-800 bg-[#121212] rounded-[20px] md:rounded-[32px] p-6 flex-1 transition-colors hover:border-neutral-700">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {Para}
          </p>
        </div>

        <Button
          onClick={() => console.log("Estimate Clicked!")}
          className="w-full rounded-[20px] md:rounded-[22px] py-4 md:py-5 font-bold text-[1.1rem] text-black md:text-white bg-[#D4AA43] hover:bg-[#c29837] hover:shadow-[0_0_25px_rgba(212,170,67,0.6)] transition-all duration-300 ubuntu-medium"
        >
          Explore Full Portfolio
        </Button>
      </div>

      
      <div className=" order-1 lg:order-2 w-full flex-1 relative rounded-[20px] md:rounded-[32px] overflow-hidden min-h-75 lg:min-h-125 cursor-ew-resize group select-none touch-none border border-neutral-800"
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={(e) => handleMove(e)}
      >
        <img
          src={AfterImg}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none "
          draggable="false"
        />

        <img
          src={BeforeImg}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable="false"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

       
        <div
          className={`absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-bold tracking-widest z-20 shadow-lg transition-opacity duration-300 ${showBeforeLabel ? 'opacity-100' : 'opacity-0'}`}
        >
          BEFORE
        </div>

      
        <div
          className={`absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-black text-xs font-bold tracking-widest z-20 shadow-lg transition-opacity duration-300 ${showAfterLabel ? 'opacity-100' : 'opacity-0'}`}
        >
          AFTER
        </div>

      
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 flex items-center justify-center pointer-events-none z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-neutral-200">
            <svg className="w-6 h-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PortfolioCard;
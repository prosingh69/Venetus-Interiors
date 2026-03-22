import React from 'react';
import AnimatedCounter from './AnimatedCounter'; // Make sure path is correct

const TrustStats = () => {
  return (
    <div className="pt-15 pb-30 ">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-y-12 gap-x-4 lg:gap-x-8">
        {/* Stat 1 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-xl md:text-2xl font-bold ubuntu-medium text-white">Happy Families</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1 ">
            <AnimatedCounter endValue={50} suffix="+" duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">homes delivered</span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className=" text-xl md:text-2xl font-bold ubuntu-medium text-white">Project Delivery</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1 ">
            <AnimatedCounter endValue={45} duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">days average</span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-xl md:text-2xl font-bold ubuntu-medium text-white">Quality Checks</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1 ">
            <AnimatedCounter endValue={100} suffix="+" duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">per project</span>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-xl md:text-2xl font-bold ubuntu-medium text-white whitespace-nowrap md:whitespace-pre-wrap">Material Warranty</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1 ">
            <AnimatedCounter endValue={10} duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">years guaranteed</span>
        </div>

        {/* Stat 5 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-xl md:text-2xl font-bold ubuntu-medium text-white">Design Experts</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1 ">
             <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">professionals</span>
        </div>

        {/* Stat 6 */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-xl md:text-2xl font-bold ubuntu-medium text-white">Pricing Model</span>
          <span className="text-6xl md:text-7xl font-thin text-white tracking-tight mb-1">
             <AnimatedCounter endValue={0} duration={2000} />
          </span>
          <span className="text-[18px] ubuntu-medium text-gray-400">hidden charges</span>
        </div>

      </div>
    </div>
  );
};

export default TrustStats;
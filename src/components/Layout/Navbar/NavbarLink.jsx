import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ isMobile, closeMenu }) => {

  const desktopClasses = 'flex justify-start gap-9 text-[1.05rem] font-medium items-center ubuntu-medium text-nowrap text-[#EBEBEB]';
  const mobileClasses = 'flex flex-col w-full gap-10 text-xl font-medium ubuntu-medium text-[#EBEBEB] mt-10';
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Our Process', path: '/process' }
  ];

  return (
    <nav className={isMobile ? mobileClasses : desktopClasses}>
      {navItems.map((item, index) => (
        <NavLink 
          key={index}
          to={item.path} 
          onClick={closeMenu} 
          className={`group flex overflow-hidden cursor-pointer ${isMobile ? 'justify-center w-full' : ''}`}
        >

          <div className="relative inline-flex flex-col">
            
            <span className="transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full opacity-60">
              {item.label}
            </span>
            
            <span className="absolute top-full left-0 w-full text-center transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full opacity-100 text-[#D4AA43]">
              {item.label}
            </span>
            
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavbarLink;
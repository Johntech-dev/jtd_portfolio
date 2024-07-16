'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className='flex font-[outfit] text-[18px] justify-between items-center px-4 md:px-8'>
      <div>
        <img src='logo.png' className=' h-32 w-32' alt='Logo'/>
      </div>
      <div className='md:flex hidden gap-8 items-center'>
        <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>About</a>
        <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Experience</a>
        <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Projects</a>
        <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Contact</a>
      </div>
      
      <div className='flex items-center md:hidden'>
        <FiMenu onClick={() => setMenu(true)} className='text-white cursor-pointer' />
      </div>

      {/* nav responsiveness start */}
      {menu && (
        <div className={clsx('fixed h-full w-[60%] lg:hidden bg-gradient-to-tr from-[#19376D] to-[#19376D] backdrop-blur-sm top-0 left-0 z-50 transform transition-transform',
          menu && 'translate-x-0'
        )}>
          <div className='flex flex-row items-center justify-between px-5 py-5'>
            <h2 className='text-white'>JTD</h2>
            <IoClose onClick={() => setMenu(false)} className='text-white cursor-pointer' />
          </div>
          <div className='flex flex-col gap-8 items-center'>
            <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>About</a>
            <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Experience</a>
            <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Projects</a>
            <a className='text-white hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>Contact</a>
          </div>
        </div>
      )}
      {/* end of responsiveness */}
    </div>
  );
};

export default Navbar;

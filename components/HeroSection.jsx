'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <div className='pt-16 mx-auto flex flex-col md:flex-row items-center gap-9 md:gap-[400px] relative'>
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
          className='z-10'
        >
          <h1 className='text-[24px] md:text-[30px] font-[Roboto] font-bold text-white text-center md:text-left'>
            Hello, I'm Akinmolayan John
          </h1>
          <TypeAnimation
            className='text-white text-center md:text-left'
            sequence={[
              'A Frontend Web Developer',
              1000,
              'A Mobile App Developer',
              1000,
              'A Web Designer',
              1000,
              'A WordPress Developer',
              1000,
              'A JavaScript Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'block' }}
            repeat={Infinity}
          />
          <div className='mt-10 gap-8 flex flex-row md:flex-row justify-center md:justify-start'>
            <button className='rounded-md text-white hover:text-[#576CBC] hover:bg-white bg-[#576CBC] p-2'>
              <a href='mailto:johnayomide50@gmail.com'>
                Contact Me
              </a>
            </button>

            <button className='rounded-md text-[#576CBC] hover:bg-[#576CBC] hover:text-white bg-[#fff] p-2'>
              Download Resume
            </button>
          </div>
          <div className='flex items-center justify-center md:justify-start flex-row gap-6 mt-5'>
            <a href='https://x.com/Johntechdev' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='text-white h-6 w-6' />
            </a>
            <a href='https://github.com/Johntech-dev' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-white h-6 w-6' />
            </a>
            <a href='https://www.linkedin.com/in/Johntech-dev/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-white h-6 w-6' />
            </a>
            <a href='https://www.instagram.com/johntechdev?igsh=MTE2djE0cWJ1YTBvOQ%3D%3D&utm_source=qr' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-white h-6 w-6' />
            </a>
            <a href='mailto:johnayomide50@gmail.com' target='_blank' rel='noopener noreferrer'>
              <SiGmail className='text-white h-6 w-6' />
            </a>
          </div>
        </motion.div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 200 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className='z-10'>
          <img src='john.jpg' alt="John's portrait" className='w-48 h-48 md:w-64 md:h-64 rounded-full border border-white object-cover' />
        </motion.div>
        <div className="absolute w-[40vw] h-[40vw] md:w-[30vw] md:h-[20vw] min-w-[200px] md:min-w-[200px] top-[100px] md:top-[1px] left-[-10vw] rounded-full bg-blue-900 bg-opacity-70 blur-xl z-0"></div>
        <div className="absolute w-[70vw] h-[50vw] md:w-[30vw] md:h-[20vw] min-w-[250px] md:min-w-[250px] top-[200px] md:top-[146px] right-[-2vw] md:right-2 rounded-full bg-blue-900 bg-opacity-70 blur-xl z-0"></div>
      </div>
    </>
  );
}

export default HeroSection;

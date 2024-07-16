'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ExperienceContainer = () => {
  return (
   <>
   <div className='py-8'>
    <h2 className='text-[25px] text-white'>Work Experience</h2>
   </div>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full md:w-1/2 h-[50%] border-[2px] border-blue-900 cursor-pointer py-8"
      >
        <SwiperSlide className='px-8 py-8 p-10'>
            <div className='text-white'>
            <h2 className='font-bold md:text-[20px] text-[12px]'>Frontend Intern At Norak Technolgies</h2>
            <div className='bg-blue-900 md:w-[50%] w-[50%] rounded-md border border-none p-0 justify-center'>
            <h3 className='md:text-[15px] text-[10px] mt-2'>August 2022 -November 2022</h3>
            </div>
            <p className='text-[10px] mt-2'>I worked as a frontend intern at Norak Technologies, where I gained hands-on experience in developing and maintaining web applications. My responsibilities included collaborating with senior developers to implement UI designs, debugging and troubleshooting code, and enhancing the overall user experience.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-8 py-8 p-10'>
            <div className='text-white'>
            <h2 className='font-bold md:text-[20px] text-[12px]'>Frontend Developer at Bivy community</h2>
            <div className='bg-blue-900 md:w-[50%] w-[50%] rounded-md border border-none p-0 justify-center'>
            <h3 className='md:text-[15px] text-[10px] mt-2'>August 2023 -March 2024</h3>
            </div>
            <p className='text-[10px] mt-2'>I worked as a Frontend Developer  at Bivy Community, where I gained hands-on experience in developing and maintaining web applications. My responsibilities included collaborating with Backend developers to implement UI designs, debugging and troubleshooting code, and enhancing the overall user experience.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-8 py-8 p-10'>
            <div className='text-white'>
            <h2 className='font-bold md:text-[20px] text-[12px]'>Frontend Developer At Climate weaver</h2>
            <div className='bg-blue-900 md:w-[50%] w-[50%] rounded-md border border-none p-0 justify-center'>
            <h3 className='md:text-[15px] text-[10px] mt-2'>March 2024 -Current</h3>
            </div>
            <p className='text-[10px] mt-2'>I volunteered as a Frontend Developer at Climate Weavers, where I am contributing to the development of web applications focused on environmental sustainability. My role involved working with a team of passionate individuals to create user-friendly interfaces, implement responsive designs, and ensure the smooth functionality of the platform to promote climate awareness and action.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-8 py-8 p-10'>
            <div className='text-white'>
            <h2 className='font-bold md:text-[20px] text-[12px]'>Frontend Developer At SeekSense Canada</h2>
            <div className='bg-blue-900 md:w-[50%] w-[50%] rounded-md border border-none p-0 justify-center'>
            <h3 className='md:text-[15px] text-[10px] mt-2'>May 2024 -July 2024</h3>
            </div>
            <p className='text-[10px] mt-2'>I worked as a frontend developer at Seeksense, where I was responsible for building and optimizing responsive web applications. My role involved collaborating with design and backend teams to implement user-friendly interfaces and ensure seamless user experiences.</p>
            </div>
        </SwiperSlide>
      </Swiper>
   </>
  )
}

export default ExperienceContainer
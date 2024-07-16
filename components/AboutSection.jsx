import React from 'react';

const AboutSection = () => {
  return (
    <div className='mt-32 px-8 py-8 bg-gradient-to-r from-[#0C0C0C99] to-transparent flex flex-col items-center'>
      <h2 className='text-white text-3xl mb-8'>ABOUT</h2>
      <div className='flex flex-col md:flex-row gap-8 md:gap-44 items-center'>
        <div className='flex-shrink-0'>
          <img src='contactusbg.png' width={250} height={250} className='object-cover' alt='Contact Background' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
          <div className='flex items-center gap-4  bg-gradient-to-r from-[#A5D7E86B] from-42% rounded-md '>
            <img src='cursor.png' className='h-10 w-10' alt='Cursor Icon' />
            <div>
              <h5 className='text-white text-lg font-semibold'>Frontend Developer</h5>
              <p className='text-white text-sm mt-1'>
                I’m a front-end developer with experience in building responsive and optimized sites.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src='cursor.png' className='h-10 w-10' alt='Cursor Icon' />
            <div>
              <h5 className='text-white text-lg font-semibold'>Mobile App Developer</h5>
              <p className='text-white text-sm mt-1'>
                I specialize in creating mobile applications that are fast and efficient.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src='cursor.png' className='h-10 w-10' alt='Cursor Icon' />
            <div>
              <h5 className='text-white text-lg font-semibold'>Web Designer</h5>
              <p className='text-white text-sm mt-1'>
                I design visually appealing and user-friendly websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

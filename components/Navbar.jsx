import React from 'react'

const Navbar = () => {
  return (
  <div className='flex font-[outfit] text-[18px] justify-between items-center py-5'>
    <div>
        <h2 className='text-white'>Porfolio</h2>
    </div>
    <div className='flex gap-8'>
        <a className='text-white font-outfit hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4' href='#'>About</a>
        <a className='text-white font-outfit hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4'  href='#'>Experience</a>
        <a className='text-white font-outfit hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4'  href='#'>Projects</a>
        <a className='text-white font-outfit hover:text-[#576CBC] hover:underline decoration-2 underline-offset-4'  href='#'>Contact</a>
    </div>
  </div>
  )
}

export default Navbar

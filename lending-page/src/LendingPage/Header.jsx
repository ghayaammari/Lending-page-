import React from 'react'
import illustration from "../assets/Illustration.png"
function Header() {
  return (
    <div className='flex flex-row justify-between '>
      <div className=' flex flex-col gap-7 items-start mr-7 w-[490px]'>
        <h1 className='font-medium text-[60px]'>
        Navigating the digital landscape for success
        </h1>
        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className=' outline-none px-7 py-3 bg-black text-white  rounded-md '>
        Book a consultation
        </button>
      </div>
      <img src={illustration} alt="" className='h-[500px] w-[500px]  '/>
    </div>
  )
}

export default Header

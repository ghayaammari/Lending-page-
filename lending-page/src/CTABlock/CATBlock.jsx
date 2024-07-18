import React from 'react'
import image  from "../assets/Frame 19.png"
function CATBlock() {
  return (
    <div className='flex flex-row gap-7 justify-start items-center p-[60px] gap-[275px] h-[347px] bg-[#F3F3F3] rounded-[45px] mt-10'>
      <div className='flex flex-col gap-7 '>
        <h1 className=' font-medium text-[32px]'>Let’s make things happen</h1>
        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button className='hover:outline-none bg-black text-white px-7 py-3 rounded-md  '>Get your free proposal</button>
      </div>
      <img src={image} alt="" />
    </div>
  )
}

export default CATBlock

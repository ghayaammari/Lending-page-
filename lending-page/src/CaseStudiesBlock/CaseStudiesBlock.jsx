import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function CaseStudiesBlock() {
  return (
    <div className='flex flex-row items-start gap-[64px] py-[70px] px-[60px] bg-black rounded-[45px] '>
      <div className='flex flex-col gap-[20px] items-start'>
        <p className='text-white'>
        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </p>
        <div className='flex flex-row items-center gap-[15px]'>
          <p className='text-[#B9FF66]'>Learn more</p>
          <FiArrowUpRight className="text-[#B9FF66]" size={25} /> 

        </div>
      </div>
      <div className='h-[186px] w-[1px] bg-white '></div>
      <div className='flex flex-col gap-[20px] items-start'>
        <p className='text-white'>
        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </p>
        <div className='flex flex-row items-center gap-[15px]'>
          <p className='text-[#B9FF66]'>Learn more</p>
          <FiArrowUpRight className="text-[#B9FF66]" size={25} /> 

        </div>
      </div>
      <div className='h-[186px] w-[1px] bg-white '></div>
      <div className='flex flex-col gap-[20px] items-start'>
        <p className='text-white'>
        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </p>
        <div className='flex flex-row items-center gap-[15px]'>
          <p className='text-[#B9FF66]'>Learn more</p>
          <FiArrowUpRight className="text-[#B9FF66]" size={25} /> 

        </div>
      </div>
    </div>
  )
}

export default CaseStudiesBlock

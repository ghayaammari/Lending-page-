import React from 'react'
import icon from "../assets/Icon (2).png"
import iconw from "../assets/Icon (3).png"

import img from "../assets/tokyo-magnifier-web-search-with-elements 2.png"
import img2 from "../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"

function ServicesBlock() {
  return (
    <div className=' flex flex-col gap-[40px] '>
      <div className=' flex flex-row gap-[40px]'>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-[#F3F3F3] shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <div className='flex flex-col flex-start '>
              
              <span className='text-[30px] font-medium	 bg-[#B9FF66] rounded-[7px]'>Search engine</span> 
              <span className='text-[30px] font-medium	 bg-[#B9FF66]'>optimization</span>
            </div>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={icon} />
              <span>Learn more</span>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-[#B9FF66] shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <div className='flex flex-col flex-start '>
              <p className='text-[30px] font-medium bg-[#F3F3F3]'>Pay-per-click</p>
              <p className='text-[30px] font-medium bg-[#F3F3F3]'>advertising</p>
            </div>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={icon} />
              <span>Learn more</span>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>



      <div className=' flex flex-row gap-[40px]'>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-black shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <p className='text-[30px] font-md bg-white'>Social Media Marketing</p>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={iconw} />
              <span className='text-white'>Learn more</span>
            </div>
          </div>
          <img src={img2} alt="" />
        </div>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-[#F3F3F3] shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <p className='text-[30px] font-md bg-[#B9FF66]'>title</p>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={icon} />
              <span>Learn more</span>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className=' flex flex-row gap-[40px]'>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-[#F3F3F3] shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <p className='text-[30px] font-md bg-[#B9FF66]'>title</p>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={icon} />
              <span>Learn more</span>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
        <div className='p-[50px] flex flex-row justify-between items-center rounded-[45px] border border-[#191A23] bg-[#F3F3F3] shadow-[0_5px_0_0_#191A23] w-[600px]'>
          <div className='flex flex-col gap-[93px] justify-center items-start '>
            <p className='text-[30px] font-md bg-[#B9FF66]'>title</p>
            <div className='flex flex-row gap-[15px] items-center'>
              <img src={icon} />
              <span>Learn more</span>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default ServicesBlock

import React from 'react'
import moins from "../assets/Plus icon.png"
import plus from "../assets/Plus icon (1).png"

function ProcessBlock() {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='flex flex-col gap-[20px]  bg-[#B9FF66] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] px-[60px] py-[41px] w-full'>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>01</p>
            <p className='font-medium text-[30px]'>Conclusion</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={moins} alt="" />
          </button>  
        </div>
        <div className='h-[1px] w-full bg-black '></div>
        <div className='flex flex-col  '>
          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing </p>
          <p>efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between  shadow-[0_5px_0_0_#191A23] border border-black w-full rounded-[45px] px-[60px] py-[41px] bg-[#F3F3F3] '>
      <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>02</p>
            <p className='font-medium text-[30px]'>Research and Strategy Development</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={plus} alt="" />
          </button>  
      </div>
      <div className='flex flex-row items-center justify-between  shadow-[0_5px_0_0_#191A23] border border-black w-full rounded-[45px] px-[60px] py-[41px] bg-[#F3F3F3] '>
      <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>03</p>
            <p className='font-medium text-[30px]'>Implementation</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={plus} alt="" />
          </button>  
      </div>
      <div className='flex flex-row items-center justify-between  shadow-[0_5px_0_0_#191A23] border border-black w-full rounded-[45px] px-[60px] py-[41px] bg-[#F3F3F3] '>
      <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>04</p>
            <p className='font-medium text-[30px]'>Monitoring and Optimization</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={plus} alt="" />
          </button>  
      </div>
      <div className='flex flex-row items-center justify-between  shadow-[0_5px_0_0_#191A23] border border-black w-full rounded-[45px] px-[60px] py-[41px] bg-[#F3F3F3] '>
      <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>05</p>
            <p className='font-medium text-[30px]'>Reporting and Communication</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={plus} alt="" />
          </button>  
      </div>
      <div className='flex flex-row items-center justify-between  shadow-[0_5px_0_0_#191A23] border border-black w-full rounded-[45px] px-[60px] py-[41px] bg-[#F3F3F3] '>
      <div className='flex flex-row gap-[20px] items-center'>
            <p className='font-medium text-[60px]'>06</p>
            <p className='font-medium text-[30px]'>Continual Improvement</p>
          </div>
          <button className=' hover:outline-none '>
            <img src={plus} alt="" />
          </button>  
      </div>
      
      
    </div>
  )
}

export default ProcessBlock

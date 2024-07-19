import React from 'react'
import img from "../assets/Illustration (3).png"
function ContactBlock() {
  return (
    <div className='flex flex-row gap-[367px] px-[100px] py-[60px] w-full bg-[#F3F3F3] relative overflow-hidden'>
      <div className='flex flex-col gap-[12px] justify-start w-[496px] '>
        <div className='radios'></div>
        <div className='input-one w-full'>
          <label htmlFor="Name">Name*</label>
          <input type="text" name='Name' placeholder='Name' className='h-[45px] px-[30px] py-[18px] bg-white border border-black rounded-xl w-full'/>
        </div>
        <div className='input-one w-full'>
          <label htmlFor="Email">Email*</label>
          <input type="text" name='Email' placeholder='Email' className='h-[45px] px-[30px] py-[18px] bg-white border border-black rounded-xl w-full'/>
        </div>
        <div className='input-one w-full'>
          <label htmlFor="Message">Message*</label>
          <textarea type="text" name='Message' placeholder='Message' className='h-[350px] px-[30px] py-[18px] bg-white border border-black rounded-xl w-full'/>
        </div>
        <button className='w-full text-white self-center bg-black border rounded-[14px] py-[20px] px-[35px] '>Send Message</button>
        
      </div>
      <img src={img} alt=""  className='absolute  6top-8 -right-80'  />
    </div>
  )
}

export default ContactBlock

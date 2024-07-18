import React from 'react'
import pic1 from "../assets/Picture.png"
import socialicon from "../assets/Social icon.png"

function GroupOfCards() {
  return (
    <div className='flex flex-col gap-[40px] items-center'>
      <div className='flex flex-row gap-[40px] '>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
      </div>
      <div className='flex flex-row gap-[40px] '>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className='flex flex-col gap-[28px]  py-[40px] px-[35px] shadow-[0_5px_0_0_#191A23] border border-black rounded-[45px] w-[387px] '>
            <div className='flex flex-row  justify-between '> 
              <img src={pic1} alt="" />
              <div className='flex flex-col justify-between'>
                  <img src={socialicon} alt="linkedin-img"  className='self-end w-[34px] h-[34px]'/>
                  <div className='flex flex-col '>
                      <p className=' font-medium text-[20px]'>John Smith</p>
                      <p className='text-[18px]'>CEO and Founder</p>
                  </div>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
      </div>
      
    </div>
  )
}

export default GroupOfCards

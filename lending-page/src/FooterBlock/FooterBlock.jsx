import React from 'react'
import sci3 from "../assets/Social icon (3).png"
import sci2 from "../assets/Social icon (2).png"
import sci1 from "../assets/Social icon (1).png"
import { FaStarOfLife } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
function FooterBlock() {
  return (
    <div className=' pt-[55px] pb-[50px] px-[60px] mt-[70px] bg-black rounded-t-[45px] flex flex-col '>
        <div className=' flex flex-row items-center justify-between  text-white'>
          <div className=' flex flex-row items-center gap-5 hover:cursor-pointer'> 
            <FaStarOfLife size={40} /> 
            <span className=' text-[32px]'>Postivus</span> 
          </div>
          <div className='flex flex-row items-center desktop:block phone:hidden '>
            <a href="" className='px-7 '>About us </a>
            <a href="" className='px-7 '>Services </a>
            <a href="" className='px-7 '>Use Cases </a>
            <a href="" className='px-7 '>Pricing </a>
            <a href="" className='px-7 '>Blog </a>
          </div>
          <div className='flex flex-row items-center gap-[20px]'>
            <img src={sci1} alt="" className='h-[30px] w-[30px]' />
            <img src={sci2} alt="" className='h-[30px] w-[30px]' />
            <img src={sci3} alt="" className='h-[30px] w-[30px]' />

          </div>
          

        </div>
        <div className='mt-[66px] flex flex-row justify-between'>
          <div className='flex flex-col gap-[23px] text-white '>
            <p className='text-black font-medium rounded-[7px]'>
              <span className='bg-[#B9FF66] px-[10px] rounded-[7px]'>Contact US:</span>
            </p>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <div>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
            
          </div>
          <div className='w-[554px] py-[58px] px-[40px] flex  flex-row items-center gap-[20px] bg-[#292A32] rounded-[14px] '>
            <input className='px-[35px] py-[22px] rounded-[14px] border border-white text-white bg-[#292A32]' type="text" placeholder='Email' />
            <button className='px-[35px] py-[22px] rounded-[14px] border border-[#292A32] text-[#292A32] bg-[#B9FF66]'>Subscribe to news </button>
          </div>

        </div>
        <div className='my-[50px] h-[1px] w-full bg-white'></div>
        <div className='flex flex-row gap-[20px] text-white'>
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="" className='underline	'>Privacy Policy</a>
        </div>
    </div>
  )
}

export default FooterBlock

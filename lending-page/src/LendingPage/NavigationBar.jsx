import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";


function NavigationBar() {
  return (
    <div className=' flex flex-row items-center justify-between  mt-7  '>
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
        <a href='' className='px-7 py-3 hover:border hover:border-black hover:rounded-md'>Request a quote </a>
      </div>
      <div className='phone:block desktop:hidden'>
        <FaBars className='px-7 py-3'/>
      </div>
      

    </div>
  )
}

export default NavigationBar

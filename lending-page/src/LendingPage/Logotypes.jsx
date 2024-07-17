import React from 'react'
import lg1 from "../assets/Company logo.png"
import lg2 from "../assets/Company logo (1).png"
import lg3 from "../assets/Company logo (2).png"
import lg4 from "../assets/Company logo (3).png"
import lg5 from "../assets/Company logo (4).png"
import lg6 from "../assets/Company logo (5).png"

function Logotypes() {
  return (
    <div className='flex flex-row items-start justify-between '>
      <img src={lg1} alt="" className='h-[48px]' />
      <img src={lg2} alt="" className='h-[48px]' />
      <img src={lg3} alt="" className='h-[48px]' />
      <img src={lg4} alt="" className='h-[48px]' />
      <img src={lg5} alt="" className='h-[48px]' />
      <img src={lg6} alt="" className='h-[48px]' />
    </div>
  )
}

export default Logotypes

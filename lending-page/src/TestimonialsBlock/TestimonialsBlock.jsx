import React, { useState } from 'react'
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const testimanols = [
  {"msg": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", 
    "writer":"John Smith", 
    "job": "Marketing Director at XYZ Corp"
  },
  {"msg": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", 
    "writer":"John Smith", 
    "job": "Marketing Director at XYZ Corp"
  },
  {"msg": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", 
    "writer":"John Smith", 
    "job": "Marketing Director at XYZ Corp"
  },
  {"msg": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", 
    "writer":"John Smith", 
    "job": "Marketing Director at XYZ Corp"
  },
  {"msg": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", 
    "writer":"John Smith", 
    "job": "Marketing Director at XYZ Corp"
  },
]
function TestimonialsBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimanols.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimanols.length) % testimanols.length);
  };
  
  return (
    <div className=' w-full  bg-black py-[84px] rounded-[45px] flex flex-col items-center gap-[84px] overflow-x-hidden '>
      <div className=' flex flex-row gap-[20px] '>
        <div className='  flex flex-col items-center '>
          <div className=''>
            <div className=' h-auto w-[600px] border-[2px] border-[#B9FF66] bg-black rounded-[45px] p-[40px] text-white'>
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            </div>
            <div className='relative h-[40px] w-[40px]  border-b-[#B9FF66] border-b-[2px] border-r-[#B9FF66] border-r-[2px]  bg-black rotate-45	left-20 bottom-5'> </div>


          </div>
          <div className='relative right-20 flex flex-col justify-start'>
            <p className='font-medium text-[#B9FF66]'>John Smith</p>
            <p className='text-white'>Marketing Director at XYZ Corp</p>
          </div>
        </div>
        <div className='  flex flex-col items-center '>
          <div className=''>
            <div className=' h-auto w-[600px] border-[2px] border-[#B9FF66] bg-black rounded-[45px] p-[40px] text-white'>
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            </div>
            <div className='relative h-[40px] w-[40px]  border-b-[#B9FF66] border-b-[2px] border-r-[#B9FF66] border-r-[2px]  bg-black rotate-45	left-20 bottom-5'> </div>


          </div>
          <div className='relative right-20 flex flex-col justify-start'>
            <p className='font-medium text-[#B9FF66]'>John Smith</p>
            <p className='text-white'>Marketing Director at XYZ Corp</p>
          </div>
        </div>
        <div className='  flex flex-col items-center '>
          <div className=''>
            <div className=' h-auto w-[600px] border-[2px] border-[#B9FF66] bg-black rounded-[45px] p-[40px] text-white'>
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            </div>
            <div className='relative h-[40px] w-[40px]  border-b-[#B9FF66] border-b-[2px] border-r-[#B9FF66] border-r-[2px]  bg-black rotate-45	left-20 bottom-5'> </div>


          </div>
          <div className='relative right-20 flex flex-col justify-start'>
            <p className='font-medium text-[#B9FF66]'>John Smith</p>
            <p className='text-white'>Marketing Director at XYZ Corp</p>
          </div>
        </div>
        
      </div>
      <div className='text-white flex flex-row items-center justify-between w-[564px] '> 
      <HiArrowSmLeft size={30} />
        <p>. . . . </p>
      <HiArrowSmRight size={30} />

      </div>
      
    </div>
  )
}

export default TestimonialsBlock

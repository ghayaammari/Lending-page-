import CaseStudiesBlock from "./CaseStudiesBlock/CaseStudiesBlock"
import CATBlock from "./CTABlock/CATBlock"
import GroupOfCards from "./GroupOfCards/GroupOfCards"
import LandingPage from "./LendingPage/LandingPage"
import ProcessBlock from "./ProcessBlock/ProcessBlock"
import ServicesBlock from "./ServicesBlock/ServicesBlock"

function App() {

  return ( 
    <div className="flex flex-col  px-[100px] ">
      <LandingPage/>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Services</p>
        <div className="flex flex-col gap-0">
        <p className="text-[18px]">At our digital marketing agency, we offer a range of services to </p><p className="text-[18px]">help businesses grow and succeed online. These services include:</p>
        </div>
      </div>
      <ServicesBlock/>
      <CATBlock/>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Case Studies</p>
        <div className="flex flex-col gap-0">
        <p className="text-[18px]">Explore Real-Life Examples of Our Proven Digital Marketing </p><p className="text-[18px]">Success through Our Case Studies</p>
        </div>
      </div>
      <CaseStudiesBlock/>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Our Working Process </p>
        <div className="flex flex-col gap-0">
        <p className="text-[18px]">Step-by-Step Guide to Achieving</p>
        <p className="text-[18px]">Your Business Goals</p>
        </div>
      </div>
      <ProcessBlock/>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Team</p>
        <div className="flex flex-col gap-0">
        <p className="text-[18px]">Meet the skilled and experienced team behind our </p>
        <p className="text-[18px]">successful digital marketing strategies</p>
        </div>
      </div>
      <GroupOfCards/>
      <button className=" flex items-center bg-black text-white hover:outline-none rounded-[14px] self-end  gap-[40px] h-[51px] mt-[30px] py-[20px] px-[35px] ">
      See all team
      </button>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Testimonials</p>
        <div className="flex flex-col gap-0">
        <p className="text-[18px]">Hear from Our Satisfied Clients: Read Our Testimonials </p>
        <p className="text-[18px]">to Learn More about Our Digital Marketing Services</p>
        </div>
      </div>
    </div>  
  )
}

export default App

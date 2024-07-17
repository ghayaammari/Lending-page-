import LandingPage from "./LendingPage/LandingPage"
import ServicesBlock from "./ServicesBlock/ServicesBlock"

function App() {

  return ( 
    <div className="flex flex-col  px-[100px] ">
      <LandingPage/>
      <div className="flex flex-row items-start  gap-[40px] h-[51px] my-[70px]">
        <p className="bg-[#B9FF66] text-black font-medium text-[36px]">Services</p>
        <p className="text-[18px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <ServicesBlock/>
    </div>  
  )
}

export default App

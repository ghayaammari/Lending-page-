import React from 'react'
import NavigationBar from './NavigationBar'
import Header from './Header'
import Logotypes from './Logotypes'

function LandingPage() {
  return (
    <div className='flex flex-col gap-[40px]'>
      <NavigationBar/>
      <Header/>
      <Logotypes/>
    </div>
  )
}

export default LandingPage

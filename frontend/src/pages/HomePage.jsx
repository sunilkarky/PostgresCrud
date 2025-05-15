import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap ">
      <Card />
      <Card />
      <Card />
   
      </div>
        
    </div>
  )
}

export default HomePage

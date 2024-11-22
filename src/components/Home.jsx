import React from 'react'
import Foodi from "./Foodi";

import "./home.css"
import Restaurant from './Restaurant';
const Home = () => {
  
  return (
    
      <div className='homee'>
      <h1 className='res'>What's on your mind?</h1>
      <div className="foodi">
        <Foodi/>
      </div>
      <h1 className='res'>Restaurants</h1>
      <Restaurant/>
    </div>
    
   
    
  )
}

export default Home
import React from 'react'
// import './Home.css'
import demo from '../assets/demo.jpg'
function Home() {
  return (
    <>
    <div id='home' className='grid text-center h-[100vh] '>
    <h1 id='intro' className='lg:text-[150px] md:text-8xl text-6xl font-bold text-white mt-32 animate-bounce '>HII I'M ROHIT</h1>

      <img id='image' className='lg:h-96 lg:w-96 md:h-80 md:w-80 h-60 w-60 rounded-full md:ml-[40%] ml-[12%] -mt-[30px]  md:-mt-36 animate-bounce ' src={demo} 
      alt="demo" />
    
    <h1 id='profetion' className='lg:text-[150px] md:text-8xl text-6xl font-bold text-white md:-mt-40 -mt-[50px] animate-pulse'>WEB DEVELOPER</h1>
  </div>
 
  </>
  )
}

export default Home
import React from 'react'
import thanks from "../assets/thank you.png"

function Thanks() {
  return (
  <div className='lg:h-[150vh] md:h-[130vh] h-[120%] w-[100%] bg-lime-100 sticky top-1'>
    <div className=' grid justify-center items-center'>
      <img className='h-80 w-80 lg:ml-52 md:m-32 ml-0' src={thanks} alt="thanks" />
      <h1 className='lg:text-7xl md:text-5xl text-3xl text-center lg:-mt-14 md:-mt-64 -mt-4 text-green-950 font-bold'>Thank You, For Visite</h1>
    </div>
    <div className='absolute bottom-0  left-0 w-[100%] h-[500px] leading-[0] overflow-hidden rotate-180'>
        <svg data-name="Layer 1" className='h-[400px] w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path id='curve' d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="relative block  w-[calc(100%+1.3px)] fill-pink-400"></path>
          <text font-size="50" fontWeight={1000}   dy={55} rotate={180} fill="white" font-family="Arial" letter-spacing="0.3">
          <textPath href="#curve" startOffset="18%"> EROM EM DEEF  </textPath>
          </text>
        </svg>
      </div>
  </div>
  )
}

export default Thanks
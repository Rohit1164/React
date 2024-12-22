import React from 'react'
import Frontend from "../assets/Frontend.png"
import programming from "../assets/programming.png"
import Framwork from "../assets/Framwork.png"

function Skill() {
  return (
    <>
    <div className='lg:h-[200vh] md:h-[200vh] h-[270%] w-[100%] bg-fuchsia-200 sticky top-1'>
    
    <h1 className='text-7xl pt-20 font-bold text-center text-green-950'>Skills</h1> 
    <div class="md:flex md:justify-evenly grid items-center md:pl-10  pl-32  md:py-40 lg:py-80  ">
      <div className='lg:py-5 md:py-16 md:80 h-60 w-72 pt-10'>
        <img src={Frontend} alt="Frontend" className='md:h-60 h-52' />
        <span className='text-3xl font-bold text-green-950'>Front End</span> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quibusdam.</p>
        <button className='h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-fuchsia-200'>VIEW </button>
      </div>
      <div className='lg:py-5 md:py-16 md:80 h-60 w-72 pt-52'> 
        <img src={Framwork} alt="Framwork" className='md:h-60 h-52' />
        <span className='text-3xl font-bold text-green-950'>Framworks </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,  repellendus?</p>
        <button className='h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-fuchsia-200'>VIEW</button>
      </div>
      <div className='lg:py-5 md:py-16 md:80 h-60 w-72 pt-96'>
        <img src={programming} alt="programming" className='md:h-60 h-52' />
        <span className='text-3xl font-bold text-green-950'>Programming Language</span> 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, numquam.</p>
        <button className='h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-fuchsia-200'>VIEW </button>
      </div>
      </div>

      <div className='absolute bottom-0  left-0 w-[100%] h-[500px] leading-[0] overflow-hidden rotate-180'>
        <svg data-name="Layer 1" className='h-[400px] w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path id='curve' d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="relative block  w-[calc(100%+1.3px)] fill-green-950"></path>
          <text font-size="50" fontWeight={1000}   dy={55} rotate={180} fill="white" font-family="Arial" letter-spacing="0.3">
          <textPath href="#curve" startOffset="18%">TCEJORP INIM </textPath>
          </text>
        </svg>
      </div>
    </div>
    
    </>
  )
}

export default Skill
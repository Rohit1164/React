import React from 'react'
import boy from '../assets/Boy.png'
// import boy from '../About/Component/assets/Boy.png'

function About() {
  return (
    <section className='bg-pink-400 h-[150%]'>
      <div className=' relative top-0  left-0 w-full overflow-hidden'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-green-950"></path>
        </svg>
    </div>
    <div class="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[100vh] h-[100%] bg-pink-400 sticky top-1">
    <div class=" w-96  rounded-md mt-12 h-80">
    <h1 className='text-7xl font-bold font-mono text-green-950'>Rohit</h1>
    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Quam fugiat
      porro aliquid. Necessitatibus nisi facere,
      sunt rerum expedita alias neque, aut ut voluptas molestias adipisci voluptatibus inventore? Inventore, molestias
      magnam.
    </p>  
    <button className='h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-pink-400'>VIEW RESUME</button>
    </div>
      <img className='rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl' src={boy} alt="boy"/>
     
      </div>
      
    </section>
  )
}

export default About
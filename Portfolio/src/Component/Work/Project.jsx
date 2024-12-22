import React from 'react'
import ProjectDemo from '../assets/ProjectDemo.png'

function Project() {
  return (
    <>
    <div class="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[100vh] h-[150%] bg-green-400 sticky top-1">
      <div class=" w-96 rounded-md h-80 mt-12">
      <h1 className='text-7xl font-bold font-mono text-green-950'>Project</h1>
      <p className=" text-xl">
        Lorem ipsum    dolor, sit amet consectetur
        adipisicing elit. Quam fugiat
        porro aliquid. Necessitatibus nisi facere,
        sunt rerum expedita alias neque, aut ut voluptas molestias adipisci   voluptatibus inventore? Inventore, molestias
        magnam.
        </p>
        <button className='h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-green-400'>VIEW</button>
      </div>
        <img className='rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl' src={ProjectDemo} alt="boy"/>
    </div>
    </>
  )
}

export default Project
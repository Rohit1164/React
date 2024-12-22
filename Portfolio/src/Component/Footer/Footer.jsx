import React from 'react'

function Footer() {
  return (
    <div className='lg:h-[90vh] h-full w-full bg-pink-400'>
      <div className="grid justify-center items-center gap-3 pt-0 pb-28 ">
        <input className='h-16 w-96 border-none shadow-green-950 shadow-2xl  rounded-md p-4 text-xl' type="text" />
        <textarea className='w-96 h-60 rounded-md mt-8 mb-8 p-4 text-xl shadow-green-950 shadow-2xl border-none' name="" id=""></textarea>
        <button className='bg-green-950 w-96 h-16 text-white text-2xl rounded-md font-bold border-none'>Send Masssage on Gmail </button>
      </div>
      <hr className=' bg-gray-700' />
      <div className="lg:flex grid justify-evenly lg:pt-10">
        <div className="flex justify-evenly gap-10 pt-6 text-2xl">
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin "></i>
          <i class="fa-brands fa-youtube "></i>
        </div>
        <div className="flex justify-evenly p-6 gap-6 text-2xl">
        <p>@PortFolio 2024</p> 
        <p>|</p>
        <p>DESIGNED BY ME</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
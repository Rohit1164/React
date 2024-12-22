import React, { useState } from 'react'
function TextArea() {
// const [text, setText] = useState("ehterscjkdjfvdj")

  return (
  <>
    <div>
      <textarea className='w-[80%] bg-blue-800 ml-[10%] mt-10 rounded-lg h-72 text-white p-10'></textarea>
    </div>
    <div className='text-white text-xl ml-[10%] mt-10'>Word:{langht}</div>
    <div className='text-white text-xl ml-[10%] mt-10'>Charactors:</div>
  </>
  )
}

export default TextArea
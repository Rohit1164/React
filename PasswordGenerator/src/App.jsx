import { useState,useEffect,useCallback,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState('')

  const passwordRef=useRef()

  const PasswordGenerator= useCallback(()=>{
    let password=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (number) str+="0123456789"
    if (character) str+='!@#$%^&*()'

    for (let i = 0; i <= length; i++) {
      const char=Math.floor(Math.random()*str.length+1)
      password+=str.charAt(char);  
      console.log(password)    
    }
    setPassword(password)
  },[length,number,character])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => {
    PasswordGenerator()
  }, [number,character,length])
  
  return (
    <div className='bg-gray-800 shadow-gray-700 shadow-lg h-80 w-6/12 ml-96 mt-36 rounded-2xl border-none'>
      <h1 className='text-white text-6xl pl-28 font-sans font-bold'>Password Generator</h1>
      <div className="m-10">
        <input
         type="text"
         ref={passwordRef}
         value={Password}
         readOnly
         className='w-10/12 h-14
         text-xl pl-10 rounded-l-3xl'
         />
         <button
         className='w-20 h-14 bg-blue-700 text-xl text-white rounded-r-3xl border-none'
         onClick={copyPassword}
         >copy</button>
      </div>
      <div className='text-white text-xl pl-28 flex'>
        <div className="p-4">
          <input 
          type="range"
          min={5}
          max={99}
          valued={length}
          onChange={(e)=> {setlength(e.target.value)}}
          />
          <label> :length({length})</label>
        </div>
        <div className="p-4">
          <input
          type="checkbox"
          defaultChecked={character}
          onChange={(e)=>{setCharacter((prev)=>!prev)}}
          />
          <label> :Charecter</label>
         </div>
         <div className="p-4">
          <input 
          type="checkbox"
          defaultChecked={number}
          onChange={(e)=>{setNumber((prev)=>!prev)}}
          />
          <label> :Number</label>
        </div>
      </div>
    </div>
  )
}

export default App

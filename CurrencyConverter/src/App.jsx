import { useState } from 'react'
import index from './hooks/useCurrnecyInfo'
import Input from './Component/InputBox'

import "./App.css";

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to,setTO]=useState('inr')
  const [convertedAmount,setconvertedAmount]=useState(0)

  const currncyInfo=index(from)

  const options=Object.keys(currncyInfo)

  function swap() {
    setfrom(to)
    setTO(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }

  function convert() {
    setconvertedAmount(amount*currncyInfo[to])
  }

  return (
    <div className='shadow-gray-700 shadow-2xl w-1/3 mt-[15%] ml-[33%] rounded-md'>
      <div className='m-10 p-6'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
          }} >
          <div>
            <Input
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setamount(currency)}
            selectedCurrency={from}
            onAmountChange={(amount)=>setamount(amount)}
            />
          </div>
          <div className=''>
            <button onClick={swap} className='bg-blue-700 text-white rounded-lg h-10 w-20 ml-32 -mt-4'>Swip</button>
          </div>
          <div className="w-full  mb-4 -mt-3">
          <Input
            label="To"
            amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
          />
          </div>
        <button
        type='submit'
        className='bg-blue-600 text-white w-full h-12 rounded-lg'
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
  )
}

export default App
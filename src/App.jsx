import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {});

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center '
     style={{ backgroundImage: `url(https://images.pexels.com/photos/33175665/pexels-photo-33175665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}} >
      <h1>Currancy Converter</h1>
    </div>
  )
}

export default App

import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/17253861/pexels-photo-17253861.jpeg)`,
      }}
    >
      <div className="w-full">
       
        <div className="w-full max-w-md mx-auto border border-gray-200 backdrop-blur-sm bg-white/10 rounded-lg p-5 shadow-2xl">
         
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <div className="w-full mb-1">
              <InputBox
                label={from}
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(Currency) => setFrom(Currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent">
              <button 
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-4 py-1 rounded-md text-sm font-medium shadow-lg"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label={to}
                amount={convertedAmount}
                amountDisabled
                currencyOption={options}
                onCurrencyChange={(Currency) => setTo(Currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={to}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Currency;

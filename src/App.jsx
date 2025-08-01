import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

const App = () => {
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
        backgroundImage: `url(https://images.pexels.com/photos/33175665/pexels-photo-33175665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="">
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
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
            <div className="relative w-full  text-center">
              <button className="p-2 " onSubmit={swap}>
                {"swap"}
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
            <button type="submit" className="">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

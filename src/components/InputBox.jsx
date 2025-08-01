import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = `usd`,
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`bg-white/90 p-3 rounded-lg flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-gray-400 mb-2 inline-block text-sm">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-lg"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-400 mb-2 w-full text-sm">CURRENCY TYPE</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOption.map((Currency) => (
            <option key={Currency} value={Currency}>
              {Currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

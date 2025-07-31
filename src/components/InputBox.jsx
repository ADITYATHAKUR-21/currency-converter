import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = `USD`,
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg flex ${onAmountChange}`}>
      <div className="">
        <label className="">${label}</label>
        <input
          type="Number"
          className=""
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            {onAmountChange && onAmountChange(Number(e.target.value))}
          }
        />
      </div>
      <p className="">Currency Type</p>
      <select
       value={onCurrencyChange}
       onChange={(e) =>
         {onCurrencyChange && onCurrencyChange(e.target.value)}}
         disabled = {currencyDisabled}
      >
        {currencyOption .map((Currency) => (
            <option key={Currency} value={Currency}>{Currency}</option>
        ))}

      </select>
      

      <div>

      </div>
    </div>
  );
};

export default InputBox;

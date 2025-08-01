import React, {useId} from "react";

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

  const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg flex ${className}`}>
      <div className="">
        <label htmlFor={id} className="">{label}</label>
        <input
          id={id}
          type="number"
          className=""
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <p className="">Currency Type</p>
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
      >
        {currencyOption.map((Currency) => (
            <option key={Currency} value={Currency}>{Currency}</option>
        ))}

      </select>
      

      <div>

      </div>
    </div>
  );
};

export default InputBox;

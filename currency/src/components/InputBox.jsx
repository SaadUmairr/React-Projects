import React, { useId } from "react";

function InputBox({
    label,
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions ,
    selectCurrency ,
    amountDisable ,
}) {
    const amountInputId = useId();
    // console.log(amountInputId);
    const currencyDisable = false;
    return (
        <>
            <div className="outerWrapper flex justify-between mt-3">
                <div className="gapContainer flex">
                    <div className="inputFieldWrapper flex  flex-col ">
                        <label className="inputFieldHeader mb-2 text-gray-500 select-none">
                            <p>{label}</p>
                        </label>
                        <div className="inputField ">
                            <input
                                id={amountInputId}
                                type="number"
                                className="w-full appearance-none m-3  p-3 text-xl  bg-transparent border border-gray-300 rounded-2xl"
                                placeholder="enter amount"
                                value={amount}
                                onChange={(e) =>
                                    onAmountChange &&
                                    onAmountChange(Number(e.target.value))
                                }
                                disabled={amountDisable}
                            />
                        </div>
                    </div>
                </div>
                <div className="optionSelectWrapper">
                    <div className="optionSelectHeader text-gray-500 mb-2 select-none">
                        <p>Currency Type</p>
                    </div>
                    <select
                        value={selectCurrency}
                        className="m-4 p-3 border border-grey-300 rounded-xl bg-white/30"
                        onChange={(e) =>
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((options) => (
                            <option key={options} value={options}>
                                {options.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default InputBox;

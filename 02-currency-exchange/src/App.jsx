import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import CurrentRate from "./components/CurrentRate";

function App() {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [fromValue, setFromValue] = useState("usd");
    const [toValue, setToValue] = useState("inr");
    const [showCurrentRate, setShowCurrentRate] = useState(false);

    const currencyData = useCurrencyInfo(fromValue);
    const optionKeys = Object.keys(currencyData);

    const swap = () => {
        setFromValue(toValue);
        setToValue(fromValue);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const conversionHandler = () => {
        setConvertedAmount((amount * currencyData[toValue]).toFixed(3));
        setShowCurrentRate(true);
        setTimeout(() => {
            setShowCurrentRate(false);
        }, 4000);
    };
    const handleEnterKey = (e) => {
        console.log("entered");
        if (e.key === "Enter") conversionHandler();
    };

    return (
        <>
            <div className="heading bg-transparent backdrop-blur-sm ">
                <h1
                    className="text-7xl text-white  m-2 text-center "
                    style={{ fontFamily: "Montserrat", fontWeight: "900" }}
                >
                    CURRENCY EXCHANGE
                </h1>
            </div>

            <div className="w-full flex justify-center items-center h-screen ">
                <div className="outer w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <InputBox
                        label="FROM"    
                        amount={amount}
                        onCurrencyChange={(currency) => setFromValue(currency)}
                        selectCurrency={fromValue || "usd"}
                        currencyOptions={optionKeys || []}
                        onAmountChange={(amount) => setAmount(amount)}
                        onKeyDown={handleEnterKey}
                    />
                    <div className="swapButton flex justify-center">
                        <button
                            className="bg-blue-700 w-24 text-white rounded p-2 m-2 active:scale-95"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <InputBox
                        label="TO"
                        amount={convertedAmount}
                        currencyOptions={optionKeys}
                        onCurrencyChange={(currency) => setToValue(currency)}
                        selectCurrency={toValue || "inr"}
                        amountDisable={true}
                        enterKey={handleEnterKey}
                    />
                    <button
                        className="flex w-full justify-center text-white bg-blue-700 rounded-lg text-xl p-3 mt-4 active:scale-95"
                        onClick={conversionHandler}
                    >
                        CONVERT {fromValue.toUpperCase()} TO{" "}
                        {toValue.toUpperCase()}
                    </button>

                    {showCurrentRate && (
                        <CurrentRate
                            from={fromValue}
                            to={toValue}
                            Rate={currencyData[toValue]}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;

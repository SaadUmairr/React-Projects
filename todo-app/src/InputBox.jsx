function InputBox({
    placeholder="add task",
    value = "",
    onInputChange,
    TabIndex,
    ButtonValue,
    submitFunction,
    enterkey,
    buttonColor="bg-black"
}) {
    
    return (
        <>
            <div className="inputField flex items-center mx-10 my-5 ">
                <input
                    type="text"
                    autoFocus
                    className="border-2 border-black rounded-lg py-4 px-8 h-16 flex-grow"
                    placeholder={placeholder}
                    value={value}
                    onKeyDown={enterkey}
                    onChange={(e) =>
                        onInputChange && onInputChange(e.target.value)
                    }
                    tabIndex={TabIndex}
                />

                <button
                    className={`text-white ${buttonColor} p-3 h-16 font-bold rounded-lg m-2 active:scale-95`}
                    tabIndex={2}
                    onClick={submitFunction}
                >
                    {ButtonValue}
                </button>
            </div>
        </>
    );
}

export default InputBox;

import React from "react";

function Button({
    ButtonText,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {ButtonText}
        </button>
    );
}

export default Button;

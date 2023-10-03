import React from "react";

function CurrentRate({ from, to, Rate, show}) {
    Rate = Number(Rate).toFixed(3);
    return (
        <div className="text-sm font-light text-center mt-3">
            <p>
                Current Rate of {from.toUpperCase()} to {to.toUpperCase()} is:{" "}
                {Rate}
            </p>
        </div>
    );
}

export default CurrentRate;

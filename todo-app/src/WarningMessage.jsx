import React, { useEffect, useState } from "react";

function WarningMessage({ t: task }) {
    const [warningMessage, setWarningMessage] = useState(null);
    useEffect(() => {
        if (task === "") {
            setWarningMessage("CAN NOT ADD EMPTY TASK");
        } else {
            setWarningMessage(null);
        }
    }, [task]);
    return <>{warningMessage}</>;
}

export default WarningMessage;

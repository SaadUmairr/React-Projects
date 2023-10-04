import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        let apiURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(apiURL)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
            .catch((error) => console.log(`ERROR: ${error}`));
    }, [currency]);
    return data;
}
    
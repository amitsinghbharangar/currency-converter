import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/36a0de0b8b2449f81df6261f/latest/${currency}`)
        .then((res)=>res.json())
            .then((res) => setdata(res.conversion_rates))
         console.log(data)
    }, [currency])
    return data
}
export default useCurrencyInfo
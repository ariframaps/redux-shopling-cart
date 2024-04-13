import { useState, useEffect } from "react"

export const useFetch = (apiPath) => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products${apiPath}?limit=100`)
            const result = await response.json()
            setData(result.products)
        }
        fetchData()
    }, [apiPath])

    return { data }
}

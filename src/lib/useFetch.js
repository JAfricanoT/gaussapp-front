'use client'

import { useEffect, useState } from "react"

export default function useFetch (endpoint, options)  {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            try {
                // Enviar los datos a la API y recibir la respuesta
                const response = await fetch(endpoint, options)
                
                // Recibir los datos desde el servidor como JSON
                const result = await response.json()
                setData(result)

                console.log(result)

            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return data
}

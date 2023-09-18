'use client'

import Image from 'next/image'
import styles from "./Page.module.css"
import { useSearchParams } from 'next/navigation'
import useFetch from '@/lib/useFetch'
import { useState } from 'react'

export default function Home() {
  const [calcular, setCalcular] = useState(false)
  const asyncuseParams = useSearchParams()

  const body = {
    apiKey: process.env.API_KEY
  }
  // console.log('DATA: ', data)

  // Convertir JSON
  const JSONbody = JSON.stringify(body)
  // console.log(JSONdata)

  // API endpoint para enviar los datos.
  const endpoint = 'http://127.0.0.1:8000/ecuacion-lineal?random=true'

  // Headers con los que se envian los datos a la API
  const options = {
    mode: 'cors',
    method: 'GET',
  }

  // const { data, loading, error } = useFetch(endpoint, options)
  const result = useFetch(endpoint, options)
  console.log(result)

  return (
    <div className={styles.wrapper}>
      <div className={styles.config}>
        <div className={styles.title}>Bienvenido 👋🏼</div>
        Seleccione una opeación en el menu
      </div>
    </div>
  )
}

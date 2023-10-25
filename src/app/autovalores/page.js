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
  const endpoint = 'http://127.0.0.1:8000/autovalores?random=true'

  // Headers con los que se envian los datos a la API
  const options = {
    mode: 'cors',
    method: 'GET',
  }

  // const { data, loading, error } = useFetch(endpoint, options)
  const result = useFetch(endpoint, options)

  return (
    <div className={styles.wrapper}>
      <div className={styles.config}>
        <div className={styles.paramTitle}>Autovalores</div>
        <div className={styles.paramWrapper}>
          {result
            ? <div className={styles.matriz}>
              {result
                ? result.problema.matriz.map((fila, i) => (
                  <div key={i} className={styles.fila}>
                    {fila.map(digito => (
                      <div key={digito} className={styles.digito}>
                        {digito.toFixed(3)}
                      </div>
                    ))}
                  </div>
                ))
                : ''}
            </div>
            : ''}
        </div>
        <button
          className={styles.calc}
          onClick={() => setCalcular(true)}>
          <div>Calcular</div>
          <div>-&gt;</div>
        </button>
      </div>
      <div className={styles.result}>
        <div className={styles.resultTitle}>Resultados</div>
        <div className={styles.resultWrapper}>
          {calcular
            ? <div className={styles.operationsWrapper}>
            <div>
              <div className={styles.resultTitle}>Solución</div>
              <div className={styles.soluciones}>
                <div className={styles.vector}>
                  <div style={styles.vectorTitle}>
                  &lambda;<sub>0</sub> :
                  </div>
                  {result
                    ? <div className={styles.digito}>
                      {result.solucion.autovalor.toFixed(3)}
                    </div>
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
            : ''}
        </div>
      </div>
    </div>
  )
}

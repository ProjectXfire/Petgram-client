import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = (API) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(API)
      .then(({ data }) => {
        setData(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return [data, loading]
}

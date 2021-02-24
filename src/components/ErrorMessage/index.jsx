import React from 'react'
import { Error } from './styles'

export const ErrorMessage = ({ message }) => {
  return (
    <Error>
      <p>{message}</p>
    </Error>
  )
}

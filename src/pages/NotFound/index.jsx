import React from 'react'
import { Link } from '@reach/router'
import { ErrorPage } from './styles'

export const NotFound = ({ error }) => {
  return (
    <ErrorPage>
      <div id='notfound'>
        <div class='notfound'>
          <div class='notfound-404'>
            <h1>Opps!</h1>
            <h2>{error}</h2>
          </div>
          <Link to='/'>Homepage</Link>
        </div>
      </div>
    </ErrorPage>
  )
}

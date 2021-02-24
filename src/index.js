import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { ContextProvider } from './GlobalContext/context'
import App from './App'
import { client } from './apollo.auth'

ReactDom.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>,
  document.getElementById('app'))

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  from,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'https://petgram-server-gb-nj4nsiuvm.vercel.app/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext(() => ({
      headers: {
        authorization: 'Bearer ' + window.sessionStorage.getItem('token')
      }
    }))
  }
  return forward(operation)
})

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.log(
        `[GraphQL error]: Message: ${message}`
      )
      window.localStorage.setItem('message', message)
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('user')
      // window.location.href = '/login'
    })
  }
  if (networkError && networkError.result.code === 'invalid_token') {
    console.log(`[Network error]: ${networkError}`)
    window.localStorage.setItem('message', networkError)
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
    window.location.href = '/'
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    httpLink
  ])
})

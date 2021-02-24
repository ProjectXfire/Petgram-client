import React, { useReducer } from 'react'
import { userLogged } from './reducers'

const Context = React.createContext()
const initialState = {
  isAuth: false,
  user: '',
  authMessage: ''
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userLogged, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export {
  ContextProvider,
  Context
}

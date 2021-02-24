import { USER_LOGGED_IN_OUT, AUTH_MESSAGE } from './types'

export const userLogged = (state, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_OUT:
      return {
        ...state,
        isAuth: action.payload.loggedIn,
        user: action.payload.user
      }
    case AUTH_MESSAGE:
      return {
        ...state,
        authMessage: action.payload
      }
    default:
      return state
  }
}

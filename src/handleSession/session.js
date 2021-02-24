import { USER_LOGGED_IN_OUT, AUTH_MESSAGE } from '../GlobalContext/types'

export const session = (token, value, dispatch) => {
  if (token) {
    window.sessionStorage.setItem('token', token)
    window.sessionStorage.setItem('user', value)
    dispatch({
      type: USER_LOGGED_IN_OUT,
      payload: {
        loggedIn: true,
        user: value
      }
    })
  } else {
    const userToken = window.sessionStorage.getItem('token')
    if (userToken) {
      const user = window.sessionStorage.getItem('user')
      dispatch({
        type: USER_LOGGED_IN_OUT,
        payload: {
          loggedIn: true,
          user: user
        }
      })
    }
  }
}

export const closeSession = (dispatch) => {
  window.sessionStorage.removeItem('token')
  window.sessionStorage.removeItem('user')
  dispatch({
    type: USER_LOGGED_IN_OUT,
    payload: {
      loggedIn: false,
      user: ''
    }
  })
}

export const errorAuthMessage = (message, dispatch) => {
  dispatch({
    type: AUTH_MESSAGE,
    payload: message
  })
}

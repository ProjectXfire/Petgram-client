import React, { useState, useContext } from 'react'
import { useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { useValidateForm } from '../../hooks/useValidateForm'
import { UserLogin } from '../../components/UserLogin'
import { loginUser } from '../../queries/user'
import { session } from '../../handleSession/session'
import { Context } from '../../GlobalContext/context'

export const Login = () => {
  const [
    valuesForm,
    handleFormValues,
    validateFields,
    messageEmptyField,
    emptiesFields,
    setValuesForm] = useValidateForm()
  const [login, { loading }] = useMutation(loginUser)
  const [registerError, setRegisterError] = useState()
  const { dispatch } = useContext(Context)

  const handleLoggin = (e) => {
    e.preventDefault()
    validateFields()
    if (emptiesFields) {
      login({
        variables: {
          input: {
            email: valuesForm.email,
            password: valuesForm.password
          }
        }
      }).then(({ data: { login } }) => {
        session(login, valuesForm.email, dispatch)
        setValuesForm({
          email: '',
          password: ''
        })
        navigate('/')
      }).catch((error) => {
        setRegisterError(error.graphQLErrors[0].message)
      })
    }
  }

  return (
    <UserLogin
      handleLoggin={handleLoggin}
      valuesForm={valuesForm}
      handleFormValues={handleFormValues}
      messageEmptyField={messageEmptyField}
      title='Incia sesión en Petgram! ❤'
      buttonText='Iniciar sesión'
      register
      loading={loading}
      registerError={registerError}
    />
  )
}

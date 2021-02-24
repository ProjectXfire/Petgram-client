import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { resgisterUser } from '../../queries/user'
import { UserLogin } from '../../components/UserLogin'
import { Context } from '../../GlobalContext/context'
import { useValidateForm } from '../../hooks/useValidateForm'
import { session } from '../../handleSession/session'

export const Register = () => {
  const { dispatch } = useContext(Context)
  const [
    valuesForm,
    handleFormValues,
    validateFields,
    messageEmptyField,
    emptiesFields,
    setEmptiesField,
    setValuesForm] = useValidateForm()
  const [signup, { loading }] = useMutation(resgisterUser)
  const [registerError, setRegisterError] = useState()

  const handleLoggin = (e) => {
    e.preventDefault()
    validateFields()
    if (emptiesFields) {
      signup({
        variables: {
          input: {
            email: valuesForm.email,
            password: valuesForm.password
          }
        }
      })
        .then(({ data: { signup } }) => {
          session(signup, valuesForm.email, dispatch)
          setValuesForm({
            email: '',
            password: ''
          })
          navigate('/')
        })
        .catch((e) => {
          setRegisterError(e.graphQLErrors[0].message)
          setValuesForm({
            ...valuesForm,
            password: ''
          })
          setEmptiesField(false)
        })
    }
  }

  return (
    <UserLogin
      handleLoggin={handleLoggin}
      valuesForm={valuesForm}
      handleFormValues={handleFormValues}
      messageEmptyField={messageEmptyField}
      title='Regístrate en Petgram'
      buttonText='Regístrate'
      register={false}
      registerError={registerError}
      loading={loading}
    />
  )
}

import React from 'react'
import { Link } from '@reach/router'
import { Form } from './styles'
import { Button } from '../../styles/globalStyles'
import { PetgramHero } from '../PetgramHero'
import { ErrorMessage } from '../ErrorMessage'
import { Loading } from '../Loading'

export const UserLogin = ({
  handleLoggin,
  valuesForm,
  handleFormValues,
  messageEmptyField,
  title,
  buttonText,
  register,
  registerError,
  loading
}) => {
  const { email, password } = valuesForm

  return (
    <Form onSubmit={(e) => handleLoggin(e)}>
      <PetgramHero />
      <h4>{title}</h4>
      {
        registerError && <ErrorMessage message={registerError} />
      }
      {
        loading && <Loading />
      }
      <div className='input-group'>
        <input
          type='text'
          placeholder='email'
          name='email'
          onChange={(e) => handleFormValues(e)}
          value={email}
          disabled={loading}
        />
        {
            messageEmptyField.email && <span>{messageEmptyField.email}</span>
        }
      </div>
      <div className='input-group'>
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={(e) => handleFormValues(e)}
          value={password}
          disabled={loading}
        />
        {
            messageEmptyField.password && <span>{messageEmptyField.password}</span>
        }
      </div>
      <Button disabled={loading}>{buttonText}</Button>
      {
        register && <h4>Registrate <Link to='/register'>aqui</Link></h4>
      }
    </Form>
  )
}

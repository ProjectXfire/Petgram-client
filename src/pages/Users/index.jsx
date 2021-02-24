import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Button } from '../../styles/globalStyles'
import { Context } from '../../GlobalContext/context'
import { closeSession } from '../../handleSession/session'

export const Users = () => {
  const { state: { user }, dispatch } = useContext(Context)

  const handleSession = () => {
    closeSession(dispatch)
  }

  return (
    <>
      <Helmet>
        <title>Petgram - Usuario</title>
        <meta name='description' content='Opciones de usuario' />
      </Helmet>
      <h1>Usuario: {user}</h1>
      <Button onClick={handleSession}>Cerrar sesión</Button>
    </>
  )
}

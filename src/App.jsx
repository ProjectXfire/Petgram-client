import React, { useContext, useEffect, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { Context } from './GlobalContext/context'
import { session } from './handleSession/session'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home/index'
import { PhotoCardDetail } from './pages/PhotoCardDetail/index'
import { Users } from './pages/Users/index'
import { Login } from './pages/Login/index'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'

const App = () => {
  const { state: { isAuth }, dispatch } = useContext(Context)
  const Favs = React.lazy(() => import('./pages/Favs'))

  useEffect(() => {
    session(null, null, dispatch)
  }, [])

  return (
    <Suspense fallback={<div />}>
      <Layout>
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <PhotoCardDetail path='/detail/:id' />
          <Register path='/register' />
          {!isAuth && <Login path='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='login' to='/' />}
          <Favs path='/favs' />
          <Users path='/user' />
        </Router>
      </Layout>
    </Suspense>
  )
}

export default App

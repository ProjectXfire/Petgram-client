import React from 'react'
import { Logo } from '../../components/Logo'
import { Categories } from '../../components/Categories'
import { GlobalStyles } from '../../styles/globalStyles'
import { Navbar } from '../../components/Navbar'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Categories />
      {children}
      <Navbar />
    </>
  )
}

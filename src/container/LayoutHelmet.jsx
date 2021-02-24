import React from 'react'
import { Helmet } from 'react-helmet'
import { HeaderInfo } from './styles'

export const LayoutHelmet = ({ title, subtitle, children }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <HeaderInfo>
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {children}
      </HeaderInfo>

    </>
  )
}

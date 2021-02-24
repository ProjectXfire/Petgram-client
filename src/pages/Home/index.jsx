import React from 'react'
import { LayoutHelmet } from '../../container/LayoutHelmet'
import { PhotoCards } from '../../components/PhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <LayoutHelmet title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales doméstico muy bonitos' />
      <PhotoCards photosByCategoryID={id} />
    </>
  )
}

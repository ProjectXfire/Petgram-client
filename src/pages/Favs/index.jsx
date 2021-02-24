import React from 'react'
import { Cards } from './styles'
import { useGetFavorites } from '../../queries/favorites'
import { LayoutHelmet } from '../../container/LayoutHelmet'
import { NotFound } from '../NotFound'
import { Loading } from '../../components/Loading'
import { PhotoCard } from '../../components/PhotoCard'

export default () => {
  const { loading, error, data } = useGetFavorites()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NotFound error={error} />
  }

  return (
    <>
      <LayoutHelmet title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos' />
      <Cards>
        {
        data.favs.map((fav) => (
          <PhotoCard
            key={fav.id}
            id={fav.id}
            likes={fav.likes}
            src={fav.src}
            liked={fav.liked}
            favorite={false}
          />
        ))
      }
      </Cards>

    </>
  )
}

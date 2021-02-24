import React from 'react'
import { PhotoCard } from '../../components/PhotoCard/index'
import { useQuery } from '@apollo/client'
import { getPhoto } from '../../queries/photos'
import { NotFound } from '../NotFound'
import { LayoutHelmet } from '../../container/LayoutHelmet'
import { Loading } from '../../components/Loading'

export const PhotoCardDetail = ({ id }) => {
  const { loading, error, data } = useQuery(getPhoto, { variables: { photoID: id } })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NotFound error={error} />
  }

  return (
    <LayoutHelmet title={`Fotografia ${data.photo.id}`}>
      <PhotoCard
        id={data.photo.id}
        likes={data.photo.likes}
        src={data.photo.src}
        liked={data.photo.liked}
        favorite
      />
    </LayoutHelmet>
  )
}

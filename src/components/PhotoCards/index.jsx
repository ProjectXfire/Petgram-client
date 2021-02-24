import React from 'react'
import { useQuery } from '@apollo/client'
import { Cards } from './styles'
import { getPhotos } from '../../queries/photos'
import { PhotoCard } from '../PhotoCard/index'
import { Loading } from '../Loading/index'

export const PhotoCards = ({ photosByCategoryID }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: {
      categoryID: parseInt(photosByCategoryID)
    }
  })

  if (loading) {
    return (<Loading />)
  }

  return (
    <Cards>
      {
        data.photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            src={photo.src}
            likes={photo.likes}
            liked={photo.liked}
            favorite
          />
        ))
      }
    </Cards>
  )
}

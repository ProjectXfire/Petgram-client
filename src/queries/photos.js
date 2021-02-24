import { gql } from '@apollo/client'

export const getPhotos = gql`
  query GET_PHOTOS($categoryID: ID) {
    photos(categoryId: $categoryID) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
export const getPhoto = gql`
  query GET_PHOTO($photoID: ID!) {
    photo(id: $photoID) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const _likePhoto = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

import { gql } from '@apollo/client'

export const getCategories = gql`
  query GET_CATEGORIES {
    categories {
        id
        cover
        name
        emoji
        path
    }
  }
`

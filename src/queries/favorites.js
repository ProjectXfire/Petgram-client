import { gql, useQuery } from '@apollo/client'

const getGavorites = gql`
  query GET_FAVS {
    favs {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetFavorites = () => {
  const { loading, error, data } = useQuery(getGavorites, {
    fetchPolicy: 'cache-and-network'
  })
  return { loading, error, data }
}

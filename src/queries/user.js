import { gql } from '@apollo/client'

export const resgisterUser = gql`
   mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const loginUser = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

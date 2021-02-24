import React from 'react'
import PropTypes from 'prop-types'
import { MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const ButtonLike = ({ setLikedOnClick, liked, likes }) => {
  return (
    <Button onClick={setLikedOnClick} liked={liked}>
      <MdFavoriteBorder size='30px' />
      <p>{likes} likes!</p>
    </Button>
  )
}

ButtonLike.propTypes = {
  setLikedOnClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired
}

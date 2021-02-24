import React from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { Link } from '@reach/router'
import { Card } from './styles'
import { _likePhoto } from '../../queries/photos'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ButtonLike } from '../ButtonLike/index'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked, favorite }) => {
  const [show, element] = useNearScreen()
  const [likePhoto] = useMutation(_likePhoto)

  const handleButtonLike = () => {
    likePhoto({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Card ref={element}>
      {
      (show) &&
        <div>
          <Link to={`/detail/${id}`}>
            <div>
              <img src={src} alt='photo-card' />
            </div>
          </Link>
          {
            favorite &&
              <ButtonLike
                setLikedOnClick={handleButtonLike}
                liked={liked}
                likes={likes}
              />
          }
        </div>
    }
    </Card>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  liked: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  },
  favorite: PropTypes.bool
}

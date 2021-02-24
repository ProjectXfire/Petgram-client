import React from 'react'
import { Link } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ category: { cover, emoji }, path }) => {
  return (
    <Link to={path}>
      <img src={cover} alt='cat' />
      {emoji}
    </Link>
  )
}

Category.defaultProps = {
  category: {
    path: '',
    cover: DEFAULT_IMAGE,
    emoji: '?'
  },
  path: '#'
}

export default Category

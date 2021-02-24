import React from 'react'
import { List } from './styles'
import { Category } from '../Category'

export const CategoriesFixed = ({ categories, showFixed }) => {
  return (
    <List showFixed={showFixed}>
      {
        categories.map(category => (
          <li key={category.id}><Category category={category} path={`/pet/${category.id}`} /></li>
        ))
      }
    </List>
  )
}

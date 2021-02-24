import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getCategories } from '../../queries/categories'
import { List } from './styles'
import { Category } from '../Category/index'
import { CategoriesFixed } from '../CategoriesFixed/index'
import { Loading } from '../Loading/index'

export const CategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { loading, error, data } = useQuery(getCategories)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY < 150
      if (newShowFixed) {
        setShowFixed(false)
      } else {
        setShowFixed(true)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      {
        loading
          ? <Loading />
          : (
            <>
              <List>
                {data.categories.map(category => (<li key={category.id}><Category category={category} path={`/pet/${category.id}`} /></li>))}
              </List>
              <CategoriesFixed categories={data.categories} showFixed={showFixed} />
            </>
            )
      }
    </>
  )
}

export const Categories = React.memo(CategoriesComponent)

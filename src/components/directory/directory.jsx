import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import CategoriesData from '../category-data/category-data'

import './directory.styles.scss'

const Directory = () => {
  const [categories, setCategories] = React.useState(CategoriesData)
  return (
    <div className='directory-container '>
      {categories.map((category) => {
        return <CategoryItem key={category.id} {...category} />
      })}
    </div>
  )
}

export default Directory

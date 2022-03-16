import React from 'react'
import CategoryItem from '../../components/category-item/category-item.component'
import CategoriesData from '../../components/category-data/category-data'

import './home.styles.scss'

const Home = () => {
  const [categories, setCategories] = React.useState(CategoriesData)

  return (
      <div className='home-container '>
        {categories.map((category) => {
          return <CategoryItem key={category.id} {...category} />
        })}
      </div>
  )
}

export default Home

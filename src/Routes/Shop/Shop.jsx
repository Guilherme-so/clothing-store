import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../Categories-preview/CategoriesPreview'
import Category from '../Category/Category'
import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category'  element={<Category />} />
    </Routes>
  )
}

export default Shop

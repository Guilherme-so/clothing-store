import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import CategoriesPreview from '../Categories-preview/CategoriesPreview'
import Category from '../Category/Category'
import './shop.styles.scss'
import { fetchCategoriesStart } from '../../store/categories/category.action'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop

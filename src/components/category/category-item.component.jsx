import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from './category-item.styles'

const CategoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate(route)

  return (
    <CategoryItemContainer onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Compre agora </p>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem

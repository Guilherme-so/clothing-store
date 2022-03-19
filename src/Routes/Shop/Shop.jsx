import React, { useContext } from 'react'

import { ProductsContext } from '../../Context/ProductsContext/'
import ProductCart from '../../components/ProductCart/ProductCart'

import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop

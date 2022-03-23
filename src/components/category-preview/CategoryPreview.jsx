import { Link } from 'react-router-dom'
import ProductCart from '../ProductCart/ProductCart'
import './categoryPreview.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idk) => idk < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview

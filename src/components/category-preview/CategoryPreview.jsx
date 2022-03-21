import './categoryPreview.scss'
import ProductCart from '../ProductCart/ProductCart'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
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

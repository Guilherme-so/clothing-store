import { useContext } from 'react'
import Bag from '../../assets/shopping-bag.svg?component'
import { CartContext } from '../../Context/CartContext'
import './cartIcon.scss'

const CartIcon = () => {
  const { isModalOpen, setIsModalOpen,cartCount } = useContext(CartContext)

  const handleToogle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='cart-icon-container' onClick={handleToogle}>
      <Bag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
